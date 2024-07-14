import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Modal from "@/components/global/modal/modal";
import Input from "@/components/global/input/inputCustom"; // Pastikan impor komponen ini benar
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FileUpload from "@/components/global/input/file";

interface Props {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = yup.object({
  // name: yup.string().required("Name is required").label("Name"),
  // price: yup.number().required("Price is required").label("Price"),
  // description: yup.string().label("Description"),
  file: yup
    .mixed()
    .required("File is required")
    .test("fileSize", "File size is too large. (max. 1MB)", (value) => {
      return value && value instanceof File && value?.size <= 1024 * 1024; // 1MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        value &&
        value instanceof File &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      );
    }),
});

const initialValues = {
  name: "",
  price: "",
  description: "",
  file: null,
};

const AddEdit: React.FC<Props> = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submit = (values: typeof initialValues) => {
    console.log(values);
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Modal
      open={isOpen}
      onClose={() => onClose(false)}
      className="bg-transparent min-w-full"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {() => (
          <Form className="flex flex-col w-full items-center gap-5 p-5">
            <Card className="mx-auto max-w-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4 w-full max-sm:grid-cols-1">
                    <div className="grid gap-2">
                      <Input name="product_code" placeholder="Kode" disabled />
                    </div>
                    <div className="grid gap-2">
                      <Input name="product_name" placeholder="Nama" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <FileUpload text="Gambar" name="file" />
                  </div>
                  <div className="grid gap-2">
                    <Input name="name" type="password" />
                  </div>
                  <Button type="submit" className="w-full">
                    Create an account
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => onClose(false)}
                  >
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddEdit;
