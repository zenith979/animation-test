import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import PillowModel from "../../Pillow.js";

export default function App() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
    setScrollY(value);
  });
  return (
    <div ref={targetRef} className="h-[500vh]">
      <PillowModel />
    </div>
  );
}
