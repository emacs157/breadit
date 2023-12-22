"use client";

import UserAuthForm from "@/components/UserAuthForm";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SignInPage() {
  const { data: session, loading } = useSession();

  if (session) {
    return (
      <>
        You are signed in! <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const { username, password } = event.target.elements;
          await signIn("credentials", {
            username: username.value,
            password: password.value,
          });
        }}
      >
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br /> <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br /> <button type="submit">Sign In</button>
      </form>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        New to Breaddit?
        <Link
          href="/sign-up"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
