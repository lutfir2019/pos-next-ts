"use client";

import React from "react";
import { Form, Formik } from "formik";
import { Auth } from "@/types/auth";
import * as yup from "yup";
import TextField from "@/components/global/input/textField";
import ButtonBase from "@/components/global/button/base";

export default function Page() {
  const initialValues: Auth = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().label("Password"),
  });
  const submit = (values: Auth) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col p-5 gap-3">
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submit(values)}
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
              text="Submit"
              type="submit"
              className="bg-slate-500 hover:bg-slate-600"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
