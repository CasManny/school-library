import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";
import "@/styles/admin.css";
import Sidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
const AdminLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar session={session} />
      <div className="admin-container">
        <AdminHeader session={session} />
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
