"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Breakup() {
  const [payment, setPayment] = useState<{
    totalAmount: string;
    amountToPay: string;
    discount: string;
  }>();
  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem("cart") || "");
    const offer = JSON.parse(sessionStorage.getItem("offer") || "");
    const cartAmount = Number(cart.cost.totalAmount.amount) || 50;
    const { discountAbsolute, discountPercentage } = offer?.offerDetails;
    const amountToPay = discountAbsolute
      ? cartAmount - discountAbsolute
      : cartAmount - (discountPercentage / 100) * cartAmount;
    setPayment({
      totalAmount: `$${cartAmount.toFixed(1)}`,
      amountToPay: amountToPay === 0 ? "$0" : `$${amountToPay.toFixed(1)}`,
      discount: discountAbsolute
        ? `-$${discountAbsolute}`
        : `-${discountPercentage}%`,
    });
  }, []);

  return (
    <div className="md:w-3/5 p-6 py-20 pl-[10%]">
      <button
        className="text-md font-semibold text-gray-600 mb-4 flex gap-2 items-center"
        onClick={() => {
          router.back();
        }}
      >
        <Image
          src="/demo/icons/arrow-left.png"
          height={8}
          width={16}
          alt="back-icon"
        />
        Back
      </button>
      <h2 className="text-lg mb-6">Pay Persona</h2>
      <div className="mb-4 flex flex-col gap-6 w-full">
        <div className="text-5xl font-bold">{payment?.amountToPay || '-'}</div>
        <div className="text-gray-600 flex w-full justify-between border-b font-semibold pb-1">
          <div>Total Cart Value</div>
          <div className="text-xl">{payment?.totalAmount || "-"}</div>
        </div>
        <div className="text-[#C378FD] flex w-full justify-between border-b font-normal pb-1">
          <div>Discount with persona offers</div>
          <div className="text-xl">{payment?.discount || "-"}</div>
        </div>
        <div className="text-gray-600 flex w-full justify-between border-b font-semibold pb-1">
          <div>Amount to pay</div>
          <div className="text-2xl">{`${payment?.amountToPay || "-"}`}</div>
        </div>
      </div>
    </div>
  );
}
