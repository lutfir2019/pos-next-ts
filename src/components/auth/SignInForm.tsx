import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import Input from "@/components/global/input/inputCustom";
import Password from "@/components/global/input/password";
import React from "react";

interface Props {
  onToggleForm: any;
}

interface SignInType {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email tidak valid")
    .required("Bidang ini wajib di isi"),
  password: yup.string().required("Bidang ini wajib di isi"),
});

const initialValues: SignInType = {
  email: "",
  password: "",
};

const SignInForm: React.FC<Props> = ({ onToggleForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="mt-2 text-base text-muted-foreground">
                  Enter your email below to sign-in to your account
                </p>
              </div>
              <div className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="jhondoe@example.com"
                    primary
                  />
                  <Password name="password" label="Password" primary />
                </div>
                <Button type="submit" className="w-full mt-4">
                  Sign In
                </Button>
              </div>
              <div className="mt-6 text-center text-sm">
                Don't have an account? ?{" "}
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
