"use client";
import React from "react";
import UploadCare from "./UploadCare";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type ProfilePictureType = {
  userImage: string | null;
  onDelete?: any;
  onUpload?: any;
};
const ProfilePicture = ({
  userImage,
  onDelete,
  onUpload,
}: ProfilePictureType) => {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    try {
      const response = await onDelete();
      if (response) {
        router.refresh();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error occurred", +error.message);
      }
    }
  };
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="user-image" fill />
              <Button
                onClick={onRemoveProfileImage}
                className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
              >
                <X />
                Remove Logo
              </Button>
            </div>
          </>
        ) : (
          <UploadCare />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
