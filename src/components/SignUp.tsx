"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { FC, FormEvent, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

interface SignUpProps {
  // Add any additional props you might need
}

const SignUp: FC<SignUpProps> = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const payload = { username, password };
      const response = await axios.post(`/api/signUp/`, payload);

      if (response.status === 200 || response.status === 201) {
        // Redirect to home page on successful sign-up
        router.push("/");
      } else {
        // Handle other status codes or responses as needed
        console.log("Sign-up was not successful.");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Handle API errors (e.g., display error message to the user)
        console.log(`Error: ${error.response.data.message}`);
      } else {
        // Handle non-API errors (e.g., network issues)
        console.log(error);
      }
    }
  };

  return (
    <div>
      {/* Credential Sign Up Form */}
      <form onSubmit={handleCredentialSignUp} className="flex flex-col gap-4">
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
        <Button type="submit" className="button-class">
          Sign Up
        </Button>
        {/* Replace with your button CSS class */}
      </form>
    </div>
  );
};

export default SignUp;
