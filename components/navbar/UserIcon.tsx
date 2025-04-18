import { currentUser } from "@clerk/nextjs/server";
// import { LuUser } from "react-icons/lu";
// import { FaUserAstronaut } from "react-icons/fa6";
import Image from "next/image";

import avatar from "../../public/avatar1.jpg";
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
        // <FaUserAstronaut className="w-6 h-6 bg-primary rounded-full text-white" />
        <Image
          className="w-6 h-6 bg-primary rounded-full"
          src={avatar}
          alt="no name avatar image"
          width={6}
          height={6}
        />
      )}
    </>
  );
}
export default UserIcon;
