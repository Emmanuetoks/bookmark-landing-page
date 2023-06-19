import Navbar from "./components/Navbar";
import Illustration from "./assets/illustration/illustration-hero.svg";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />

        <div className="header__intro px-9 pt-16 md:pl-24 md:pr-12 flex flex-col-reverse md:flex-row">

          <div className="header__intro-left basis-2/5 space-y-6 text-center md:text-left">
            <h1 className="capitalize font-semibold text-4xl text-blue-200">a simple bookmark manager</h1>
            <p className="text-blue-100">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div className="header__intro-download-buttons">
              <a>
                <button className="px-4 py-3 bg-blue-100 text-white rounded">
                  Get it on Chrome
                </button>
              </a>

              <a>
                <button className="px-4 py-3 text-blue-200 font-medium">Get it on Firefox</button>
              </a>
            </div>
          </div>

          <div className="header__intro-right basis-3/5">
            <div className="max-w-sm mx-auto">
              <img className="" src={Illustration} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
