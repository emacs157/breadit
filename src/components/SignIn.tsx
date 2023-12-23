"use client";

import UserAuthForm from "@/components/UserAuthForm";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Input } from "./ui/Input";

export default function SignInPage() {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (status === "loading") {
    return <p>Loading!</p>;
  }
  if (session) {
    return (
      <>
        You are signed in! <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <form
        className="flex flex-col gap-4"
        onSubmit={async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          await signIn("credentials", {
            username: username,
            password: password,
          });
        }}
      >
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
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
