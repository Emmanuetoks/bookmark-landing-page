import { Props } from "../vite-env";
import Illustraton1 from "../assets/illustration/illustration-features-tab-1.svg";
import MoreInfoBtn from "./MoreInfoBtn";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type featureTab = {
  src: string;
  header: string;
  text: string;
};
const FeaturesSection = ({ addtoRef }: Props) => {
  // const [activeTab]
  const setTabActive: MouseEventHandler = (e:React.BaseSyntheticEvent) => {
    document.querySelectorAll(".features__tab").forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    e.target?.classList.add("active-tab");
  };
  return (
    <section
      ref={addtoRef}
      className="features section pt-10 md:pt-0 px-9 space-y-14 section section--hidden"
    >
      <header className="features__header text-center max-w-xl px-4 space-y-6 mx-auto">
        <h2 className="capitalize text-blue-200 font-bold text-2xl">
          features
        </h2>
        <p className="text-blue-100">
          Our aim is to make it quick for you to access ypur favourite websites.
          Your bookmarks are in sync between your devices so you can access them
          on the go.
        </p>
      </header>
      <nav className="flex flex-col relative md:flex-row content-center max-w-lg mx-auto md:gap-16">
        <Link to={"/features"}>
          <div
            onClick={setTabActive}
            className="text-blue-100 features__tab relative capitalize hover:text-red-100 font-normal cursor-pointer active-tab text-center py-3 md:after:block"
          >
            {" "}
            Simple bookmarking
          </div>
        </Link>

        <Link to={"/features"}>
          <div
            onClick={setTabActive}
            className="text-blue-100 features__tab relative capitalize hover:text-red-100 font-normal cursor-pointer text-center md:after:block py-3"
          >
            Speedy searching
          </div>
        </Link>

        <Link to={'/features'}>
          <div
            onClick={setTabActive}
            className="text-blue-100 features__tab relative capitalize hover:text-red-100 font-normal cursor-pointer text-center md:after:block py-3"
          >
            easy sharing
          </div>
        </Link>
      </nav>
      <div className="features__tab-content gap-24 flex flex-col md:flex-row justify-center items-center w-full pt-8">
        <FeatureTab
          src={Illustraton1}
          header="bookmark in one click"
          text="  Organize your bookmarks however you like. Our simple drag-and-drop interface 
          gives you complete control over how you manage your favourite sites."
        />
      </div>
    </section>
  );
};

export function FeatureTab({ src, header, text }: featureTab) {
  return (
    <>
      <div className="basis-3/5">
        <div className="features__img mx-auto max-w-sm relative">
          <img src={src} />
        </div>
      </div>
      <div className="features__right-section basis-2/5 space-y-6 text-center md:text-left">
        <h4 className="capitalize text-blue-200 font-medium text-2xl">
          {header}
        </h4>
        <p className="text-blue-100">{text}</p>
        <MoreInfoBtn />
      </div>
    </>
  );
}

export default FeaturesSection;
