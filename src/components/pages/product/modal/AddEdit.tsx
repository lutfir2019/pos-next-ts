import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

import FileUpload from "@/components/global/input/file";
import Input from "@/components/global/input/inputCustom"; // Pastikan impor komponen ini benar
import InputNumber from "@/components/global/input/inputNumber";
import Modal from "@/components/global/modal/modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { calculateBase64Size } from "@/composables/calculateBase64";
import { useProduct } from "@/stores/product/useProduct";
import { ProductType } from "@/types/products";

interface Props {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  value?: ProductType | null;
}

const validationSchema = yup.object({
  name: yup.string().required("Bidang ini wajib di isi"),
  price_selling: yup
    .number()
    .min(1000, "Minimal Rp.1000 (Seribu)")
    .required("Bidang ini wajib di isi"),
  price_purchase: yup
    .number()
    .min(1000, "Minimal Rp.1000 (Seribu)")
    .required("Bidang ini wajib di isi"),
  quantity: yup
    .number()
    .min(1, "Minimal 1 Pcs")
    .required("Bidang ini wajib di isi"),
  file: yup
    .string()
    .required("Bidang ini wajib di isi")
    .test("fileSize", "Ukuran file terlalu besar. (max. 1MB)", (value) => {
      if (!value) return false;
      const sizeInBytes = calculateBase64Size(value);
      return sizeInBytes <= 1024 * 1024; // 1MB
    })
    .test("fileType", "Format file tidak mendukung", (value) => {
      if (!value) return false;
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const header = value.split(",")[0];
      return allowedTypes.some((type) => header?.includes(type));
    }),
});

const initialValues: ProductType = {
  id: null,
  product_code: "",
  name: "",
  price_selling: 0,
  price_purchase: 0,
  quantity: 0,
  file: null,
};

const AddEdit: React.FC<Props> = ({ open, onClose, value }) => {
  const productStore = useProduct();
  const isOpen = open;

  const submit = async (values: typeof initialValues) => {
    const { price_purchase, price_selling, quantity, file, ...rest } = values;

    onClose(false);
    // for update product
    if (values?.id)
      return await productStore.update({
        price_purchase: Number(price_purchase),
        price_selling: Number(price_selling),
        quantity: Number(quantity),
        file: file?.toString() ?? "",
        ...rest,
      });

    await productStore.create({
      price_purchase: Number(price_purchase),
      price_selling: Number(price_selling),
      quantity: Number(quantity),
      file: file?.toString() ?? "",
      ...rest,
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => onClose(false)}
      className="bg-transparent min-w-full shadow-none"
    >
      <Formik
        initialValues={value ?? initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {() => (
          <Form className="flex flex-col w-full items-center gap-5 p-5 shadow">
            <Card className="mx-auto w-full sm:max-w-2xl">
              <CardHeader>
                <CardTitle className="text-xl">
                  {value?.id ? "Edit" : "Tambah"} Produk
                </CardTitle>
                <CardDescription>Masukkan informasi produk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid">
                  <div className="flex flex-col">
                    <div className="flex w-full flex-col sm:flex-row gap-2">
                      <Input name="product_code" placeholder="Kode" disabled />
                      <InputNumber name="quantity" placeholder="Pcs" />
                    </div>
                    <Input name="name" placeholder="Nama" />
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

                  <div className="flex flex-col w-full gap-2 mt-3">
                    <Button type="submit" className="w-full">
                      {value?.id ? "Edit" : "Tambah"} Produk
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => onClose(false)}
                    >
                      Tutup
                    </Button>
                  </div>
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
