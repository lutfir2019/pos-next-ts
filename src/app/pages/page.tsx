"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Pages = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/pages/dashboard");
  }, [router]);

  return null; // Halaman ini tidak perlu menampilkan konten
};

export default Pages;
