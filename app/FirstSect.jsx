import MotionComponent from "@/components/MotionComponent";
import { textVariants } from "@/utils/variants";
import React from "react";

const FirstSect = () => {
  return (
    <div
      className="flex items-center justify-center w-full min-h-[600px] h-full"
      style={{
        backgroundImage: 'url("/images/9347.jpg")',
        backgroundPosition: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-[1rem] 2xl:space-y-[1.5rem]  bg-[#0000006c] w-full h-full min-h-[600px] px-6">
        <MotionComponent
          as="h1"
          variants={textVariants}
          className="inter900 lg:text-[3rem] 2xl:text-[4rem] lg:leading-[72px] 2xl:leading-[96px] text-white text-center"
        >
          Empowered to make a difference
        </MotionComponent>
        <MotionComponent
          as="h2"
          variants={textVariants}
          className="text-center inter500 lg:text-[1rem] 2xl:text-[1.5rem] 2xl:leading-[36px] text-white"
        >
          Phasellus interdum sagittis magna. Donec varius ultricies diam sed
          lacinia.
          <br /> Mauris a quam nec, pellentesque pulvinar sem. Morbi lacus
          magna.
        </MotionComponent>
      </div>
    </div>
  );
};

export default FirstSect;
