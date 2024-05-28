import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex flex-row justify-start items-center h-[20vh] bg-lightgreen text-white text-7xl font-extrabold pl-[5vh]">
        Contact Me
      </h1>

      <div className="mt-[5vh]">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default ContactPage;
