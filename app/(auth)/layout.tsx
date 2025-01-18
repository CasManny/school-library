import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

const AuthLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth()
  if (session) {
    redirect('/')
  }
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-2">
            <Image
              src={"/icons/logo.svg"}
              alt="logo"
              width={37}
              height={37}
            />
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>
          <div className="">{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src={"/images/auth-illustration.png"}
          alt="auth"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default AuthLayout;
