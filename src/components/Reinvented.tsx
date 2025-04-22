import { AnimatePresence, motion } from "framer-motion"; // Ensure you're using the correct import for motion
import { useEffect, useState } from "react";

export default function PillowReinvented() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex === -1) return;
    const interval = setInterval(() => {
      // ads length = 3
      const tempAdsIndex = activeIndex >= 3 - 1 ? -1 : activeIndex;
      setActiveIndex(tempAdsIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="h-[660px] relative flex flex-col justify-between pb-6">
      <div className="mx-10 max-w-[450px] flex flex-col gap-5">
        <p className="font-extralight text-5xl">The pillow, reinvented</p>
        <p className="font-light text-xl ">
          Humankind needs better sleep so Hyoumankind was born. After taking a
          close look at the very human experience of sleep, we’ve redesigned the
          pillow’s imperative role in rest.
        </p>
        <button className="w-fit p-2.5 rounded-[20px] bg-purple-800 hover:bg-white hover:text-black hover:shadow-md text-white duration-500">
          LEARN MORE
        </button>
      </div>
      <div className="absolute top-10 w-full h-fit mx-auto">
        <svg
          viewBox="0 0 1440 565"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5_2647)">
            <motion.path
              d="M2091.44 158.655C2053.51 182.017 2013.88 201.213 1970.74 213.615C1943.54 221.432 1916.29 227.832 1888.3 231.417C1867.38 234.094 1846.37 237.797 1825.31 236.736C1799.9 235.482 1774.52 235.094 1749.09 231.832C1714.87 227.4 1681.56 220.106 1648.94 209.405C1600.15 193.369 1555.1 170.02 1513.67 139.558C1487.72 120.476 1465.02 97.5612 1439.07 78.4795C1418.2 63.1543 1395.73 51.5372 1370.04 47.0617C1328 39.7377 1291.94 62.1811 1276.54 102.673C1270.59 118.36 1262.94 131.023 1240.17 129.576C1232.5 129.083 1226.28 125.477 1220.38 121.862C1209.42 115.16 1199.4 106.934 1189 99.3488C1172.69 87.4403 1154.07 81.9777 1134.3 83.4405C1109.13 85.2916 1085.75 94.3007 1063.97 106.849C1038.73 121.386 1015.76 139.6 989.33 152.437C974.264 159.754 958.938 164.794 942.364 167.585C912.555 172.6 884.947 164.712 857.12 156.043C827.462 146.834 799.344 133.446 769.468 124.874C750.611 119.457 731.75 115.301 711.959 114.559C665.385 112.759 624.976 129.534 586.79 153.771C542.596 181.839 504.9 217.878 466.261 252.644C412.69 300.869 355.676 344.542 294.402 382.663C268.651 398.671 242.654 414.332 215.57 427.857C162.219 454.45 107.261 477.268 49.8825 493.971C23.3456 501.69 -3.49275 508.512 -30.5848 513.332C-50.6489 516.891 -70.8763 520.257 -91.3847 522.056C-107.485 523.455 -123.611 523.909 -139.688 524.716C-158.722 525.646 -177.857 527.17 -196.828 526.089C-217.301 524.933 -237.789 523.265 -258.222 520.729C-291.802 516.554 -324.733 510.234 -357.375 501.543C-388.068 493.387 -417.876 483.04 -446.996 470.508C-497.486 448.769 -544.163 420.936 -586.584 385.893C-599.875 374.924 -612.361 363.144 -624.964 351.406"
              stroke="#362F60"
              strokeWidth="6"
              strokeLinecap="round"
              className="line-blush"
              strokeLinejoin="round"
              // Removed the whileInView animation for the orange line
            ></motion.path>

            <motion.path
              d="M2091.44 158.655C2053.51 182.017 2013.88 201.213 1970.74 213.615C1943.54 221.432 1916.29 227.832 1888.3 231.417C1867.38 234.094 1846.37 237.797 1825.31 236.736C1799.9 235.482 1774.52 235.094 1749.09 231.832C1714.87 227.4 1681.56 220.106 1648.94 209.405C1600.15 193.369 1555.1 170.02 1513.67 139.558C1487.72 120.476 1465.02 97.5612 1439.07 78.4795C1418.2 63.1543 1395.73 51.5372 1370.04 47.0617C1328 39.7377 1291.94 62.1811 1276.54 102.673C1270.59 118.36 1262.94 131.023 1240.17 129.576C1232.5 129.083 1226.28 125.477 1220.38 121.862C1209.42 115.16 1199.4 106.934 1189 99.3488C1172.69 87.4403 1154.07 81.9777 1134.3 83.4405C1109.13 85.2916 1085.75 94.3007 1063.97 106.849C1038.73 121.386 1015.76 139.6 989.33 152.437C974.264 159.754 958.938 164.794 942.364 167.585C912.555 172.6 884.947 164.712 857.12 156.043C827.462 146.834 799.344 133.446 769.468 124.874C750.611 119.457 731.75 115.301 711.959 114.559C665.385 112.759 624.976 129.534 586.79 153.771C542.596 181.839 504.9 217.878 466.261 252.644C412.69 300.869 355.676 344.542 294.402 382.663C268.651 398.671 242.654 414.332 215.57 427.857C162.219 454.45 107.261 477.268 49.8825 493.971C23.3456 501.69 -3.49275 508.512 -30.5848 513.332C-50.6489 516.891 -70.8763 520.257 -91.3847 522.056C-107.485 523.455 -123.611 523.909 -139.688 524.716C-158.722 525.646 -177.857 527.17 -196.828 526.089C-217.301 524.933 -237.789 523.265 -258.222 520.729C-291.802 516.554 -324.733 510.234 -357.375 501.543C-388.068 493.387 -417.876 483.04 -446.996 470.508C-497.486 448.769 -544.163 420.936 -586.584 385.893C-599.875 374.924 -612.361 363.144 -624.964 351.406"
              stroke="#F5A995"
              strokeWidth="6"
              strokeLinecap="round"
              className="line-indigo"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "2500 0" }} // Initial state: no dash
              whileInView={{
                strokeDasharray: "0 2500", // Animate to fully dashed
                transition: { duration: 2, ease: "easeInOut" }, // Customize animation duration and easing
              }}
              viewport={{once: true}}
            ></motion.path>
          </g>
          <defs>
            <clipPath id="clip0_5_2647">
              <rect
                width="2676.46"
                height="489.145"
                fill="white"
                transform="translate(-589.078 75.5303) rotate(-1.61346)"
              ></rect>
            </clipPath>
            <clipPath id="clip1_5_2647">
              <rect
                width="1511.74"
                height="437.462"
                fill="white"
                transform="translate(-636.063 98.9386) rotate(-1.61346)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <AnimatedText activeIndex={activeIndex} />
    </div>
  );
}

const variants = {
  initial: { y: 70 },
  animate: {
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
  exit: { y: 70, transition: { type: "spring", stiffness: 50, damping: 15 } },
};

const AnimatedText = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="mx-10 font-light text-7xl h-20 overflow-hidden relative">
      <AnimatePresence mode="wait">
        {activeIndex === 0 && (
          <motion.div
            key="box1"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full relative"
          >
            <p className="absolute left-0">20+</p>
            <p className="absolute right-0">prototypes</p>
          </motion.div>
        )}
        {activeIndex === 1 && (
          <motion.div
            key="box2"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full relative"
          >
            <p className="absolute left-0">3</p>
            <p className="absolute right-0">continents</p>
          </motion.div>
        )}
        {activeIndex === 2 && (
          <motion.div
            key="box3"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full relative"
          >
            <p className="absolute left-0">10</p>
            <p className="absolute right-0">years</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
