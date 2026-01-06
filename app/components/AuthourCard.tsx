import Image from "next/image";

import React from "react";

const AuthourCard = ({ height, width }: { height: number; width: number }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-${width / 4} h-${
          height / 4
        } rounded-full overflow-hidden my-2`}
      >
        <Image
          className="object-cover"
          src={"/android-chrome-512x512.png"}
          alt="Authour Profile"
          height={height}
          width={width}
        />
      </div>
      <p>BlogVerse CEO</p>
    </div>
  );
};

export default AuthourCard;
