import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from 'next-auth/react'
import "./globals.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ibmPlexsans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: '/fonts/BebasNeue-Regular.ttf', weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue"
})

export const metadata: Metadata = {
  title: "BookWise",
  description: "A book borrowing university library management solution",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body
        className={`${ibmPlexsans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>

    </SessionProvider>
  );
}
