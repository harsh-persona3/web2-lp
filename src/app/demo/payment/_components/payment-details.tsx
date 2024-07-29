"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentDetails() {
  const router = useRouter();
  const [offer, setOffer] = useState();
  useEffect(() => {
    const offer = sessionStorage.getItem("offer") || "";
    setOffer(JSON.parse(offer));
  }, []);

  return (
    <div className="md:w-2/5 bg-white px-4 py-8 md:px-24 md:py-24 shadow-xl drop-shadow-xl">
      <div className="bg-black text-white text-center py-3 rounded-lg mb-4 cursor-pointer">
        Apple Pay
      </div>
      <div className="text-center text-gray-400 mb-4">OR</div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">
            Country or region
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
            <option>United States</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700">ZIP</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div className="flex space-x-2">
          <button className="w-1/3 bg-gray-200 py-2 rounded-lg text-center">
            Card
          </button>
          <button className="w-1/3 bg-gray-200 py-2 rounded-lg text-center">
            EPS
          </button>
          <button className="w-1/3 bg-gray-200 py-2 rounded-lg text-center">
            Giropay
          </button>
        </div>
        <div>
          <label className="block text-sm text-gray-700">
            Country or region
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="1234 1234 1234 1234"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            className="w-1/2 border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="MM / YY"
          />
          <input
            type="text"
            className="w-1/2 border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="CVC"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Name on card</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg"
          onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_PAYMENT_COMPLETE_REDIRECT}offer=${JSON.stringify(offer)}`);
          }}
        >
          Proceed
        </button>
      </form>
    </div>
  );
}
