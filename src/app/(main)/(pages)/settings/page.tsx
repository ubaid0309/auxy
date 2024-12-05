import ProfileForm from "@/components/forms/ProfileForm";
import ProfilePicture from "./_components/ProfilePicture";
import db from "@/lib/db";

const Settings = () => {
  //WIP : Wire up profile
  const authUser = {};
  const uploadProfilePicture = async () => {
    "use server";
  };
  const removeProfilePicture = async () => {
    "use server";
    try {
      const updatedUser = await db.user.update({
        where: {
          clerkId: authUser.id,
        },
        data: {
          profileImage: "",
        },
      });

      return updatedUser;
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error updating user profile " + error.message);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-xl">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          userImage={authUser?.profileImage}
          onDelete={removeProfilePicture}
          onUpload={uploadProfilePicture}
        />
        <ProfileForm />
      </div>
    </div>
  );
};

export default Settings;
