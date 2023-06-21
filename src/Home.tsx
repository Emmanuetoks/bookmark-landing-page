import Navbar from "./components/Navbar";
import Illustration from "./assets/illustration/illustration-hero.svg";
import FAQSection from "./components/FAQSection";
import { useRef, useEffect } from "react";
import CtaDownloadSection from "./components/CtaDownloadSection";
import FeaturesSection from "./components/FeaturesSection";
import Logo from "./assets/logo/logo-bookmark-white.svg";
import facebookLogo from "../public/images/icon-facebook.svg";
import twitterLogo from "../public/images/icon-twitter.svg";
import choromeLogo from "./assets/logo/logo-chrome.svg";
import fireFoxLogo from "./assets/logo/logo-firefox.svg";
import opera from "./assets/logo/logo-opera.svg";
import BrowserCard from "./components/BrowserCard";

const Home = () => {
  const sections = useRef([]);

  const addSection: (el: never & HTMLDivElement) => void = (el) => {
    sections.current.push(el);
  };

  useEffect(() => {
    // console.log(sections);
    const revealSection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const [entry] = entries;

      if (entry?.isIntersecting) {
        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry.target);
      }
    };

    const obsOptions = {
      root: null,
      treshold: 0.15,
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      revealSection,
      obsOptions
    );

    sections.current.forEach((section) => {
      observer.observe(section);
    });
  }, [sections]);

  return (
    <>
      <header className="header h-screen-s md:h-90 overflow-x-hidden">
        <Navbar />

        <div className="header__intro px-9 md:pt-16 pt-6 md:pl-24 md:pr-10 flex flex-col-reverse md:flex-row items-center">
          <div className="header__intro-left basis-2/5 space-y-6 text-center md:text-left">
            <h1 className="capitalize font-semibold text-4xl text-blue-200">
              a simple bookmark manager
            </h1>
            <p className="text-blue-100">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div className="header__intro-download-buttons space-x-4">
              <a>
                <button className="px-4 py-3 bg-blue-200 text-white rounded border-2 font-medium border-blue-200 hover:bg-transparent hover:text-blue-300">
                  Get it on Chrome
                </button>
              </a>

              <a>
                <button className="px-4 py-3 text-blue-200 font-medium hover:bg-transparent">
                  Get it on Firefox
                </button>
              </a>
            </div>
          </div>

          <div className="header__intro-right basis-3/5 pb-14">
            <div className="max-w-lg mx-auto header__hero-img relative after:top-20 md:after:top-1/3">
              <img className="" src={Illustration} />
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <FeaturesSection addtoRef={addSection} />

        <CtaDownloadSection addtoRef={addSection}>
          <BrowserCard
            imgUrl={choromeLogo}
            classProp="translate-y-0"
            name="Chrome"
            version="62"
          />
          <BrowserCard
            imgUrl={fireFoxLogo}
            classProp="mt-0 md:mt-10"
            name="Firefox"
            version="55"
          />
          <BrowserCard
            imgUrl={opera}
            name="Firefox"
            classProp="mt-0 md:mt-24"
            version="46"
          />
        </CtaDownloadSection>

        <FAQSection addtoRef={addSection} />
      </main>
      <footer className="footer flex flex-col gap-6 justify-between md:flex-row py-8 px-10 bg-blue-300 items-center">
        <div className="flex flex-col gap-6 md:flex-row">
          <div>
            <img src={Logo} />
          </div>
          <ul className="flex flex-col gap-5 items-center md:flex-row">
            <li className="uppercase font-normal text-blue-100">features</li>
            <li className="uppercase font-normal text-blue-100">pricing</li>
            <li className="uppercase font-normal text-blue-100">contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 md:flex-row ">
          <div>
            <img src={twitterLogo} />
          </div>
          <div>
            <img src={facebookLogo} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
