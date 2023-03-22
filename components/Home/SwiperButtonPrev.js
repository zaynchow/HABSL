import { useSwiper } from "swiper/react";
import Image from "next/image";


const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className=" border-solid border-black border-2 rounded-[200px] w-12 h-12 rotate-180 flex justify-center cursor-pointer items-center "
      onClick={() => swiper.slidePrev()}
    >
      <Image
        className="cursor-pointer"
        src="/icons/arrow-right.svg"
        width={20}
        height={20}
        alt="Arrow Right"
      />
    </button>
  );
};


export default SwiperButtonPrev;