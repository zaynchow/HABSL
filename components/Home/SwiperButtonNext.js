
import { useSwiper } from "swiper/react";
import Image from "next/image";



const SwiperButtonNext = ({ progress }) => {
  const swiper = useSwiper();
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-3">
        <button
          className=" border-solid border-black border-2 rounded-[200px] w-12 h-12 rotate-180 flex justify-center cursor-pointer items-center "
          onClick={() => swiper.slidePrev()}
        >
          <Image
            className="cursor-pointer"
            src="/icons/arrow-right.svg"
            width={20}
            height={20}
            alt="Right Arrow"
          />
        </button>
        <button
          className=" border-solid border-black border-2 rounded-[200px] w-12 h-12 flex justify-center cursor-pointer items-center "
          onClick={() => swiper.slideNext()}
        >
          <Image
            className="cursor-pointer"
            src="/icons/arrow-right.svg"
            width={20}
            height={20}
            alt="Left Arrow"
          />
        </button>
      </div>

      <div className="bg-black relative h-1 w-[300px]">
        <div
          className="bg-yellow h-12 transition-all"
          style={{ width: `${300 * progress}px` }}
        >
          70%
        </div>
      </div>
    </div>
  );
};

export default SwiperButtonNext;
