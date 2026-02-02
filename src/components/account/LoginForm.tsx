"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  title?: string;
  onSubmit?: (data: { email: string; password: string }) => void;
};

export default function LoginForm({
  title = "LOGIN",
  onSubmit,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[520px] px-4 py-14">
        <h1 className="text-center text-[22px] font-extrabold tracking-[0.18em] text-black">
          {title}
        </h1>

        <div className="mt-2 text-center text-[11px] tracking-[0.18em] text-black/70">
          OR{" "}
          <Link
            href="/register"
            className="font-semibold text-black underline underline-offset-4"
          >
            CREATE ACCOUNT
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="block text-[10px] font-semibold tracking-[0.22em] text-black/70">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="mt-2 w-full rounded-full border border-black/30 bg-white px-5 py-3 text-[12px] tracking-[0.10em] outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-semibold tracking-[0.22em] text-black/70">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mt-2 w-full rounded-full border border-black/30 bg-white px-5 py-3 text-[12px] tracking-[0.10em] outline-none focus:border-black"
              required
            />

            <div className="mt-3 text-right">
              <Link
                href="/forgot-password"
                className="text-[11px] tracking-[0.14em] text-black/70 underline underline-offset-4 hover:text-black"
              >
                FORGOT YOUR PASSWORD?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-black py-3 text-[12px] font-semibold tracking-[0.22em] text-white hover:opacity-90"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </section>
  );
}
