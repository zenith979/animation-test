import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useState, useRef, act } from "react";

const links = ["SLEEP", "BEAUTY", "TRAVEL", "RELAX"];

export default function Tabs({ scrollY }: { scrollY: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref to the container div
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const actualScrollY = useMotionValue(0);
  useEffect(() => {
    // If container ref is available, we can calculate the scroll progress
    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight =
        containerRef.current.getBoundingClientRect().height;

      // Calculate the scroll offset of the container relative to the viewport
      const scrollOffset = scrollY * window.innerHeight;

      // Calculate the scroll progress for the container
      const normalizedScrollY = (scrollOffset - containerTop) / containerHeight;
      console.log(
        scrollY,
        normalizedScrollY,
        normalizedScrollY > 0.03 && normalizedScrollY < 1.12
      );
      if (normalizedScrollY > 0.03 && normalizedScrollY < 0.80)
        setIsVisible(true);
      else {
        console.log("Setting false");
        setIsVisible(false);
      }
      actualScrollY.set(normalizedScrollY);
      // Map normalized scroll value to tab (0-1 -> tab index)
      if (normalizedScrollY >= 0 && normalizedScrollY < 0.25) setActiveTab(0);
      else if (normalizedScrollY >= 0.25 && normalizedScrollY < 0.5)
        setActiveTab(1);
      else if (normalizedScrollY >= 0.5 && normalizedScrollY < 0.75)
        setActiveTab(2);
      else setActiveTab(3);
    }
  }, [scrollY]);
  const box1TranslateY = useTransform(actualScrollY, [0.1, 0.2], [0, -80]);
  const box1Opacity = useTransform(actualScrollY, [0.1, 0.2, 0.3], [1, 0.8, 1]);
  const box1Scale = useTransform(actualScrollY, [0.1, 0.2], [1, 0.9]);
  const box2TranslateY = useTransform(actualScrollY, [0.3, 0.4], [0, -80]);
  const box2Opacity = useTransform(actualScrollY, [0.3, 0.4, 0.5], [1, 0.8, 1]);
  const box2Scale = useTransform(actualScrollY, [0.3, 0.4], [1, 0.9]);
  const box3TranslateY = useTransform(actualScrollY, [0.5, 0.6], [0, -80]);
  const box3Opacity = useTransform(actualScrollY, [0.5, 0.6, 0.7], [1, 0.8, 1]);
  const box3Scale = useTransform(actualScrollY, [0.5, 0.6], [1, 0.9]);
  return (
    <div
      ref={containerRef}
      className={clsx(
        "flex flex-col w-full h-[330vh] relative gap-5 my-10 px-10 snap-center !z-[56] bg-white"
      )}
    >
      <div
        className={clsx(
          "w-fit mx-auto flex gap-2 !z-[56] top-20 bg-gray-100 rounded-[32px]",
          isVisible
            ? "fixed left-[50%] -translate-x-1/2 -translate-y-12 !z-[100]"
            : "relative -translate-y-20"
        )}
      >
        {links.map((link, index) => (
          <button
            key={link}
            className={clsx(
              "py-2.5 px-4 rounded-[36px] active text-sm duration-300 ",
              index === (isVisible ? activeTab : 0)
                ? "bg-purple-800 text-white"
                : "bg-transparent text-black"
            )}
          >
            {link}
          </button>
        ))}
      </div>
      <div className="!z-[55]">
        <AnimatePresence>
          <motion.div
            style={{
              y: box1TranslateY,
              opacity: box1Opacity,
              scale: box1Scale,
            }}
            key="box1"
            className={clsx("w-full sticky top-[16vh] h-[80vh] bg-blue-300")}
          ></motion.div>
          <motion.div
            style={{
              y: box2TranslateY,
              opacity: box2Opacity,
              scale: box2Scale,
            }}
            key="box2"
            className={clsx("w-full sticky top-[16vh] h-[80vh] bg-pink-300")}
          ></motion.div>
          <motion.div
            style={{
              y: box3TranslateY,
              opacity: box3Opacity,
              scale: box3Scale,
            }}
            key="box3"
            className={clsx("w-full sticky top-[16vh] h-[80vh] bg-cyan-300")}
          ></motion.div>
          <motion.div
            key="box4"
            className={clsx("w-full sticky top-[16vh] h-[80vh] bg-green-300")}
          ></motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
