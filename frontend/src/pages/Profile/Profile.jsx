import { BackButton } from "../../components";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="relative h-[5rem] flex justify-center items-center">
        <h1>Profile</h1>
        <BackButton className="absolute top-2 left-2" color="black" />
      </div>
    </div>
  );
};

export default Profile;
