import Image from "next/image";
import React from "react";

type Props = {};

function HighLight({}: Props) {
  return (
    <div className="md:max-w-3xl mt-6 md:mt-0 mb-20 md:mb-0 lg:max-w-5xl mx-6 md:mx-auto  flex md:flex-row flex-col  transform z-10 relative md:-translate-y-1/2 bg-white rounded-2xl shadow-secondary-2xl border border-black/10 ">
      <div className="p-5 pt-3 pb-0 md:p-6 lg:p-12">
        <h3
          className="
          md:max-w-[173px] 
          font-bold 
          md:text-xl
          lg:text-2xl 
          tracking-[-0.12px]
          text-secondary-800 "
        >
          Vì sao nên <br /> chọ chúng tôi
        </h3>
      </div>

      <div className="flex-1 px-3 py-3 md:px-0 md:py-5 lg:py-10 grid grid-cols-1 gap-y-3 md:gap-y-0 md:grid-cols-3">
        <div className="px-2 lg:px-4 flex md:block items-start gap-4 md:gap-0">
          <Image
            src={"/icons/document.svg"}
            alt="document"
            width={40}
            height={40}
          />
          <div>
            <h4 className="font-bold md:text-base lg:text-lg lg:leading-6 md:mt-2 lg:mt-4 text-secondary-800">
              100% online
            </h4>
            <p className="text-sm lg:text-base font-normal  md:mt-2 lg:leading-6 text-secondary-500">
              Đăng ký và nộp hồ sơ trực tuyến
            </p>
          </div>
        </div>

        <div className="px-2 lg:px-4 flex md:block items-start gap-4 md:gap-0">
          <Image
            src={"/icons/documents-file-checkmark.svg"}
            alt="document checkmark"
            width={40}
            height={40}
          />
          <div>
            <h4 className="font-bold md:text-base lg:text-lg lg:leading-6 md:mt-2 lg:mt-4 text-secondary-800">
              Phê duyệt thần tốc
            </h4>
            <p className="text-sm lg:text-base font-normal md:mt-2 lg:leading-6 text-secondary-500">
              Duyệt hồ sơ nhanh trong 5 phút
            </p>
          </div>
        </div>
        <div className="px-2 lg:px-4 flex md:block items-start gap-4 md:gap-0">
          <Image
            src={"/icons/documents-file-copy-replace.svg"}
            alt="document replace"
            width={40}
            height={40}
          />
          <div>
            <h4 className="font-bold md:text-base lg:text-lg lg:leading-6 md:mt-2 lg:mt-4 text-secondary-800">
              Sử dụng linh hoạt
            </h4>
            <p className="text-sm lg:text-base font-normal md:mt-2 lg:leading-6 text-secondary-500">
              Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighLight;
