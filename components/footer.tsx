import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="py-4 border-t border-secondary-100">
      <div className="max-w-5xl mx-auto flex gap-x-6">
        <p className="text-xs text-secondary-500 tracking-[-0.06px] font-normal">
          Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB
        </p>
        <p className="ml-auto text-xs text-secondary-500 tracking-[-0.06px] font-normal">
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
