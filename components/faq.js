/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
//import { ChevronUpIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-trueGray-700 rounded-lg bg-trueGray-50 hover:bg-trueGray-100 focus:outline-none focus-visible:ring focus-visible:ring-trueSky-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-trueGray-100">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-trueSky-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-trueGray-700 dark:text-trueGray-100">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How can my company work with del SOL?",
    answer:
      "We work with start-ups who strive to take on new challenges and can accelerate & execute go-to-market and scaling strategies. ",
  },
  {
    question: "Is del SOL hiring?",
    answer: "Yes we are! Book a meeting with us to discuss new possibilities.",
  },
  {
    question: "Which industries are del SOL involved in? ",
    answer:
      "We work in the fields of energy, biotech, aquaculture & agriculture.",
  },
];

export default Faq;
