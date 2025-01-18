import { auth } from "@/auth";
import Header from "@/components/header";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth()
  if(!session) redirect('/sign-in')
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default RootLayout;
