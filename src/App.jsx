import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./app/Hero";
import Slider from "./app/Slider";
import Features from "./app/Features";
import Bento from "./app/Bento";
import Customer from "./app/Customer";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;

    function setupIntersectionObserver(element, isLTR, speed) {
      function scrollHandler() {
        const translateX =
          (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
          totalTranslate = translateX + initialTranslateLTR;
        } else {
          totalTranslate = translateX + initialTranslateRTL;
        }

        const finalTranslateX = isLTR ? totalTranslate : -totalTranslate;

        element.style.transform = `translateX(${finalTranslateX}px)`;
      }

      const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);
        if (isIntersecting) {
          document.addEventListener("scroll", scrollHandler);
        } else {
          document.removeEventListener("scroll", scrollHandler);
        }
      };
      const intersectionObserver = new IntersectionObserver(
        intersectionCallback
      );
      intersectionObserver.observe(element);
    }

    const line4 = document.getElementById("line4");

    // Fix: Use consistent function name
    if (line4) setupIntersectionObserver(line4, true, 0.8);
  }, []);

  return (
    <>
      <div className="font-['Poppins'] bg-[#fcf5f7] overflow-x-hidden z-50">
        <div className="z-50 fixed min-w-screen">
          <Navbar />
        </div>
        <div className=" min-h-screen max-w-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent mt-20 z-0">
          <Hero />
          <Slider />

          <Features />
          <Bento />

          {/* <!-- Companies Feature Line --> */}
          <div id="featuress-line" className="container">
            <div className="border rounded-lg overflow-hidden flex justify-center">
              <div id="line4" className="flex gap-4 p-6 ">
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
                <h2 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
                  Download Analytics
                </h2>
                <span>•</span>
              </div>
            </div>
          </div>
          <Customer />
          <Pricing />
          <Faq />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
