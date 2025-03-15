const links = [
  {
    name: "Shop",
    links: [
      "Go Shop",
      "Back Sleep Pillow",
      "Boost Pillow",
      "Knee Pillow",
      "Accessories",
    ],
  },
  {
    name: "Social",
    links: [
      "Instagram",
      "Facebook",
      "Tiktok",
      "LinkedIn",
      "Youtube",
      "Pinterest",
    ],
  },
  {
    name: "Support",
    links: ["Shipping & Returns", "Terms of Purchase", "Privacy Policy"],
  },
];
export default function Footer() {
  return (
    <div className="footer h-[80vh] flex flex-col justify-between rounded-2xl mx-10 mb-16 px-10 py-20 text-white">
      <div className="flex justify-between">
        <div className="w-[400px] flex flex-col gap-2">
          <p className="ml-2 text-2xl font-extralight">Subscribe</p>
          <p className="ml-2 text-sm">
            Become a Hyoumankinder for newest product launches, member discounts
            and all the good things.
          </p>
          <div className="flex flex-col gap-3 mt-3">
            <input
              type="text"
              placeholder="First Name"
              className="bg-white/20 px-4 py-3 rounded-[32px] text-white placeholder:text-white text-sm"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="bg-white/20 px-4 py-3 rounded-[32px] text-white placeholder:text-white text-sm"
            />
            <button className="w-fit bg-white py-2.5 px-4 text-sm rounded-[20px] text-black hover:bg-indigo-900 hover:text-white duration-500">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-32 gap-y-10 w-1/3 font-light">
          {links.map((link) => (
            <div key={link.name} className="flex flex-col gap-5">
              <p>{link.name}</p>
              <div className="flex flex-col gap-2">
                {link.links.map((li) => (
                  <a className="text-sm" key={li} href="#">
                    {li}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-end mt-auto">
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="70"
            viewBox="0 0 101 70"
            fill="none"
          >
            <path
              d="M87.9949 24.6745C76.583 18.3451 76.9781 8.1049 63.4166 2.04247C46.5831 -5.4806 22.3525 8.79595 25.0712 28.224C27.1892 43.3173 35.5347 50.2906 52.1153 50.4163C68.7116 50.5262 72.6315 44.6365 83.585 48.8771C94.5386 53.102 113.68 38.9196 87.9949 24.6745Z"
              fill="url(#paint0_linear_357_301)"
            ></path>
            <path
              opacity="0.7"
              d="M84.0951 45.4693C82.3564 35.4333 71.3553 29.9834 62.1087 31.8524C52.862 33.7056 43.4257 40.1293 39.4742 28.2872C35.5226 16.445 23.7944 16.0366 18.1832 17.2931C9.91658 19.1464 1.28639 22.9943 0.0693083 31.8524C-1.29003 41.7627 17.709 41.5271 25.1696 51.9558C31.3656 60.6254 38.6206 70.0645 53.1466 69.5462C67.6725 69.028 86.8138 61.2693 84.0951 45.4693Z"
              fill="#E8927C"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_357_301"
                x1="24.8609"
                y1="25.2101"
                x2="100.782"
                y2="25.2101"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#893B67"></stop>
                <stop offset="1" stopColor="#403A60"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p className="text-4xl font-[100]">
            The pillow, <br /> reinvented.
          </p>
        </div>
        <p className="flex gap-2 text-xs font-light">
          © 2023, Hyoumankind. All right reserved.
          <span>Site by S/A</span>
        </p>
      </div>
    </div>
  );
}
