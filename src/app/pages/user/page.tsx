"use client";

import Settings from "@/components/pages/user/Settings";
import { useAuth } from "@/stores/auth/useAuth";
import { useUser } from "@/stores/user/useUser";
import { UserSetting } from "@/types/users";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as yup from "yup";

// Validation schema
const validationSchema = yup.object({
  name: yup.string().required("Bidang ini wajib di isi"),
  username: yup.string().required("Bidang ini wajib di isi"),
  currentPassword: yup.string(),
  password: yup
    .string()
    .when(["currentPassword"], ([currentPassword], scheme) => {
      return currentPassword
        ? scheme.required("Bidang ini wajib di isi")
        : scheme;
    })
    .test(
      "not-same-as-current",
      "Password baru tidak boleh sama dengan password saat ini",
      function (value) {
        return (
          value !== this.parent.currentPassword &&
          this.parent.currentPassword !== ""
        );
      }
    ),
  passwordConfirm: yup
    .string()
    .when(["currentPassword"], ([currentPassword], scheme) => {
      return currentPassword
        ? scheme.required("Bidang ini wajib di isi")
        : scheme;
    })
    .oneOf([yup.ref("password")], "Password Tidak Cocok")
    .required("Bidang ini wajib di isi"),
});

const initialValues: UserSetting = {
  name: "",
  username: "",
  currentPassword: "",
  password: "",
  passwordConfirm: "",
};

// Page component
const Page: NextPage = () => {
  const router = useRouter();
  const userStore = useUser();
  const authStore = useAuth();
  const [userData, setUserData] = useState(initialValues);

  useEffect(() => {
    userStore.getSelf();
  }, []);

  useEffect(() => {
    const { currentPassword, password, passwordConfirm } = initialValues;
    const { name, username } = userStore.data ?? { name: "", username: "" };

    setUserData({
      name,
      username,
      password,
      currentPassword,
      passwordConfirm,
    });
  }, [userStore.data]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const { id, role } = userStore.data ?? { id: 0, role: "user" };
        await userStore.updateUser({ ...values, id, role }).then(() => {
          authStore.setUser({ ...(values as any) });
          router.push("/pages/dashboard");
        });
      }}
    >
      {({ isSubmitting, setValues, values }) => (
        <Form className="w-full mx-auto p-4">
          <Settings
            isSubmitting={isSubmitting}
            setValues={setValues}
            userData={userData}
            values={values}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Page;
