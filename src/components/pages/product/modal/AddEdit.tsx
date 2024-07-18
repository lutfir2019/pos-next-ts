import React from "react";
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
import InputNumber from "@/components/global/input/inputNumber";

interface Props {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
}

const validationSchema = yup.object({
  product_name: yup.string().required("Bidang ini wajib di isi"),
  price_selling: yup.number().min(1000, "Minimal Rp.1000 (Seribu)").required("Bidang ini wajib di isi"),
  price_purchase: yup.number().min(1000, "Minimal Rp.1000 (Seribu)").required("Bidang ini wajib di isi"),
  quantity: yup.number().min(1, "Minimal 1 Pcs").required("Bidang ini wajib di isi"),
  file: yup
    .mixed()
    .required("Bidang ini wajib di isi")
    .test("fileSize", "Ukuran file terlalu besar. (max. 1MB)", (value) => {
      return value && value instanceof File && value?.size <= 1024 * 1024; // 1MB
    })
    .test("fileType", "Format file tidak mendukung", (value) => {
      return (
        value &&
        value instanceof File &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      );
    }),
});

const initialValues = {
  id: null,
  product_code: "",
  product_name: "",
  price_selling: 0,
  price_purchase: 0,
  quantity: 0,
  file: null,
};

const AddEdit: React.FC<Props> = ({ open, onClose, text }) => {
  const isOpen = open;
  const test = text;

  const submit = (values: typeof initialValues) => {
    console.log(values);
    onClose(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => onClose(false)}
      className="bg-transparent min-w-full shadow-none"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {() => (
          <Form className="flex flex-col w-full items-center gap-5 p-5 shadow">
            <Card className="mx-auto w-full sm:max-w-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Tambah Produk</CardTitle>
                <CardDescription>
                  Masukkan informasi untuk menambahkan produk baru {test}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid">
                  <div className="flex flex-col">
                    <div className="flex w-full flex-col sm:flex-row gap-2">
                      <Input name="product_code" placeholder="Kode" disabled />
                      <InputNumber name="quantity" placeholder="Pcs" />
                    </div>
                    <Input name="product_name" placeholder="Nama" />
                    <InputNumber
                      name="price_selling"
                      placeholder="Harga Jual / PCS"
                    />
                    <InputNumber
                      name="price_purchase"
                      placeholder="Harga Beli / PCS"
                    />
                  </div>
                  <FileUpload text="Gambar" name="file" />
                  <Button type="submit" className="w-full">
                    Tambah Produk
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => onClose(false)}
                  >
                    Tutup
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
