"use client";

import { useState } from "react";
import SignInForm from "@/components/auth/SignInForm";
import SignUpForm from "@/components/auth/SignUpForm";
import { NextPage } from "next";

const Page: NextPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          isSignUp ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <SignInForm onToggleForm={toggleForm} />
      </div>
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          isSignUp ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SignUpForm onToggleForm={toggleForm} />
      </div>
    </div>
  );
};

export default Page;
