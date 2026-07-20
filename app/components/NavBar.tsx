"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import NavLink from "./NavLink";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="px-50 flex items-center gap-5 py-5 bg-gray-700">
      <NavLink href="/">home</NavLink>
      {" | "}
      <NavLink href="/blogs">blogs</NavLink>
      {" | "}
      <NavLink href="/users">users</NavLink>
      {" | "}
      {session ? (
        <>
          <NavLink href="/blogs/new">create new</NavLink>
          <div className="ml-auto flex items-center gap-5">
            <em>{session.user?.name} logged in </em>{" "}
            <button
              onClick={() => signOut()}
              className="hover:text-blue-500 text-xl"
            >
              logout
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink href="/login">login</NavLink>
          {" | "}
          <NavLink href="/register">register</NavLink>
        </>
      )}
    </nav>
  );
}
