import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { useEffect } from "react";



export default function Footer() {

    useEffect(() => {
        
        emailjs.init("teRcsjGTzAKOkiun5"); 
    }, []);


    const handleSendEmailAddress = () => {
        const email = document.getElementById('emailAddress').value;
        if (email === "") {
            alert('Please enter a valid email address');
            return;
        }
        const templateParams = {
            to_name: 'Omar Zoubi',
            from_name: email,
            message: 'New Email Address Request',
            email: email,
        };

        emailjs.send('service_0vapial', 'template_zvr15v7', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Thank you for your request. We will contact you shortly.");
            }, (err) => {
                console.log('FAILED...', err);
                alert("There was an error sending your request. Please try again.");
            });

    }

    
  return (
    <div className=" flex flex-col md:flex-row flex-nowrap py-6 md:py-10 px-6 md:px-40  text-white bg-my-blue">
      <div className="md:w-1/2 flex flex-col gap-4 items-start">
        <h2 className="font-semibold">Services</h2>
        <p className=" text-justify">
          Specialized in treating humidity of basement walls, offering
          solutions.
        </p>
        <div className="inline-flex gap-6 pb-10">
          <FaFacebook className=" size-5 md:size-8" />
          <FaInstagram className=" size-5 md:size-8" />
          <FaTiktok className=" size-5 md:size-8" />
          <FaTwitter className=" size-5 md:size-8" />
        </div>
        <p className=" hidden md:block">© 2024. All rights reserved.</p>
      </div>
      <div className="md:w-1/2 flex flex-col-reverse md:flex-row flex-nowrap gap-10 ">
        <div className=" flex flex-col gap-4">
          <h2 className="font-semibold hidden md:block">Contact</h2>
          <a
            href="tel:00491747292833"
            className=" inline-flex items-center gap-4"
          >
            <IoCall className=" size-5 md:size-8" />
            00491747292833
          </a>
            <a
                href="https://wa.me/00491747292833"
                className=" inline-flex items-center gap-4"
            >
                <FaWhatsapp className= "size-5 md:size-8" />
                00491747292833
            </a>
            <p className="block md:hidden pt-6">© 2024. All rights reserved.</p>

        </div>
        <div className=" flex flex-col items-start gap-4 w-full">
            <h2 className="font-semibold  hidden md:block">Reserve</h2>
            <div className=" w-full">
                <p className="text-left">Schedule Your Free Basement Inspection</p>
                <input type="email" name="email" id="emailAddress" placeholder="Enter Your Email Address Here" className="p-4 h-14 text-black w-full rounded-xl" />
            </div>
            <button type="submit" className="bg-my-lightBlue text-white px-8 py-4 rounded-full" onClick={handleSendEmailAddress}>Submit Your Request Now</button>
        </div>
      </div>
    </div>
  );
}
