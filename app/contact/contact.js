"use client";
import ContactForm from "./contactform";
import Image from "next/image";

const Loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Contact() {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <Image
              loader={Loader}
              src="doodleipsum-5023748687d870ad70616886e76ea6d6.png"
              alt="Contact"
              width="400"
              height="400"
              className="mx-auto"
            />
            <h1 className="mb-5 text-5xl font-bold uppercase">Contact Us</h1>
            <p className="mb-5 text-2xl font-semibold">
              Technology transformation for business sustainability.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16 container mx-auto text-center px-4">
        <h4 className="text-2xl font-semibold">Want to work with us?</h4>
        <p className="leading-relaxed mt-1 mb-4">
          Complete this form and we will get back to you in 1-2 business days.
        </p>
        <div className="max-w-lg mx-auto text-left">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
