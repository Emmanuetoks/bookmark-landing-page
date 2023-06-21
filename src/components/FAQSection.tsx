import {
  MouseEventHandler,
  MouseEvent,
  RefCallback,
  useRef,
} from "react";
import { Props } from "../vite-env";

type faqProp = {
  question: string;
  answer: string;
  addFaq: RefCallback<HTMLDivElement>;
  showAnswer: MouseEventHandler

}
const FAQSection = ({ addtoRef }: Props) => {
  const faq = useRef(Array<HTMLDivElement | null>());
  const addFaq: RefCallback<HTMLDivElement> = (el) => {
    faq.current.includes(el) || faq.current.push(el);
  };

  const showAnswer: MouseEventHandler = (e: MouseEvent) => {
    const target: EventTarget | Node = e.target;
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
      <div className="w-fit h-auto mx-auto px-10">
        <div className="text-center max-w-xl px-4 space-y-6">
          <h2 className="capitalize text-blue-200 text-2xl font-bold">
            freqently asked questions
          </h2>
          <p className="text-blue-100">
            Here are some of out FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        <ul className="faq-section__list pt-9">
          <FAQ addFaq={addFaq} showAnswer={showAnswer} question="What is bookmark" answer="fuck you"/>
        </ul>
      </div>
    </section>
  );
};

const FAQ = ({showAnswer, addFaq, question, answer}:faqProp) => {
  return (
    <li>
    <div className="flex justify-between ">
      <p>{question}</p>
      <button
        id="0"
        onClick={showAnswer}
        className="faq-section__dropdown-button w-7 bg-no-repeat bg-center"
      >
        <span className="sr-only">FAQ dropdown button</span>
      </button>
    </div>

    <div
      ref={addFaq}
      className="faq-section__answer faq__dropdown--hidden text-center"
    >
      <p>{answer}</p>
    </div>
  </li>
  )
}

export default FAQSection;
