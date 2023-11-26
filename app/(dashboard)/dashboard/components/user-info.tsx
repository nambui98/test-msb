import { Session } from "next-auth";
import React from "react";

type Props = {
  user: Session["user"];
};

export default function UserInfo({ user }: Props) {
  return (
    <div className="border border-secondary-200 rounded-[8px] bg-white text-base font-medium">
      <div className="p-4 border-b border-secondary-200  text-lg text-secondary-800">
        Thông tin chung
      </div>
      <div className="p-4 space-y-4 text-sm font-normal text-secondary-500">
        <div className="flex items-center gap-x-4">
          <p className="w-[120px]">Họ và tên</p>
          <p className="font-medium text-secondary-800">
            {user.firstName + " " + user.lastName}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="w-[120px]">Số CMND/CCCD</p>
          <p className="font-medium text-secondary-800">
            {user.token.slice(0, 20)}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="w-[120px]">Số điện thoại</p>
          <p className="font-medium text-secondary-800"></p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="w-[120px]">Email</p>
          <p className="font-medium text-secondary-800">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
