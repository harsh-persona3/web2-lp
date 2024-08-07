"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RedirectingDialog from "./redirect-dialog";

interface Cart {
  offer?: any; // Replace 'any' with the actual type of 'offer' if known
  [key: string]: any;
}

export default function PaymentDetails() {
  const router = useRouter();
  const [finalCart, setFinalCart] = useState<Cart>({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    //copy user data to offer obj, cause we'll send that back
    const stringifiedOffer = sessionStorage.getItem("offer") || "";
    const stringifiedCart = sessionStorage.getItem("cart") || "";
    if (stringifiedCart.length && stringifiedOffer.length) {
      const cart = JSON.parse(stringifiedCart);
      const offer = JSON.parse(stringifiedOffer);
      cart["offer"] = { ...offer };
      setFinalCart(cart);
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    country: "United States",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name === "cardNumber") {
      let newValue = value.replace(/\D/g, "");
      if (newValue.length >= 0 && newValue.length <= 16) {
        newValue = newValue.match(/.{1,4}/g)?.join(" ") ?? "";
        setFormData((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
      }
    } else if (name === "zip") {
      if (value.length <= 5)
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: typeof errors = {
      email: "",
      zip: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      nameOnCard: "",
    };

    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address";
    if (!/^\d{5}(-\d{4})?$/.test(formData.zip))
      newErrors.zip = "Invalid ZIP code, ZIP code must be 5 digits";
    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(formData.cardNumber))
      newErrors.cardNumber =
        "Invalid card number, please enter your 16 digit card number";
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry))
      newErrors.expiry = "Invalid expiry date";
    if (!/^\d{3,4}$/.test(formData.cvc)) newErrors.cvc = "Invalid CVC";
    if (!formData.nameOnCard.trim())
      newErrors.nameOnCard = "Name on card is required";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setOpen(true);
    setTimeout(() => {
      router.push(
        `${
          process.env.NEXT_PUBLIC_PAYMENT_COMPLETE_REDIRECT
        }cart=${JSON.stringify(finalCart)}`
      );
    }, 1500);
  };

  return (
    <div className="md:w-2/5 bg-white px-4 py-8 md:px-24 md:py-24 shadow-xl drop-shadow-xl">
      <div className="bg-black text-white text-center py-3 rounded-lg mb-4 cursor-pointer">
        Apple Pay
      </div>
      <div className="text-center text-gray-400 mb-4">OR</div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-700">
            Country or region
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          >
            <option>United States</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700">ZIP</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="w-full bg-gray-200 py-2 rounded-lg text-center"
          >
            Card
          </button>
        </div>
        <div>
          <label className="block text-sm text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="1234 1234 1234 1234"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber}</p>
          )}
        </div>
        <div className="flex justify-between gap-4">
          <div>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              placeholder="MM / YY"
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm">{errors.expiry}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              placeholder="CVC"
            />
            {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700">Name on card</label>
          <input
            type="text"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.nameOnCard && (
            <p className="text-red-500 text-sm">{errors.nameOnCard}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg"
        >
          Proceed
        </button>
      </form>
      <RedirectingDialog
        open={open}
        setOpen={setOpen}
        redirectUrl={`${
          process.env.NEXT_PUBLIC_PAYMENT_COMPLETE_REDIRECT
        }cart=${JSON.stringify(finalCart)}`}
      />
    </div>
  );
}
