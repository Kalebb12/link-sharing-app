"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import Image from "next/image";
import Logo from "../../../public/solar_link-circle-bold.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      router.push("/");
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col gap-[50px]">
        <div className="flex items-center justify-center gap-1">
          <Image src={Logo} alt="logo" />
          <h1 className="text-[32px] font-bold">devlinks</h1>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action="#"
          className="mini:w-[476px] rounded-xl bg-[--white] flex flex-col gap-10 p-10"
        >
          <div>
            <h1 className="text-[32px] font-bold">Login</h1>
            <p>Add your details below to get back into the app</p>
          </div>

          <div>
            <span>Email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. alex@email.com"
              className="myInput px-4 py-3 rounded-lg border border-[--purple] outline-none w-full"
            />
          </div>

          <div>
            <span>Create password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="myInput px-4 py-3 rounded-lg border border-[--purple] outline-none w-full"
            />
          </div>
          <button className="ml-auto bg-[--purple] text-[--white] w-full rounded-lg py-[11px] px-[27px] hover:bg-[--purple-active]">
            Login
          </button>

          <span className=" justify-center flex items-center mini:flex-row flex-col">
            Don’t have an account? 
            <Link href="/register" className="text-[--purple]">
              Create account
            </Link>
          </span>
          <span>{error}</span>
        </form>
      </div>
    </div>
  );
}
