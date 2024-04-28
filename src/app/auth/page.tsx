"use client";

import React from "react";
import { Form, Formik } from "formik";
import { Auth } from "@/types/auth";
import * as yup from "yup";
import TextField from "@/components/global/input/textField";
import ButtonBase from "@/components/global/button/base";
import { Login } from "@/hook/auth";

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().required().label("Password"),
});
const initialValues: Auth = {
  email: "",
  password: "",
};

export default function Page() {
  const { mutate: login, ...mutation } = Login();

  return (
    <div className="flex flex-col p-5 gap-3">
      <h1>My Form</h1>
      <p className="flex justify-center text-red-500">
        {mutation.error?.response?.data?.message ?? ""}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => login(values)}
      >
        {() => (
          <Form className="flex flex-col gap-3">
            <TextField
              name="email"
              type="email"
              label="Email"
              className="text-black"
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              className="text-black"
            />
            <ButtonBase
              text={mutation.isPending ? "Loading..." : "Submit"}
              type="submit"
              disabled={mutation.isPending}
              className={`bg-slate-500 hover:bg-slate-600 ${
                mutation.isPending && "bg-slate-600"
              }`}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
