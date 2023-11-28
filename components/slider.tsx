"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "./ui/button";

export const Slider = () => {
  const pagination = {
    clickable: true,

    renderBullet: function (index: number, className: string) {
      return (
        '<span class="px-3 !rounded-sm !h-1 ' + className + '">' + "</span>"
      );
    },
  };
  return (
    <Swiper
      effect={"fade"}
      pagination={pagination}
      modules={[Pagination, EffectFade, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className=""
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative">
            <Image
              src="/images/Herobanner.png"
              alt="Vercel Logo"
              className="w-full"
              width={1440}
              height={850}
              priority
            />
            <div className="absolute inset-x-0 top-1/4 md:max-w-3xl lg:max-w-5xl mx-6 md:mx-auto">
              <motion.div
                className=""
                initial={{ opacity: 0, translateY: 60 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  translateY: isActive ? 0 : 60,
                }}
              >
                <h1 className="max-w-[423px] md:text-2xl lg:text-[40px] font-bold lg:leading-[48px] tracking-[-0.2px]">
                  Trải nghiệm sống cực chất cho dân văn phòng
                </h1>
                <p className="mt-2 lg:mt-4 text-base font-normal tracking-[-0.08px] text-secondary-500">
                  Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND
                </p>
                <Button variant={"default"} className="mt-4 lg:mt-8">
                  Khám phá ngay
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative">
            <Image
              src="/images/banner5.png"
              alt="Vercel Logo"
              className="w-full"
              width={1440}
              height={850}
              priority
            />
            <div className="absolute inset-x-0 top-1/4  md:max-w-3xl lg:max-w-5xl mx-6 md:mx-auto">
              <motion.div
                className=""
                initial={{ opacity: 0, translateY: 60 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  translateY: isActive ? 0 : 60,
                }}
              >
                <h1 className="max-w-[423px] md:text-2xl lg:text-[40px] font-bold lg:leading-[48px] tracking-[-0.2px]">
                  Trải nghiệm sống cực chất cho dân văn phòng
                </h1>
                <p className="mt-2 lg:mt-4 text-base font-normal tracking-[-0.08px] text-secondary-500">
                  Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND
                </p>
                <Button variant={"default"} className="mt-4 lg:mt-8">
                  Khám phá ngay
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
