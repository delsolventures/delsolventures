/* eslint-disable react/jsx-props-no-spreading */

const Faq = () => {
  return (
    <div className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div
            key={index}
            tabIndex={index}
            className="collapse collapse-arrow border my-2 bg-neutral text-primary-content focus:bg-primary"
          >
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">
              <p> {item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
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
