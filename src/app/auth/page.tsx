"use client";

import React from "react";
import { Form, Formik } from "formik";
import { Auth } from "@/types/auth";
import * as yup from "yup";
import TextField from "@/components/global/input/textField";
import ButtonBase from "@/components/global/button/base";
import Link from "next/link";
import { useAuth } from "@/stores/auth/useAuth";

const validationSchema = yup.object().shape({
  unm: yup.string().email().required().label("Email"),
  pass: yup.string().required().label("Password"),
});
const initialValues: Auth = {
  unm: "",
  pass: "",
};

export default function Page() {
  const authStore = useAuth();

  return (
    <div className="flex flex-col p-5 gap-3">
      <h1>My Form</h1>
      <p className="flex justify-center text-red-500">
        {authStore.error?.response?.data?.message ?? ""}
      </p>
      <p>
        {authStore.data.unm}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => authStore.login(values)}
      >
        {() => (
          <Form className="flex flex-col gap-3">
            <TextField
              name="unm"
              type="email"
              label="Email"
              className="text-black"
            />
            <TextField
              name="pass"
              type="password"
              label="Password"
              className="text-black"
            />
            <ButtonBase
              type="submit"
              disabled={authStore.is_loading}
              className={`${authStore.is_loading && "bg-blue-700"}`}
            >
              {authStore.is_loading ? "Loading..." : "Submit"}
            </ButtonBase>
          </Form>
        )}
      </Formik>
      <Link href="/pages/product">Product</Link>
    </div>
  );
}
