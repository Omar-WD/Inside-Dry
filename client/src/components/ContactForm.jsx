import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("teRcsjGTzAKOkiun5");
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted");

    const { email, name, phone, message } = formData;

    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Message:", message);

    if (email === "" || name === "" || phone === "" || message === "") {
      alert("Please fill all fields");
      console.log("Validation failed");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone,
    };

    console.log("Sending email with params:", templateParams);

    emailjs.send("service_0vapial", "template_i6dkscp", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Thank you for your request. We will contact you shortly.");
      },
      (err) => {
        console.log("FAILED...", err);
        alert("There was an error sending your request. Please try again.");
      }
    )
    
  };

  return (
    <div className="w-full min-h-96 py-10 px-8 md:px-60">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="text-3xl md:text-5xl font-bold">Contact Us For Free</h1>
        <p className="text-justify">
          Schedule your free checkup and get expert advice on humidity issues.
        </p>
      </div>
      <div className="w-full flex flex-row justify-center mt-10">
        <div className="w-full md:w-1/2 items-center text-center my-auto  ">
          <form onSubmit={handleSendEmail} className="w-full flex flex-col items-center gap-4 py-10 bg-my-lighterBlue rounded-xl shadow-xl mb-10 md:mb-0">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-64 md:w-96 h-14 px-4 rounded-md"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-64 md:w-96 h-14 px-4 rounded-md"
            />
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-64 md:w-96 h-14 px-4 rounded-md"
            />
            <textarea
              id="message"
              cols="30"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-64 md:w-96 resize-none select-none max-h-96 p-2 px-4 rounded-md"
            ></textarea>
            <button type="submit" className="w-64 md:w-96 h-14 bg-my-blue text-white font-bold rounded-full">
              Submit your request now
            </button>
          </form>
          <img
            src="./6.webp"
            alt=""
            className="  rounded-xl"
          />
          
        </div>
        <div className="w-1/3 hidden md:block h-full overflow-hidden rounded-r-xl my-auto shadow-xl">
          <img
            src="./6.webp"
            alt=""
            className=" border-my-lighterBlue border-y-2 border-r-2 rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
}
