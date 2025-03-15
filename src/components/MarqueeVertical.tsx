"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import {
  Children,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  containerClassName?: string;
  speed?: number;
};

const MarqueeVertical = ({
  children,
  duration = 10,
  containerClassName,
  speed = 1,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState(2); // Ensures seamless looping

  const calculateHeight = useCallback(() => {
    const containerHeight =
      containerRef.current?.getBoundingClientRect().height;
    const marqueeHeight = marqueeRef.current?.getBoundingClientRect().height;

    if (containerHeight && marqueeHeight) {
      setMultiplier(
        marqueeHeight < containerHeight
          ? Math.ceil(containerHeight / marqueeHeight) + 1
          : 2
      );
    }
  }, []);

  useEffect(() => {
    calculateHeight();
    const resizeObserver = new ResizeObserver(calculateHeight);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    if (marqueeRef.current) resizeObserver.observe(marqueeRef.current);
    return () => resizeObserver.disconnect();
  }, [calculateHeight]);

  const duplicatedChildren = useCallback(
    () =>
      [...Array(multiplier)].map((_, i) => (
        <Fragment key={i}>
          {Children.map(children, (child, index) => (
            <div key={index} className="whitespace-nowrap">
              {child}
            </div>
          ))}
        </Fragment>
      )),
    [children, multiplier]
  );

  return (
    <div
      ref={containerRef}
      className={clsx(
        "overflow-hidden flex flex-col relative w-full h-full",
        containerClassName
      )}
    >
      <motion.div
        ref={marqueeRef}
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: duration / speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col"
      >
        {duplicatedChildren()}
      </motion.div>
    </div>
  );
};

export { MarqueeVertical };
