"use client";
import axios from "axios";
import { FC, useState } from "react";

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
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input-class" // Replace with your input CSS class
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-class" // Replace with your input CSS class
        />
        <button type="submit" className="button-class">
          Sign Up
        </button>{" "}
        {/* Replace with your button CSS class */}
      </form>
    </div>
  );
};

export default SignUp;
