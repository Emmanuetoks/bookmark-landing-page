import { MouseEventHandler, RefCallback, useRef } from "react";
import { Props } from "../vite-env";

type faqProp = {
  question: string;
  answer: string;
  addFaq: RefCallback<HTMLDivElement>;
  showAnswer: MouseEventHandler;
  answerId: string;
};
const FAQSection = ({ addtoRef }: Props) => {
  const faq = useRef(Array<HTMLDivElement | null>());
  const addFaq: RefCallback<HTMLDivElement> = (el) => {
    faq.current.includes(el) || faq.current.push(el);
  };

  const showAnswer: MouseEventHandler = (e:React.BaseSyntheticEvent) => {
    const target = e.target;
    target.classList.toggle("faq__dropdown--active");
    faq.current[target?.id]?.classList.toggle("faq__dropdown--hidden");
    console.log(target.id);

    // console.log(e);
  };
  return (
    <section
      ref={addtoRef}
      className="w-full section faq-section section--hidden py-24"
    >
      <header className="faq__header w-fit h-auto mx-auto px-10">
        <div className="text-center max-w-xl px-4 space-y-6">
          <h2 className="capitalize text-blue-200 text-2xl font-bold">
            freqently asked questions
          </h2>
          <p className="text-blue-100">
            Here are some of out FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        <ul className="faq-section__list pt-9 max-w-sm mx-auto">
          <FAQ
            addFaq={addFaq}
            showAnswer={showAnswer}
            question="What is bookmark"
            answer="fuck you"
            answerId="0"
          />
          <FAQ
            addFaq={addFaq}
            showAnswer={showAnswer}
            question="How can i request a new browser"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque unde error a in modi dicta tempora, similique ipsum hic corrupti tempore ullam, sit eos consequuntur minus sed, libero officiis temporibus."
            answerId="1"
          />

          <FAQ
            addFaq={addFaq}
            showAnswer={showAnswer}
            question="Is there a mobile app"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat mollitia iure minima. Sint nisi dolorem nulla accusantium vero veniam nam?"
            answerId="2"
          />

          <FAQ
            addFaq={addFaq}
            showAnswer={showAnswer}
            question="What about other Chromium browsers"
            answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laborum dignissimos quibusdam natus placeat amet recusandae consectetur debitis corporis facilis? Dicta veniam inventore quam, beatae ipsum minima! Et delectus adipisci fuga? Maiores commodi veniam accusamus ab quia odit provident debitis?"
            answerId="3"
          />
        </ul>
      </header>
    </section>
  );
};

const FAQ = ({ showAnswer, addFaq, question, answer, answerId }: faqProp) => {
  return (
    <li className="w-full py-3">
      <div className="flex justify-between hover:text-red-100 cursor-pointer">
        <p>{question}?</p>
        <button
          id={answerId}
          onClick={showAnswer}
          className="faq-section__dropdown-button w-7 bg-no-repeat bg-center"
        >
          <span className="sr-only">FAQ dropdown button</span>
        </button>
      </div>

      <div
        ref={addFaq}
        className="faq-section__answer faq__dropdown--hidden"
      >
        <p>{answer}</p>
      </div>
    </li>
  );
};

export default FAQSection;
