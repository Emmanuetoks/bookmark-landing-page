import { Props } from "../vite-env";

const CtaDownloadSection = ({ children, addtoRef }: Props) => {
  return (
    <section
      ref={addtoRef}
      className=" py-24 w-full flex flex-col items-center gap-6 section section--hidden cta"
    >
      <header className="cta__header text-center max-w-xl px-4 space-y-6">
        <h2 className="capitalize text-blue-200 font-bold text-2xl">
          Download the extension
        </h2>
        <p className="text-blue-100">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize
        </p>
      </header>
      <div className="flex flex-col md:flex-row gap-6">{children}</div>
    </section>
  );
};

export default CtaDownloadSection;
