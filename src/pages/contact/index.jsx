import React, { useRef, useState } from "react";
import aboutImage from "public/aboutimg.jpg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [disable, setDisable] = useState(false);
  const buttonClicKHandler = () => {
    sendEmail()
    setIsSubmitted(true);
    setDisable(true)
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_x3bd8rt",
        "template_56z6oqh",
        form.current,
        "ltAmgUB-RD_mbZm7k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container px-5 lg:px-0 sm:mt-[72px] mt-8 mb-36 sm:mb-24">
      <div id="hero" className="">
        <div className="relative sm:h-[576px] sm:p-89 h-full w-auto rounded-my">
          <Image
            src={aboutImage}
            alt="bg"
            className="h-full object-cover rounded-my"
          />
          <div className="absolute mt-6 sm:mt-0 pb-6 sm:bottom-5 sm:left-5 ">
            <p className="uppercase font-semibold text-xl tracking-widest text-[#C7C9D1]">
              CONTACT
            </p>
            <p className="sm:text-lg text-[40px] font-normal sm:font-light md:text-7xl text-black sm:text-white">
              Want to chat?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-36 md:mt-12">
        <div className="flex flex-col md:flex-row mb-12 text-center gap-6 text-white">
          <div className="md:w-1/2 bg-black py-3 rounded-[7px]">
            rufat845@gmail.com
          </div>
          <div className="md:w-1/2 bg-black py-3 rounded-[7px]">
            +994 99 321 99 98
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="">
            You can send me an email, but why not call? People don&apost call
            anymore... Call me!
          </div>
          <form  className="flex flex-col gap-8">
            <input
              type="text"
              className="rounded-[6px]"
              name="from_name"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="rounded-[6px]"
              placeholder="Enter your email"
              name="from_email"
            />
            <input
              type="text"
              className="rounded-[6px]"
              placeholder="Enter your message"
              name="message"
            />
            <button onClick={buttonClicKHandler} className="py-3 px-12 w-[240px] inline-block bg-black rounded-[6px] text-white">
              Submit message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
