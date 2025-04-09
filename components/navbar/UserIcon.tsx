import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";
import Image from "next/image";

async function UserIcon() {
  const user = await currentUser();

  return (
    <>
      {user?.imageUrl ? (
        <Image
          src={user?.imageUrl}
          alt="User profile image"
          width={24}
          height={24}
          className="w-6 h-6 bg-primary rounded-full"
        />
      ) : (
        <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />
      )}
    </>
  );
}
export default UserIcon;
