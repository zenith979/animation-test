const images = [0, 1, 2, 3, 4, 5];
export default function Reviews() {
  return (
    <div className="flex flex-col gap-10 mt-16 mb-5">
      <div className="w-1/2 mx-auto flex flex-col gap-6 my-20">
        <div className="flex gap-3 font-light">
          <span>4.8</span> <span>(60 Reviews)</span>
        </div>
        <div className="font-extralight text-5xl text-justify leading-[60px]">
          "I have no more neck or back pain since using the Go Pillow. The silk
          pillowcase is so nice to sleep on as well. I cannot go back to using
          any other pillow. I will be taking this on holiday with me as well."
        </div>
        <div className="flex gap-2 font-light text-sm">
          <span>Kaye</span>
          <span>08/11/2023</span>
          <span>Verified</span>
        </div>
      </div>
      <div className="flex justify-around border-t border-dotted border-gray-400 pt-5">
        {images.map((img) => (
          <div
            className="size-28 flex items-center justify-center bg-gray-100"
            key={img}
          >
            {img}
          </div>
        ))}
      </div>
    </div>
  );
}
