import React, { useEffect } from "react";

const Slider = () => {
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

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    // Fix: Use consistent function name
    if (line1) setupIntersectionObserver(line1, true, 0.15);
    if (line2) setupIntersectionObserver(line2, false, 0.15);
    if (line3) setupIntersectionObserver(line3, true, 0.15);
  }, []);

  return (
    <div className="z-0 max-h-screen mb-0">
      <div
        id="companies-title"
        className="z-0 flex flex-row justify-center gap-3"
      >
        <img
          src="left-down-arrow.png"
          className="z-0 max-w-5 max-h-5 translate-y-2.5 "
        />
        <span className="font-semibold">APPS POWERED BY TODESKTOP </span>

        <img
          src="right-down-arrow.png"
          className="z-0 max-w-5 max-h-5 translate-y-2.5"
        />
      </div>

      <div id="companies-container" className="flex flex-col mt-7">
        <div id="companies-lines-group" className="flex flex-col gap-8 ">
          <div
            id="line1"
            class="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
          >
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 3.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 4.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                LifeAt
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 5.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Convy
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 6.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Morgen
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 7.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Campsite
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 8.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">Rise</span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 9.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                ClickUp
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 10.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Notion
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 11.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Sunsama
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 13.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">Cal</span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 14.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Webstudio
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 14.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Webstudio
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
          </div>
          <div
            id="line2"
            className="flex flex-row gap-5 -translate-x-36 transition-transform ease-linear"
          >
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 3.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 4.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                LifeAt
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 5.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Convy
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 6.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Morgen
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 7.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Campsite
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 8.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">Rise</span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 9.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                ClickUp
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 10.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Notion
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 11.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Sunsama
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 13.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">Cal</span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 14.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Webstudio
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
          </div>

          <div
            id="line3"
            className="flex flex-row gap-5 -translate-x-48 transition-transform ease-linear"
          >
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 3.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 4.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                LifeAt
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 5.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Convy
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 6.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Morgen
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 7.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Campsite
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 8.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">Rise</span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img src="asset 9.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                ClickUp
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 10.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Notion
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 11.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Sunsama
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 13.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">Cal</span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 14.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Webstudio
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
            <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img
                src="asset 11.png"
                class="w-12 h-12 md:w-16 md:h-16"
                alt=""
              />
              <span class="text-[12px] font-semibold lg:text-[16px]">
                Sunsama
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
