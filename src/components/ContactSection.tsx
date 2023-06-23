import { useState } from "react";

const ContactSection = () => {
  return (
    <section className="w-full bg-blue-200 py-16 contact-section">
      <div className="max-w-sm md:max-w-lg space-y-4 px-4 mx-auto text-center">
        <header className="md:px-16">
          <p className="text-sm text-white font-thin uppercase tracking-widest">
            35,000+ already joined
          </p>
          <h4 className="text-2xl text-white font-medium">
            Stay up-to-date with what we're doing
          </h4>
        </header>
        <Form />
      </div>
    </section>
  );
};

function Form() {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [userEmail, setUserEmail] = useState<string>("");
  const [emailValidity, setEmailValidity] = useState("good");
  const submitEmail = () => {
    // console.log(');

    emailRegex.test(userEmail) && setEmailValidity("good");
    emailRegex.test(userEmail) || setEmailValidity("wrong-email");
    console.log(emailValidity);
    console.log(userEmail);
  };

  return (
    <div className="contact-section__form flex justify-center flex-col md:flex-row gap-10 md:gap-4">
      <div
        className={`${emailValidity} w-full relative md:w-3/5 rounded-tl rounded-tr`}
      >
        <input
          value={userEmail}
          className="rounded flex-grow px-2 py-4 h-full w-full md:py-0 text-sm font-normal"
          placeholder="example@email.com"
          type="text"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <button
        onClick={submitEmail}
        className="bg-red text-white rounded px-4 py-3 capitalize hover:bg-white hover:text-red-100 outline-2 outline-red"
      >
        contact us
      </button>
    </div>
  );
}

export default ContactSection;
