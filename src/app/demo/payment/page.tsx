import React, { Suspense } from "react";
import Breakup from "./_components/breakup";
import PaymentDetails from "./_components/payment-details";

const PaymentComponent = () => {
  return (
    <div className="flex min-h-screen  w-full justify-center items-center bg-white">
      <div className="size-full bg-white rounded-lg max-w-screen-2xl">
        <div className="flex flex-col md:flex-row size-full min-h-screen">
          <Suspense fallback="Loading..">
            <Breakup />
          </Suspense>
         <PaymentDetails />
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
