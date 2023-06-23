import { MouseEventHandler, useState } from "react";
import styles from "./Feature.module.css";
import { FeatureTab } from "./components/FeaturesSection";
import Illustrations1 from "./assets/illustration/illustration-features-tab-1.svg";
import Illustrations2 from "./assets/illustration/illustration-features-tab-2.svg";
import Illustrations3 from "./assets/illustration/illustration-features-tab-3.svg";

type featuresProp = {
  src: string;
  header: string;
  text: string;
};

const features: featuresProp[] = [
  {
    src: Illustrations1,
    header: "Bookmark in one click",
    text: "  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },

  {
    src: Illustrations2,
    header: "Intelligent search",
    text: "  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },

  {
    src: Illustrations3,
    header: "Share your bookmarks",
    text: "  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const Feature = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex);
  
  const setTab: MouseEventHandler = (e:React.BaseSyntheticEvent) => {
    document.querySelectorAll(".features__tab").forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    e.target?.classList.add("active-tab");
    setTabIndex(e.target?.id);
  };
  return (
    <div className={`${styles.feature} features__page`}>
      <header>
        <nav
          className={`flex flex-col relative md:flex-row content-center max-w-lg mx-auto md:gap-16 ${styles.nav}`}
        >
          <div
            id="0"
            onClick={setTab}
            className="text-blue-100 features__tab relative capitalize hover:text-red-100 font-normal cursor-pointer active-tab text-center py-3 md:after:block w-fit mx-auto"
          >
            {" "}
            Simple bookmarking
          </div>
          <div
            id="1"
            onClick={setTab}
            className="text-blue-100 features__tab relative capitalize hover:text-red-100 font-normal cursor-pointer text-center md:after:block py-3 w-fit mx-auto"
          >
            Speedy searching
          </div>
          <div
            id="2"
            onClick={setTab}
            className="text-blue-100 features__tab relative capitalize hover:text-red-100 font-normal cursor-pointer text-center md:after:block py-3 w-fit mx-auto"
          >
            easy sharing
          </div>
        </nav>
      </header>

      <main className={`tab flex py-24`}>
        <div className="features__tab-content gap-24 flex flex-col md:flex-row justify-center items-center w-full px-16">
          <FeatureTab
            src={features[tabIndex].src}
            header={features[tabIndex].header}
            text={features[tabIndex].text}
          />
        </div>
      </main>
    </div>
  );
};

export default Feature;
