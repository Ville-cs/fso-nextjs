"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../components/Input";
import InputContainer from "../components/InputContainer";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div>
      <h2 className="text-4xl">Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="username">Username</label>
          <Input type="text" name="username" required />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" required />
        </InputContainer>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}
