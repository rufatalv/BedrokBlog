import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Subscribe = () => {
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
        "template_e1pcy0q",
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
    <div className="w-full h-1/2 bg-black flex justify-center items-center">
      <div className="pt-32 w-full px-4 md:px-0 md:w-[500px] pb-32">
        <h1 className="md:text-[40px] text-3xl leading-[40px] md:leading-[48px] text-white text-center">
          A monthly post delivered straight to your inbox
        </h1>
        <div>
          <form ref={form} className="w-full mt-4 flex">
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email"
              className="placeholder:text-sm w-full text-gray-800 text-sm md:text-base placeholder:pl-4 rounded-[6px]"
            />
            <button
              type="submit"
              className="text-lg py-3 px-8 md:px-12 bg-white md:ml-6 ml-2 rounded-[6px]"
              disabled={disable}
              onClick={buttonClicKHandler}
            >
              Submit
            </button>
          </form>
          {isSubmitted && (
            <div className="bg-white p-4 rounded mt-2">
              Your form has been successfully submitted!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
