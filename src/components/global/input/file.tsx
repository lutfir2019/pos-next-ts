import React, { useRef, useState } from "react";
import { useField } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageUploadProps {
  name: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  primary?: boolean;
  text: string;
  allowedType?: string[];
}

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      typeof reader.result === "string"
        ? resolve(reader.result)
        : reject(new Error("Failed to read file"));
    };
    reader.onerror = (error) => reject(error);
  });

const ImageUpload: React.FC<ImageUploadProps> = ({
  name,
  label,
  className,
  disabled,
  primary,
  text,
  allowedType = [".jpg", ".jpeg", ".png"],
}) => {
  const [field, meta, helpers] = useField(name);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files && !event.target?.files?.length) return;
    field.onChange(event);
    const file = event.target?.files?.[0];
    setFileName(file?.name);
    const fileExtension = `.${file?.name.split(".").pop()?.toLowerCase()}`;
    if (!allowedType.includes(fileExtension)) {
      alert("File type not allowed.");
      setBase64Image(null);
      return;
    }
    const base64 = await toBase64(file);
    setBase64Image(base64);
    helpers.setValue(file);
  };

  const triggerFileInput = () => {
    fileInput.current?.click();
  };

  return (
    <div className={cn("flex flex-col w-full text-gray-700", className)}>
      {label && (
        <div
          className={cn("mb-2 form-label", { "text-red-500": !!meta.error })}
        >
          {primary && <span className="font-bold text-red-500">*</span>}
          {label}
        </div>
      )}
      <div className="flex flex-col gap-3">
        <Label className="flex border rounded-md w-fit p-1 pr-3 items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="rounded-r-none"
            onClick={triggerFileInput}
          >
            {text}
          </Button>
          <div className="flex mt-1 text-sm font-normal text-gray-600 dark:text-gray-300">
            Uploaded file: {fileName ?? "No choice file"}
          </div>
          <Input
            ref={fileInput}
            id={name}
            name={name}
            type="file"
            className="hidden"
            onChange={handleChange}
            accept={allowedType.join(", ")}
          />
        </Label>
        {base64Image && base64Image?.includes("data:image") && (
          <div className="flex justify-left mt-4">
            <Image
              src={base64Image}
              alt="Preview"
              className="max-w-[7rem] h-auto"
              width={500}
              height={500}
            />
          </div>
        )}
        {meta.touched && meta.error && (
          <span className="text-red-500 text-xs">{meta.error}</span>
        )}
        <p className="text-xs text-gray-600 dark:text-gray-300">
          Allowed file types: {allowedType.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;
