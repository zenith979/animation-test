import "./App.css";
import Legend from "./components/Legend";
import Navbar from "./components/Navbar";
import Texts from "./components/Texts";
import Tabs from "./components/Tabs";
import Range from "./components/Range";
import Reviews from "./components/Reviews";
import PillowReinvented from "./components/Reinvented";
import Founder from "./components/Founder";
import Hyoumankind from "./components/Hyoumankind";
import Footer from "./components/Footer";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

function App() {
  const target = useRef<null | HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest);
  });
  return (
    <div ref={target}>
      <Navbar />
      <Legend />
      <Texts />
      <Tabs scrollY={scrollY} />
      <Range />
      <Reviews />
      {/* <Pillow /> */}
      <PillowReinvented />
      <Founder />
      <Hyoumankind />
      <Footer />
    </div>
  );
}

export default App;
