import Image from "next/image";
import React from "react";

type Props = {};

function HighLight({}: Props) {
  return (
    <div className="max-w-5xl mx-auto flex  transform z-10 relative -translate-y-1/2 bg-white rounded-2xl shadow-secondary-2xl border border-black/10 ">
      <div className="p-12 pr-12">
        <h3
          className="max-w-[173px] font-bold text-2xl 
          tracking-[-0.12px]
           text-secondary-800 "
        >
          Vì sao nên <br /> chọ chúng tôi
        </h3>
      </div>

      <div className="flex-1 py-10 grid grid-cols-3">
        <div className="px-4">
          <Image
            src={"/icons/document.svg"}
            alt="document"
            width={40}
            height={40}
          />
          <h4 className="font-bold text-lg leading-6 mt-4 text-secondary-800">
            100% online
          </h4>
          <p className="text-base font-normal mt-2 leading-6 text-secondary-500">
            Đăng ký và nộp hồ sơ trực tuyến
          </p>
        </div>
        <div className="px-4">
          <Image
            src={"/icons/documents-file-checkmark.svg"}
            alt="document checkmark"
            width={40}
            height={40}
          />
          <h4 className="font-bold text-lg leading-6 mt-4 text-secondary-800">
            Phê duyệt thần tốc
          </h4>
          <p className="text-base font-normal mt-2 leading-6 text-secondary-500">
            Duyệt hồ sơ nhanh trong 5 phút
          </p>
        </div>
        <div className="px-4">
          <Image
            src={"/icons/documents-file-copy-replace.svg"}
            alt="document replace"
            width={40}
            height={40}
          />
          <h4 className="font-bold text-lg leading-6 mt-4 text-secondary-800">
            Sử dụng linh hoạt
          </h4>
          <p className="text-base font-normal mt-2 leading-6 text-secondary-500">
            Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm
          </p>
        </div>
      </div>
    </div>
  );
}

export default HighLight;
