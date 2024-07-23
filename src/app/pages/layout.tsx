"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import Header from "@/components/global/header/Header";
import Sidebar from "@/components/global/sidebar/Sidebar";
import { useAuth } from "@/stores/auth/useAuth";

interface Children {
  children: React.ReactNode;
}
const Layout = ({ children }: Readonly<Children>) => {
  const authStore = useAuth();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!authStore.getToken()) router.replace("/auth");
  }, [pathName, authStore, router]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
