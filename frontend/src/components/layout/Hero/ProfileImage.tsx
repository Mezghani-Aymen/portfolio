import React from "react";
import Image from "@/components/ui/Image";

function ProfileImage() {
    return (
        <div
            className="
        relative 
        w-full 
        max-w-80
        aspect-square 
        rounded-t-[50%] 
        bg-gradient-to-br from-[#D76B30] to-[#A3C4E0] 
        flex justify-center items-center
      "
            data-aos="zoom-out-left"
            data-aos-delay="400"
        >
            {/* Overlay */}
            <div
                className="
          absolute top-0 left-0 
          w-full h-full 
          bg-[rgba(245,229,213,0.5)] 
          z-[1]
          rounded-t-[50%]
        "
            > </div>

            {/* Profile Image */}
            <Image
                filename="mezghani_mohamedAymen.png"
                path=""
                alt="Profile Image"
                priority={true}
                className="w-full h-full object-cover rounded-t-[50%] z-[2]"
            />
        </div>
    );
}

export default ProfileImage;
