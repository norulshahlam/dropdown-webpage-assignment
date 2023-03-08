import React from "react";
import imageherodesktop from "../../images/image-hero-desktop.png";
import imageheromobile from "../../images/image-hero-mobile.png";
import { clientIcon } from "../../resources/data";

const Section = () => {
  return (
    <div
      className="flex flex-col-reverse sm:flex-row  
    [&>div]:p-8 lg:px-12"
    >
      <div className="sm:text-left text-center w-full">
        <div className=" lg:text-6xl md:text-5xl text-3xl font-bold sm:max-w-[30rem] xl:pt-16 md:pt-8">
          Make remote work
        </div>
        <br />
        <h2 className="lg:pt-8 sm:max-w-[25rem]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </h2>
        <button className="px-4 py-2 bg-black text-white box-border border-2 border-gray-500 rounded-xl min-w-max xl:my-28 lg:my-16 md:my-10 sm:my-8 my-8">
          Learn more
        </button>
        <ol className="flex md:justify-start justify-center">
          {clientIcon.map((v, i) => (
            <li key={i}>
              <img className="sm:pr-4 sm:px-1 px-2" key={i} src={v.icon} />
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full max-h-[35rem]">
        <img
          className="hidden sm:block max-h-[40rem] min-h-[15rem] mx-auto my-auto"
          src={imageherodesktop}
        />
        <img className="sm:hidden block max-h-[30rem]" src={imageheromobile} />
      </div>
    </div>
  );
};

export default Section;
