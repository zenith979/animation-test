import clsx from "clsx";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { AnimatePresence, motion } from "motion/react";
import { Marquee } from "./Marquee";

const tabs = [
  {
    name: "PILLOWS",
    children: [
      {
        title: "Go Pillow",
        star: 4.8,
        reviews: 67,
        text: "Perfectly supports your head and body in a state of optimized relaxation.",
        price: 4478,
        img: "/img/url",
        sideImg: "/img/url",
        texts: [
          "SLEEP",
          "BEAUTY",
          "RELAX",
          "LOWER BACK SUPPORT",
          "SLEEP",
          "BEAUTY",
          "RELAX",
          "LOWER BACK SUPPORT",
        ],
        color: "bg-pink-300",
      },
      {
        title: "BOOST PILLOW",
        star: 4.9,
        reviews: 13,
        text: "Crafted to support any part of your body that needs a boost.",
        price: 4869,
        img: "/img/url",
        sideImg: "/img/url",
        texts: [
          "RECOVERY",
          "MATERNITY",
          "LOWER-BACK SUPPORT",
          "KNEE SUPPORT",
          "RECOVERY",
          "MATERNITY",
          "LOWER-BACK SUPPORT",
          "KNEE SUPPORT",
        ],
        color: "bg-purple-300",
      },
      {
        title: "KNEE PILLOW",
        star: 0,
        reviews: 0,
        text: "Perfectly supports your head and body in a state of optimized relaxation.",
        price: 5455,
        img: "/img/url",
        sideImg: "/img/url",
        texts: ["RECOVERY", "KNEE SUPPORT", "RECOVERY", "KNEE SUPPORT"],
        color: "bg-slate-300",
      },
      {
        title: "BACK SLEEP PILLOW",
        star: 4.9,
        reviews: 20,
        text: "Gently coaxes you to back sleep, enhancing appearance and recovery.",
        price: 5846,
        img: "/img/url",
        sideImg: "/img/url",
        texts: ["RECOVERY", "KNEE SUPPORT"],
        color: "bg-green-300",
      },
    ],
  },
  {
    name: "BUNDLES",
    children: [
      {
        title: "Go Beach Bundle",
        star: 0,
        reviews: 0,
        text: "Equip yourself for ultimate loughing - beach, boat, or poolside",
        price: 0,
        img: "/img/url",
        sideImg: "/img/url",
        texts: ["POOLSIDE", "BEACH", "BOAT"],
        color: "bg-pink-300",
      },
      {
        title: "Go Travel Bundle",
        star: 0,
        reviews: 0,
        text: "Easy, Breezy, flexible comfort while you're on the go and a scientifically optimized sleep when you arrive.",
        price: 0,
        img: "/img/url",
        sideImg: "/img/url",
        texts: ["SLEEP", "TRAVEL", "RELAX", "LOWER BACK SUPPORT"],
        color: "bg-purple-300",
      },
    ],
  },
  {
    name: "ACCESSORIES",
    children: [
      {
        title: "Go Towelling Bag",
        star: 0,
        reviews: 0,
        text: "Equip yourself for ultimate loughing - beach, boat, or poolside",
        price: 1936,
        img: "/img/url",
        sideImg: "/img/url",
        color: "bg-slate-300",
        texts: ["SLEEP", "TRAVEL", "RELAX", "LOWER BACK SUPPORT"],
      },
    ],
  },
];
export default function Range() {
  const [tabIndex, setTabIndex] = useState(0);
  // for swiper index
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-5 mx-10 my-10">
      <div className="flex justify-between">
        <p className="text-5xl font-light">Our range</p>
        <div className="flex bg-gray-100 rounded-[36px]">
          {tabs.map((tab, index) => (
            <button
              key={tab.name + index}
              onClick={() => {
                setTabIndex(index);
                setActiveIndex(0);
              }}
              className={clsx(
                "py-2.5 px-3 rounded-[36px] text-black text-sm tracking-wide duration-500",
                index === tabIndex && " bg-purple-800 text-white"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full relative h-fit grid grid-cols-2 rounded-2xl overflow-hidden">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{ nextEl: ".nextNavigation", prevEl: ".prevNavigation" }}
          pagination={{ type: "bullets" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full relative"
        >
          {tabs[tabIndex].children.map((children, index) => (
            <SwiperSlide
              key={children.title + index}
              className="w-full p-5 bg-gray-100"
            >
              <div className="w-full">
                <div className="flex flex-col gap-5">
                  <p className="text-3xl font-light">{children.title}</p>
                  <div className="flex flex-col gap-1">
                    <div className="w-[80px] h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 112 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_201_17)">
                          <path
                            fill="#000"
                            d="M20 7.85469C20 7.55819 19.7757 7.37393 19.3268 7.30173L13.2933 6.42448L10.589 0.955613C10.4369 0.627075 10.2404 0.462891 10.0001 0.462891C9.75976 0.462891 9.56342 0.627075 9.41115 0.955613L6.70673 6.42448L0.672988 7.30173C0.224386 7.37393 0 7.55819 0 7.85469C0 8.02304 0.100195 8.21535 0.300542 8.4317L4.6756 12.6865L3.64195 18.6961C3.62591 18.8083 3.61796 18.8887 3.61796 18.9365C3.61796 19.1048 3.65997 19.247 3.74408 19.3632C3.82815 19.4797 3.95428 19.5376 4.12263 19.5376C4.26695 19.5376 4.42713 19.4897 4.6034 19.3935L9.99994 16.5566L15.3969 19.3935C15.5654 19.4897 15.7256 19.5376 15.8775 19.5376C16.0382 19.5376 16.1601 19.4797 16.2443 19.3632C16.3281 19.2471 16.3702 19.1048 16.3702 18.9365C16.3702 18.8325 16.3661 18.7524 16.3581 18.6961L15.3244 12.6865L19.6873 8.4317C19.896 8.22335 20 8.03096 20 7.85469Z"
                          ></path>
                        </g>
                        <g clipPath="url(#clip1_201_17)">
                          <path
                            fill="#000"
                            d="M66 7.85469C66 7.55819 65.7757 7.37393 65.3268 7.30173L59.2933 6.42448L56.589 0.955613C56.4369 0.627075 56.2404 0.462891 56.0001 0.462891C55.7598 0.462891 55.5634 0.627075 55.4111 0.955613L52.7067 6.42448L46.673 7.30173C46.2244 7.37393 46 7.55819 46 7.85469C46 8.02304 46.1002 8.21535 46.3005 8.4317L50.6756 12.6865L49.642 18.6961C49.6259 18.8083 49.618 18.8887 49.618 18.9365C49.618 19.1048 49.66 19.247 49.7441 19.3632C49.8282 19.4797 49.9543 19.5376 50.1226 19.5376C50.2669 19.5376 50.4271 19.4897 50.6034 19.3935L55.9999 16.5566L61.3969 19.3935C61.5654 19.4897 61.7256 19.5376 61.8775 19.5376C62.0382 19.5376 62.1601 19.4797 62.2443 19.3632C62.3281 19.2471 62.3702 19.1048 62.3702 18.9365C62.3702 18.8325 62.3661 18.7524 62.3581 18.6961L61.3244 12.6865L65.6873 8.4317C65.896 8.22335 66 8.03096 66 7.85469Z"
                          ></path>
                        </g>
                        <g clipPath="url(#clip2_201_17)">
                          <path
                            fill="#000"
                            d="M43 7.85469C43 7.55819 42.7757 7.37393 42.3268 7.30173L36.2933 6.42448L33.589 0.955613C33.4369 0.627075 33.2404 0.462891 33.0001 0.462891C32.7598 0.462891 32.5634 0.627075 32.4111 0.955613L29.7067 6.42448L23.673 7.30173C23.2244 7.37393 23 7.55819 23 7.85469C23 8.02304 23.1002 8.21535 23.3005 8.4317L27.6756 12.6865L26.642 18.6961C26.6259 18.8083 26.618 18.8887 26.618 18.9365C26.618 19.1048 26.66 19.247 26.7441 19.3632C26.8282 19.4797 26.9543 19.5376 27.1226 19.5376C27.2669 19.5376 27.4271 19.4897 27.6034 19.3935L32.9999 16.5566L38.3969 19.3935C38.5654 19.4897 38.7256 19.5376 38.8775 19.5376C39.0382 19.5376 39.1601 19.4797 39.2443 19.3632C39.3281 19.2471 39.3702 19.1048 39.3702 18.9365C39.3702 18.8325 39.3661 18.7524 39.3581 18.6961L38.3244 12.6865L42.6873 8.4317C42.896 8.22335 43 8.03096 43 7.85469Z"
                          ></path>
                        </g>
                        <g clipPath="url(#clip3_201_17)">
                          <path
                            fill="#000"
                            d="M89 7.85469C89 7.55819 88.7757 7.37393 88.3268 7.30173L82.2933 6.42448L79.589 0.955613C79.4369 0.627075 79.2404 0.462891 79.0001 0.462891C78.7598 0.462891 78.5634 0.627075 78.4111 0.955613L75.7067 6.42448L69.673 7.30173C69.2244 7.37393 69 7.55819 69 7.85469C69 8.02304 69.1002 8.21535 69.3005 8.4317L73.6756 12.6865L72.642 18.6961C72.6259 18.8083 72.618 18.8887 72.618 18.9365C72.618 19.1048 72.66 19.247 72.7441 19.3632C72.8282 19.4797 72.9543 19.5376 73.1226 19.5376C73.2669 19.5376 73.4271 19.4897 73.6034 19.3935L78.9999 16.5566L84.3969 19.3935C84.5654 19.4897 84.7256 19.5376 84.8775 19.5376C85.0382 19.5376 85.1601 19.4797 85.2443 19.3632C85.3281 19.2471 85.3702 19.1048 85.3702 18.9365C85.3702 18.8325 85.3661 18.7524 85.3581 18.6961L84.3244 12.6865L88.6873 8.4317C88.896 8.22335 89 8.03096 89 7.85469Z"
                          ></path>
                        </g>
                        <g clipPath="url(#clip4_201_17)">
                          <path
                            fill="#000"
                            d="M112 7.85469C112 7.55819 111.776 7.37393 111.327 7.30173L105.293 6.42448L102.589 0.955613C102.437 0.627075 102.24 0.462891 102 0.462891C101.76 0.462891 101.563 0.627075 101.411 0.955613L98.7067 6.42448L92.673 7.30173C92.2244 7.37393 92 7.55819 92 7.85469C92 8.02304 92.1002 8.21535 92.3005 8.4317L96.6756 12.6865L95.642 18.6961C95.6259 18.8083 95.618 18.8887 95.618 18.9365C95.618 19.1048 95.66 19.247 95.7441 19.3632C95.8282 19.4797 95.9543 19.5376 96.1226 19.5376C96.2669 19.5376 96.4271 19.4897 96.6034 19.3935L102 16.5566L107.397 19.3935C107.565 19.4897 107.726 19.5376 107.877 19.5376C108.038 19.5376 108.16 19.4797 108.244 19.3632C108.328 19.2471 108.37 19.1048 108.37 18.9365C108.37 18.8325 108.366 18.7524 108.358 18.6961L107.324 12.6865L111.687 8.4317C111.896 8.22335 112 8.03096 112 7.85469Z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_201_17">
                            <rect width="20" height="20" fill="white"></rect>
                          </clipPath>
                          <clipPath id="clip1_201_17">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(46)"
                            ></rect>
                          </clipPath>
                          <clipPath id="clip2_201_17">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(23)"
                            ></rect>
                          </clipPath>
                          <clipPath id="clip3_201_17">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(69)"
                            ></rect>
                          </clipPath>
                          <clipPath id="clip4_201_17">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(92)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-sm font-extralight">
                      {children.star} ( {children.reviews} reviews )
                    </div>
                  </div>
                  <div className="w-3/4 h-60 mx-auto bg-gray-200"></div>
                  <div className="flex justify-between">
                    {children.text && (
                      <div className="flex-1">{children.text}</div>
                    )}
                    <button className="px-3 py-2 bg-indigo-800 rounded-[32px] text-white shadow-none hover:shadow-sm hover:bg-white hover:text-indigo-800 duration-500">
                      {children.price ? children.price + "฿" : ""} - Shop Now
                    </button>
                  </div>
                  <div className="w-full mx-auto overflow-hidden">
                    <Marquee
                      children={children.texts.map((child, index) => (
                        <div
                          key={child + index}
                          className="px-3 relative text-sm after:absolute after:size-1 after:-right-1 after:top-2 after:bg-black after:rounded-full"
                        >
                          {child}
                        </div>
                      ))}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <span className="nextNavigation"></span>
          <span className="prevNavigation"></span>
        </Swiper>

        <AnimatePresence>
          <motion.div
            key={
              tabs[tabIndex].children[activeIndex].title + tabs[tabIndex].name
            }
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={clsx(
              "absolute right-0 top-0 w-1/2 h-full z-[2] flex items-center justify-center text-black ",
              tabs[tabIndex].children[activeIndex]?.color
            )}
          >
            {tabs[tabIndex].children[activeIndex].title}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
