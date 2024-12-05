"use client";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import { useTheme } from "next-themes";
import "@uploadcare/react-uploader/core.css";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const UploadCare = ({ onUpload }) => {
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    // const handleImageUpload = async (e: any) => {
    //   const file = await onUpload;
    // };
  }, []);

  const onUploadSuccessHandler = async (e: any) => {
    // const file = await onUpload(e.cdnUrl);
    console.log(e);
    if (e.isSuccess) {
      router.refresh();
    }
  };
  return (
    <div>
      <FileUploaderRegular
        sourceList="local"
        classNameUploader={`${theme == "light" ? "uc-light" : "uc-dark"}`}
        pubkey="fdaeb8982b5831cfc238"
        onFileUploadSuccess={onUploadSuccessHandler}
      />
    </div>
  );
};

export default UploadCare;
