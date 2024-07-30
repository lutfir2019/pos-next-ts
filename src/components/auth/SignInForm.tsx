import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as yup from "yup";

import Input from "@/components/global/input/inputCustom";
import Password from "@/components/global/input/password";
import { Button } from "@/components/ui/button";
import { usernameRegex } from "@/constants/auth/regexCarakterKhusus";
import { useAuth } from "@/stores/auth/useAuth";
import { SignInType } from "@/types/auth/login";

interface Props {
  onToggleForm: any;
}

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Bidang ini wajib di isi")
    .matches(
      usernameRegex,
      "Username tidak boleh mengandung spasi atau karakter khusus lainnya"
    ),
  password: yup.string().required("Bidang ini wajib di isi"),
});

const initialValues: SignInType = {
  username: "",
  password: "",
};

const SignInForm: React.FC<Props> = ({ onToggleForm }) => {
  const useStore = useAuth();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => await useStore.login(values)}
    >
      {() => (
        <Form className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="mt-2 text-base text-muted-foreground">
                  Enter your username below to sign-in to your account
                </p>
              </div>
              <div className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Input
                    name="username"
                    label="Username"
                    placeholder="jhondoe"
                    primary
                  />
                  <Password name="password" label="Password" primary />
                </div>
                <Button className="w-full mt-4" disabled={useStore.is_loading}>
                  Sign In
                </Button>
              </div>
              <div className="mt-6 text-center text-sm">
                Don&apos;t have an account? ?{" "}
                <Link href="#" onClick={onToggleForm} className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden bg-muted lg:block">
            <Image
              src="/images/login.svg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-screen w-full bg-white object-cover dark:brightness-[0.9]"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
