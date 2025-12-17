"use client";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import ContactImage from "./components/ContactImage";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 gap-x-2 lg:gap-x-10 gap-y-5 my-10 px-4 md:px-10 lg:px-16 xl:px-24">
      <ContactImage />
      <ContactForm />
    </div>
  );
};

export default Contact;