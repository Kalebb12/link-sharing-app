"use client";
import Image from "next/image";
import Logo from "../../../public/solar_link-circle-bold.png";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useRouter } from "next/navigation";
const Register = () => {
    const [email , setEmail] = useState("")
    const [error , setError] = useState("")
    const [confirmation, setConfirmation] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    async function  handleSubmit  (e: FormEvent) {
        e.preventDefault()
        console.log("submitted")
        setError("");
        if(confirmation !== password){
            setError("Passwords don't match");
            return;
        }
        try {
            await createUserWithEmailAndPassword(getAuth(app), email, password);
            router.push("/login");
          } catch (e) {
            setError((e as Error).message);
          }
          setPassword("")
          setConfirmation("")
    }
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col gap-[50px]">
        <div className="flex items-center justify-center gap-1">
          <Image src={Logo} alt="logo" />
          <h1 className="text-[32px] font-bold">devlinks</h1>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)} action="#" className="mini:w-[476px] rounded-xl bg-[--white] flex flex-col gap-10 p-10">
          <div>
            <h1 className="text-[32px] font-bold">Create account</h1>
            <p>Let’s get you started sharing your links!</p>
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

          <div>
            <span>Confirm password</span>
            <input
              type="password"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              placeholder="At least 8 characters"
              className="myInput px-4 py-3 rounded-lg border border-[--purple] outline-none w-full"
            />
          </div>

          <span>Password must contains at least 8 characters</span>
          <span>{error}</span>
          <button className="ml-auto bg-[--purple] text-[--white] w-full rounded-lg py-[11px] px-[27px] hover:bg-[--purple-active]">
            Create new account
          </button>

          <span>Already have an account? <Link href="/login" className="text-[--purple]">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Register;
