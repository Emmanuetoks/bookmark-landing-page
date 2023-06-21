import { EventHandler, MouseEventHandler } from "react";
import { Props } from "../vite-env";
import { AiOutlineArrowDown } from "react-icons/ai";


const FAQSection = ({ addtoRef }: Props) => {
  const showAnswer: MouseEventHandler = (
    e: React.MouseEvent<Node, MouseEvent> & Node
  ) => {
    // if (e.target)
    // console.log(e);
    
    const target: EventTarget | Node  = e.target;

    if (target.localName === 'svg') {
      const answerNode = target.parentNode.parentNode.querySelector('.faq-section__answer')
      
      answerNode.classList.toggle('answer--hidden')
    }
    // console.log(e);
  };
  return (
    <section
      ref={addtoRef}
      className="w-fit m-auto text-center section faq-section section--hidden py-24"
    >
      <div className="text-center max-w-sm space-y-6">
        <h3 className="capitalize text-blue-200 font-medium text-2xl">
          freqently asked questions
        </h3>
        <p className="text-blue-100">
          Here are some of out FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <ul className="faq-section__list">
        <li className="flex justify-between">
          <p>What is bookmark?</p>
          <div className="faq-section__answer translate-y-full answer--hidden transition-all duration-1000">
            <p>This is the answer to the questions</p>
          </div>
          <button onClick={showAnswer}>
            <AiOutlineArrowDown />
          </button>
        </li>
      </ul>
      <ul className="faq-section__list">
        <li className="flex justify-between">
          <p>What is bookmark?</p>
          <div className="faq-section__answer translate-y-full answer--hidden transition-all duration-1000">
            <p>This is the answer to the questions</p>
          </div>
          <button onClick={showAnswer}>
            <AiOutlineArrowDown />
          </button>
        </li>
      </ul>
      <ul className="faq-section__list">
        <li className="flex justify-between">
          <p>What is bookmark?</p>
          <div className="faq-section__answer translate-y-full answer--hidden transition-all duration-1000">
            <p>This is the answer to the questions</p>
          </div>
          <button onClick={showAnswer}>
            <AiOutlineArrowDown />
          </button>
        </li>
      </ul>
      <ul className="faq-section__list">
        <li className="flex justify-between">
          <p>What is bookmark?</p>
          <div className="faq-section__answer translate-y-full answer--hidden transition-all duration-1000">
            <p>This is the answer to the questions</p>
          </div>
          <button onClick={showAnswer}>
            <AiOutlineArrowDown />
          </button>
        </li>
      </ul>
      <ul className="faq-section__list">
        <li className="flex justify-between">
          <p>What is bookmark?</p>
          <div className="faq-section__answer answer--hidden transition-all duration-1000">
            <p>This is the answer to the questions</p>
          </div>
          <button onClick={showAnswer}>
            <AiOutlineArrowDown />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default FAQSection;
