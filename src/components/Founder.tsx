export default function Founder() {
  return (
    <div className="mb-20 mx-10 grid grid-cols-2">
      <div className="flex flex-col gap-20 h-full p-8 bg-emerald-100">
        <p className="w-fit px-3 py-1 rounded-2xl bg-white font-light text-xl">
          How we reinvented the pillow
        </p>
        <img src="/silk-pillow.webp" />
        <div className="flex flex-col gap-6">
          <p className="text-4xl font-extralight">Meet our founder</p>
          <p className="max-w-[80%] font-light ">
            After realising my physicality as well as my appearance was being
            affected by how I was sleeping, I bought every ‘quality’ pillow I
            could get my head down on. None of them delivered on their promises
            of better sleep. So I set out to reinvent the pillow. After a decade
            of refining over 20 prototypes, working closely with healthcare
            professionals, beauty experts, and manufacturers, and conducting
            numerous studies, our pillow is now elevating the sleep and
            wellbeing of thousands of Hyoumankind customers.
          </p>
          <button className="w-fit group flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="7.5" className="group-hover:fill-[#2A2A2A] stroke-[#2A2A2A] duration-300"></circle>
              <path d="M4 8H11" className="group-hover:stroke-white stroke-[#2A2A2A] duration-300"></path>
              <path d="M8 4.5L11.5 8L8 11.5" className="group-hover:stroke-white stroke-[#2A2A2A] duration-300"></path>
            </svg>
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full h-full bg-gray-100"></div>
    </div>
  );
}
