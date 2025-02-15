"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";
import Image from "next/image";

type TImageUploaderProps = {
  imageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
};

const NMImageUploader = ({
  imageFiles,
  setImageFiles,
}: TImageUploaderProps) => {

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const filesArray = Array.from(event.target.files);

    setImageFiles((prev) => [...prev, ...filesArray]);

    const newPreviews = filesArray.map((file) => {
      const reader = new FileReader();
      return new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newPreviews).then((results) => {
      setImagePreview((prev) => [...prev, ...results]);
    });

    event.target.value = ""; // Reset input field
  };

  return (
    <div>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label
        htmlFor="image-uploader"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        Upload Logo
      </label>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {imagePreview.map((preview, idx) => (
          <Image
            key={idx}
            src={preview}
            width={100}
            height={100}
            alt={`logo-${idx}`}
            className="rounded-md shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default NMImageUploader;
