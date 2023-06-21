import { Props } from "../vite-env";
import Illustraton1 from "../assets/illustration/illustration-features-tab-1.svg";

type featureTab = {
  src: string;
  header: string;
  text: string;
};
const FeaturesSection = ({ addtoRef }: Props) => {
  return (
    <section
      ref={addtoRef}
      className="features text-center section pt-10 md:pt-0 px-9 space-y-14 section section--hidden"
    >
      <div className="features__intro-text max-w-xl px-4 space-y-6 mx-auto">
        <h2 className="capitalize text-blue-200 font-bold text-2xl">
          features
        </h2>
        <p className="text-blue-100">
          Our aim is to make it quick for you to access ypur favourite websites.
          Your bookmarks are in sync between your devices so you can access them
          on the go.
        </p>
      </div>
      <nav className="features__tab-navigation flex flex-col md:flex-row content-center w-fit mx-auto gap-5">
        <div className="text-blue-200 features__tab relative after:bg-blue-100 capitalize hover:text-red-100 font-normal cursor-pointer max-w-sm"> Simple bookmarking</div>
        <div className="text-blue-100 features__tab relative after:bg-blue-100 capitalize hover:text-red-100 font-normal cursor-pointer max-w-sm">Speedy searching</div>
        <div className="text-blue-100 features__tab relative after:bg-blue-100 capitalize hover:text-red-100 font-normal cursor-pointer max-w-sm">easy sharing</div>
      </nav>
      <div className="features__tab-content gap-24 flex flex-col md:flex-row justify-center items-center w-full">

        <FeatureTab
          src={Illustraton1}
          header="bookmark in one click"
          text="hello world"
        />
      </div>
    </section>
  );
};

function FeatureTab({ src, header, text }: featureTab) {
  return (
    <>
      <div className="basis-3/5">
        <div className="features__img mx-auto max-w-sm relative">
          <img src={src} />
        </div>
      </div>
      <div className="features__right-section basis-2/5">
        <h4 className="capitalize text-blue-200 font-medium text-2xl">
          {header}
        </h4>
        <p className="text-blue-100">{text}</p>
      </div>
    </>
  );
}

export default FeaturesSection;
