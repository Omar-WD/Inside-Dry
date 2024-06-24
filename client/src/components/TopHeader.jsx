import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FaBars } from "react-icons/fa";

export default function TopHeader() {
  const [sidebarDisplay, setSidebarDisplay] = useState('hidden');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (screenWidth < 500) {
    return (
      <div className= {`sticky top-0 left-0 flex flex-row flex-nowrap justify-start gap-14 items-center bg-white topNav h-18 w-full px-4  py-6 shadow-lg`}>
          <div onClick={()=>setSidebarDisplay('block')} className=' text-my-black inline-flex  text-4xl font-bold'>
              <FaBars />
          </div>
          <h1 className='font-extrabold'><span className='text-my-blue'>Inside </span><span className=' text-my-black'>Dry</span></h1>
          <div className={` ${sidebarDisplay} h-screen w-screen fixed top-0 left-0 z-50 bg-white`}>
          <div className='w-full inline-flex justify-between font-extrabold py-6 px-10'><span className='text-4xl'><span className='text-my-blue'>Inside </span><span className=' text-my-black'>Dry</span></span><span onClick={()=>setSidebarDisplay("hidden")}  className='px-3 py-1 border-2 rounded-full'>X</span></div>
            <ul className='w-full h-full flex flex-col items-center *:text-xl *:font-bold *:py-6 *:shadow-inner *:w-full *:text-center '>
              <li onClick={()=>setSidebarDisplay("hidden")}><NavLink to="/" className=" focus:underline underline-offset-4" >Home</NavLink></li>
              <li onClick={()=>setSidebarDisplay("hidden")}><NavLink to="/services" className=" focus:underline underline-offset-4">Services</NavLink></li>
              <li onClick={()=>setSidebarDisplay("hidden")}><NavLink to="/gallery" className=" focus:underline underline-offset-4">Gallery</NavLink></li>
              <li onClick={()=>setSidebarDisplay("hidden")}><NavLink to="/contact" className=" focus:underline underline-offset-4">Contact</NavLink></li>
            </ul>

          </div>
      </div>

    );
  }


    
  return (
    <div className=' sticky top-0 left-0 flex flex-row flex-nowrap justify-between items-center bg-white topNav h-18 w-full md:px-40 py-6 shadow-lg'>
        <h1 className='font-extrabold'><span className='text-my-blue'>Inside </span><span className=' text-my-black'>Dry</span></h1>
        <div className=' text-my-black inline-flex gap-8 text-xl font-bold'>
            <NavLink to="/" className=" focus:underline underline-offset-4" >Home</NavLink>
            <NavLink to="/services" className=" focus:underline underline-offset-4">Services</NavLink>
            <NavLink to="/gallery" className=" focus:underline underline-offset-4">Gallery</NavLink>
            <NavLink to="/contact" className=" focus:underline underline-offset-4">Contact</NavLink>
        </div>
    </div>
  )
}
