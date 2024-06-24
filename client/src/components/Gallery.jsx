import { useEffect, useState } from "react";
import './gallery.css';
import AnimatedImage from "./AnimatedImage";
import {useNavigate} from 'react-router-dom';

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setIsLoading(false);
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-my-blue"></div>
      </div>
    );
  }

  const x = [9, 14, 34, 35, 40, 41, 45, 46, 48];
  const wetWallImages = x.map((x, index) => (
    <AnimatedImage key={index} src={`./${x}.webp`} alt={`Wet Wall ${x}`} />
  ));

  const i = [5, 8, 12, 15, 36, 37, 38, 39, 43];
  const dryWallImages = i.map((i, index) => (
    <AnimatedImage key={index} src={`./${i}.webp`} alt={`Dry Wall ${i}`} />
  ));

  return (
    <div className="py-10 md:py-20 px-6 md:px-20 flex flex-col gap-10 md:gap-20">
      <h1 className="text-center font-bold">Gallery</h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-20 w-full py-10">
          <div className="w-full md:w-4/12 flex flex-col gap-3 md:gap-6">
            <h2 className="text-left text-3xl md:text-4xl font-semibold">Problem</h2>
            <p className="text-justify line-clamp-6">
              Are you experiencing humidity issues in your basement? Does your
              basement have a musty smell? Are you noticing mold or mildew
              growth? Are you experiencing water seepage or flooding? Are you
              noticing cracks in your basement walls? Are you noticing
              efflorescence on your basement walls? Are you noticing bowing or
              leaning walls?
            </p>
            <h4 className="text-start text-my-blue font-bold">
              Do your walls look like those pictures?
            </h4>
          </div>
          <div className="w-full grid grid-cols-2  md:w-8/12 md:flex md:flex-row flex-wrap gap-3 md:gap-8 -z-10">
            {wetWallImages}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-20 w-full py-10">
        <button onClick={()=>navigate("/contact")} className=" block md:hidden bg-my-blue w-52 md:w-72 mx-auto text-white text-lg md:text-2xl font-bold py-2 md:py-4 px-4 md:px-8 rounded-3xl hover:bg-black">
              Contact Us Now
            </button>
          <div className="w-full grid grid-cols-2  md:w-8/12 md:flex md:flex-row flex-wrap gap-3 md:gap-8 -z-10">
            {dryWallImages}
          </div>
          <div className="w-full md:w-4/12 flex flex-col gap-3 md:gap-6">


            <h2 className="text-left text-3xl md:text-4xl font-semibold">Solution</h2>
            <p className="text-justify line-clamp-6">
              We offer a variety of solutions to help you solve your basement
              wall humidity issues. Our solutions are designed to address the
              root cause of the problem and provide long-lasting results. Our
              team of experts will work with you to develop a customized
              solution that meets your specific needs and budget. We use the
              latest technology and techniques to ensure that your basement
              walls are dry and free from humidity. Our solutions are backed by
              a warranty, so you can have peace of mind knowing that your
              investment is protected.
            </p>
            <h4 className="text-start text-my-blue font-bold">
              Would you like your walls to look like this?
            </h4>
            <div className="w-full"></div>
            <button onClick={()=>navigate("/contact")} className="hidden md:block bg-my-blue w-72 mx-auto text-white text-2xl font-bold py-4 px-8 rounded-3xl hover:bg-black">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
