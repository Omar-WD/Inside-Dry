import { useEffect, useState } from "react";

export default function AboutUs() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenDisplay, setScreenDisplay] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth > 768) {
      setScreenDisplay("desktop");
    } else {
      setScreenDisplay("mobile");
    }
  }, [screenWidth]);

  if (screenDisplay === "desktop") {
  
    return (
      <div className=" md:grid md:grid-cols-2 gap-28 w-full h-max px-8 md:px-40 md:py-28 items-center ">
          <div className="flex flex-row flex-nowrap items-center">
          <img src="./7.webp" alt="" className="w-auto h-[350px]  rounded-3xl   border-2 border-inherit border-my-black  shadow-2xl shadow-black" />
          <img src="./8.webp" alt="" className="w-auto h-[290px]   rounded-3xl -ml-32  border-2 border-inherit border-my-black  shadow-2xl shadow-black" />
          </div>
        <div className=" text-Black flex flex-col gap-10 items-start">
          <h1 className="text-6xl font-semibold ">
            About Inside Dry
          </h1>
          <p className=" text-left w-3/4">
            Inside Dry offers expert solutions for basement wall humidity issues. See before and after photos, get a free checkup, and book an appointment today.
          </p>
          
        </div>
      </div>
    )
  }
    return (
      <div className="flex flex-col items-center gap-10 py-10">
        <h1 className="text-4xl font-semibold ">
          About Inside Dry
        </h1>
        <p className=" text-left w-3/4">
          Inside Dry offers expert solutions for basement wall humidity issues. See before and after photos, get a free checkup, and book an appointment today.
        </p>
        <div className="flex flex-col items-center">
          <img src="./7.webp" alt="" className=" w-[15rem] h-[18rem] -ml-24  rounded-3xl   border-2 border-inherit border-my-black  shadow-2xl shadow-black" />
          <img src="./8.webp" alt="" className="w-[12rem] h-[14rem] -mt-60 ml-20  rounded-3xl  border-2 border-inherit border-my-black  shadow-2xl shadow-black" />
        </div>
      </div>
    )
  }
  