export default function Legend() {
  return (
    <div className="flex flex-col relative h-[800px] gap-5 items-center justify-center bg-pink-800 rounded-xl mx-5 z-[1] overflow-hidden snap-center">
      {/* Text and Button */}
      <p className="text-7xl font-light text-white">
        The pillow, <br /> reinvented.
      </p>
      <button className="bg-white p-2.5 rounded-[20px] text-black hover:bg-purple-800 hover:text-white duration-500">
        SHOP ALL PILLOWS
      </button>

      {/* White Block at Bottom-Right */}
      <div className="absolute size-[300px] right-0 bottom-0 bg-white rounded-tl-xl"></div>

      {/* Pseudo-elements for rounding the intersection */}
      <div
        style={{ boxShadow: "0 16px #fbfafc" }}
        className="absolute right-[300px] bottom-0 size-[50px] rounded-br-xl z-[2]"
      ></div>
      <div
        style={{ boxShadow: "0 16px #fbfafc" }}
        className="absolute right-0 bottom-[300px] size-[50px] rounded-br-xl z-[2]"
      ></div>
    </div>
  );
}
