"use client";
import axios from "axios";
import router from "next/dist/client/router";
import { FC, useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface SignUpProps {
  // Add any additional props you might need
}

const SignUp: FC<SignUpProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialSignUp = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const payload = { username, password };
      const response = await axios.post(`/api/signUp/`, payload);
      router.push("/");

      // Handle successful sign-up (e.g., redirect to a different page)
      // ...
    } catch (error) {
      console.log(error.message); // Display error message to the user
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
