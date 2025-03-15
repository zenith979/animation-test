import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

const urls = ["SHOP", "ABOUT", "COLLECTIONS", "CONTACT"];
const icons = ["search", "profile", "cart"];
export default function Navbar() {
  const [adsIndex, setAdsIndex] = useState<number>(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [scrollY, setScrollY] = useState(200);
  const [navBarHover, setNavBarHover] = useState(false);
  useEffect(() => {
    if (adsIndex === -1) return;
    const interval = setInterval(() => {
      // ads length = 3
      const tempAdsIndex = adsIndex >= 3 - 1 ? -1 : adsIndex;
      setAdsIndex(tempAdsIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [adsIndex]);
  useEffect(() => {
    // Function to display ads

    const handleScroll = () => {
      setScrollY(window.scrollY); // Update the scrollY
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // If scrolling up, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  function closeAds() {
    console.log("Closing ads");
    setAdsIndex(-1);
  }
  return (
    <>
      {adsIndex !== -1 && (
        <AnimatePresence>
          <motion.div
            className={clsx(
              "flex relative py-8 bg-white justify-center duration-[1500ms] z-[50]",
              adsIndex !== -1 && scrollY < 200
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            )}
            exit={{ opacity: 0, y: -80 }}
          >
            <AnimatePresence>
              {adsIndex === 0 && (
                <motion.div
                  transition={{ duration: 0.8 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={"ads1"}
                  className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-3 w-full text-center"
                >
                  30% off on all products today
                </motion.div>
              )}
              {adsIndex === 1 && (
                <motion.div
                  transition={{ duration: 0.8, delay: 0.8 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={"ads2"}
                  className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-3 w-full text-center"
                >
                  Free shipping on all orders
                </motion.div>
              )}
              {adsIndex === 2 && (
                <motion.div
                  transition={{ duration: 0.8, delay: 0.8 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={"ads3"}
                  className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-3 w-full text-center"
                >
                  NYE Sale! Get 50% off
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      )}
      <div
        id="header"
        className={clsx(
          "w-full flex flex-col text-black transition-all duration-300 fixed z-[50] top-0",
          isVisible ? adsIndex !== -1 ? "translate-y-0" : "-translate-y-[20px]" : "-translate-y-full",
        )}
      >
        <div
          className={clsx(
            "w-full flex justify-between items-center pb-10 px-8 duration-1000",
            scrollY < 200
              ? "bg-transparent text-white translate-y-20"
              : "bg-white py-8"
          )}
          style={{ boxShadow: scrollY > 200 ? "0 4px 10px #0000000d" : "" }}
        >
          <p className={`${navBarHover && "text-black"}`}>
            hyouman <br />
            --kind
          </p>
          <div className="flex gap-2">
            {urls.map((url) => (
              <a
                key={url}
                onMouseEnter={() => url === "SHOP" && setNavBarHover(true)}
                href="#"
                className={clsx("mx-2", navBarHover && "text-black")}
              >
                {url}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            {icons.map((icon) => (
              <img key={icon} className={clsx(adsIndex === -1 || scrollY < 200 ? "invert" : "", 'duration-300')} src={`./icons/${icon}.svg`} alt={icon} />
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={closeAds}
        className={clsx(
          "ml-auto absolute right-4 -top-12 size-3 cursor-pointer z-[51]",
          adsIndex !== -1 && scrollY < 200
            ? "translate-y-0 opacity-100"
            : "-translate-y-0 opacity-0",
          adsIndex === -1 ? "hidden" : "relative"
        )}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6028_6916)">
            <path
              d="M24 1.37142L22.6286 0L12 10.6286L1.37142 0L0 1.37142L10.6286 12L0 22.6286L1.37142 24L12 13.3714L22.6286 24L24 22.6286L13.3714 12L24 1.37142Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_6028_6916">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <AnimatePresence>
        {navBarHover && <NavbarHover hideHover={() => setNavBarHover(false)} />}
      </AnimatePresence>
    </>
  );
}

const links = ["PILLOWS", "ACCESSORIES", "BUNDLES", "EVERYTHING"];
function NavbarHover({ hideHover }: { hideHover: () => void }) {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const containerHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hideHover();
    }
  };
  const childrenHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <motion.div
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed w-[100vw] h-[100vh] left-0 top-0 bg-black/10 z-[10]"
      onMouseMove={containerHover}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white w-full h-[80vh] z-[51] pt-40 px-5 py-5 grid grid-cols-2.1"
        onMouseEnter={childrenHover}
      >
        <div
          onMouseMove={() => setHoverIndex(-1)}
          className="w-full flex flex-col"
        >
          <AnimatePresence>
            {links.map((link, index) => (
              <motion.div
                layout
                key={link}
                onMouseMove={(ev) => {
                  ev.stopPropagation();
                  setHoverIndex(index);
                }}
                className="flex gap-2 text-4xl font-light items-center py-3"
              >
                {hoverIndex === index && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                  >
                    <circle cx="8" cy="8" r="7.5" stroke="#362F60"></circle>
                    <path d="M4 8H11" stroke="#362F60"></path>
                    <path d="M8 4.5L11.5 8L8 11.5" stroke="#362F60"></path>
                  </motion.svg>
                )}
                <motion.p layout>{link}</motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="w-full relative">
          <AnimatePresence>
            {hoverIndex === -1 && (
              <motion.div
                key="box1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full absolute right-5 top-0 bg-green-300"
              ></motion.div>
            )}
            {hoverIndex === 0 && (
              <motion.div
                key="box1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full absolute right-5 top-0 bg-blue-300"
              ></motion.div>
            )}
            {hoverIndex === 1 && (
              <motion.div
                key="box2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full absolute right-5 top-0 bg-cyan-300"
              ></motion.div>
            )}
            {hoverIndex === 2 && (
              <motion.div
                key="box3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full absolute right-5 top-0 bg-stone-300"
              ></motion.div>
            )}
            {hoverIndex === 3 && (
              <motion.div
                key="box4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full absolute right-5 top-0 bg-pink-300"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
