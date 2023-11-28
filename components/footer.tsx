import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="py-4 border-t border-secondary-100">
      <div className=" md:max-w-3xl lg:max-w-5xl mx-6 md:mx-auto flex flex-col md:flex-row gap-4 md:gap-6">
        <p className="text-xs text-secondary-500 tracking-[-0.06px] font-normal">
          Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB
        </p>
        <p className="md:ml-auto text-xs text-secondary-500 tracking-[-0.06px] font-normal">
          Điều khoản dịch vụ
        </p>
        <p className="text-xs text-secondary-500 tracking-[-0.06px] font-normal">
          Ngân hàng điện tử
        </p>
      </div>
    </div>
  );
}

export default Footer;
