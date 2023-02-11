import React from "react";
import Title from "./Title";

function Intro() {
  return (
    <><div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Said Oussat
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        As a web and mobile developer with a mid-level understanding of
        artificial intelligence and machine learning, I have honed my skills in
        creating dynamic and intuitive applications that enhance the user
        experience. My expertise in AI and ML has enabled me to develop
        intelligent systems that can make predictions and automate certain
        processes, providing my clients with innovative solutions to their
        business needs. With a passion for technology and a drive to stay ahead
        of the curve, I strive to constantly improve my skills and stay
        up-to-date with the latest industry advancements. Whether it's building
        complex web applications or crafting elegant mobile experiences, I am
        dedicated to delivering exceptional results for my clients.
        {/* <a
      href="https://youtube.com/fknight"
      target="_blank"
      className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
      rel="noreferrer noopener"
    >
      ForrestKnight
    </a>{" "} */}
      </p>

    </div><Title>Services</Title></>
  );
}

export default Intro;
