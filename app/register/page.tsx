"use client";

import { registerUser } from "../actions/users";
import { useActionState, useState } from "react";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, actionState] = useActionState(registerUser, {
    error: "",
    values: {
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });
  const passwordsMatch = password === confirmPassword || confirmPassword === "";

  return (
    <div>
      <h2>Register</h2>
      <form action={actionState}>
        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              defaultValue={state.values?.username}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              defaultValue={state.values?.name}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Confirm password
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {!passwordsMatch && (
          <p style={{ color: "red" }}>Passwords do not match.</p>
        )}
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        <button type="submit" disabled={!passwordsMatch}>
          Register
        </button>
      </form>
    </div>
  );
}
