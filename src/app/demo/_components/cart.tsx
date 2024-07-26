"use client";
import {  useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Cart() {
  const searchParams = useSearchParams();

  const stringifiedCart = searchParams.get("cart") || "";
  let cart;
  if (stringifiedCart.length) {
    cart = JSON.parse(stringifiedCart);
  }

  useEffect(() => {
    sessionStorage.setItem("cart", stringifiedCart);
  }, [stringifiedCart]);

  if (!cart?.lines.length) {
    return <></>;
  }

  return (
    <div className="bg-white border-2 border-black h-[500px] w-[550px] max-w-[700px] flex flex-col justify-between py-4">
      <div>
        <div className="flex flex-col gap-4 w-full text-2xl font-bold px-6 border-b-2 border-black py-4">
          <span> Your cart details from</span>
          <span className="text-3xl">Choco-latte</span>
        </div>
        <div className="flex flex-col w-full gap-2 px-6 mt-2">
          <span className="text-xl">Items</span>
          {cart.lines.map((item: any) => {
            return (
              <div
                key={item.merchandise.product.id}
                className="text-lg font-bold flex items-center justify-between"
              >
                <span>{item.merchandise.product.title}</span>
                <span>{`$${item.cost.totalAmount.amount}`}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full text-lg font-bold p-4 px-6">
        <div className="flex flex-col gap-2 pt-2 border-t-2 border-black">
          <div className="flex items-center justify-between">
            <span> Shipping </span>
            <span> {`$0`} </span>
          </div>
          <div className="flex items-center justify-between">
            <span> To be paid </span>
            <span> ${cart.cost.totalAmount.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
