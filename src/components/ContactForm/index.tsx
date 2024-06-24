"use client";
import { ChangeEvent, FormEvent, HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const items = [
  {
    label: "Checkout Partner",
    value: "checkout-partner",
  },
  {
    label: "Advertiser",
    value: "advertiser",
  },
];

interface ContactFormProps extends HTMLAttributes<HTMLDivElement> {}

export default function ContactForm(props: ContactFormProps) {
  const { className, ...rest } = props;
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comments, setComments] = useState("");

  const isItemChecked = (value: string, checkedItems: string[]) => {
    return checkedItems.includes(value);
  };

  const onItemCheckChange = (checkState: boolean, value: string, checkedItems: string[], setCheckedItems: (items: string[]) => void) => {
    if (checkState) {
      return setCheckedItems(checkedItems.concat(value));
    } else {
      if (checkedItems.includes(value)) return setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "website":
        return setWebsite(value);

      case "comments":
        return setComments(value);

      default:
        break;
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className={twMerge(`flex flex-col gap-10`, className)} {...rest}>
      <div className="group w-fit relative bg-transparent">
        <div className="relative z-20 py-2 px-4 bg-transparent outline rounded-sm">
          <p className="invisible uppercase whitespace-nowrap text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">Get in touch</p>
        </div>
        <div className="absolute left-2 top-2 py-2 px-4 bg-[#71FBFF] transition-all transform group-hover:left-0 group-hover:top-0 rounded-sm">
          <p className="uppercase whitespace-nowrap text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">Get in touch</p>
        </div>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <p className="text-xl md:text-2xl lg:text-4xl">Tell us what you&apos;re interested in </p>
        <div className="flex gap-2 flex-wrap items-center">
          {items.map((item) => (
            <CheckboxCard
              key={item.value}
              label={item.label}
              value={item.value}
              isChecked={isItemChecked(item.value, checkedItems)}
              onCheckedChange={(checkState) => onItemCheckChange(checkState, item.value, checkedItems, setCheckedItems)}
            />
          ))}
        </div>

        <input
          type="text"
          required
          name="name"
          className={`px-3 py-2 cursor-none w-full text-black border border-black rounded-lg text-sm md:text-base lg:text-xl ${
            name ? "bg-white" : "bg-[#F3F3F3]/50"
          }`}
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="email"
          required
          name="email"
          className={`px-3 py-2 cursor-none w-full text-black border border-black rounded-lg text-sm md:text-base lg:text-xl ${
            email ? "bg-white" : "bg-[#F3F3F3]/50"
          }`}
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          required
          name="website"
          className={`px-3 py-2 cursor-none w-full text-black border border-black rounded-lg text-sm md:text-base lg:text-xl ${
            website ? "bg-white" : "bg-[#F3F3F3]/50"
          }`}
          placeholder="Company Website"
          value={website}
          onChange={handleInputChange}
        />
        <textarea
          className={`px-3 py-2 cursor-none w-full text-black border border-black rounded-lg text-sm md:text-base lg:text-xl ${
            comments ? "bg-white" : "bg-[#F3F3F3]/50"
          }`}
          placeholder="Comments"
          value={comments}
          name="comments"
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="bg-black outline block outline-black hover:scale-105  hover:bg-gradient-to-l from-[#DFD9FF] via-[#DFD9FF] to-[#FFF3E9] hover:text-black transition-all duration-500 ease-out text-white font-bold py-2 px-4 rounded-xl text-base md:text-lg xl:text-xl pointer-events-auto cursor-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

interface CheckBoxProps {
  label: string;
  value: string;
  isChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const CheckboxCard = (props: CheckBoxProps) => {
  const { label, isChecked, onCheckedChange, value } = props;
  return (
    <div
      className={`pointer-events-auto flex gap-2 items-center border w-fit p-3 rounded-lg transition-all duration-200 ease-in-out ${
        isChecked ? "bg-[#CBC1FF]" : "bg-white"
      }`}
    >
      <Checkbox.Root
        id={value}
        defaultChecked={isChecked}
        checked={isChecked}
        onCheckedChange={onCheckedChange}
        value={value}
        className={`w-[25px] h-[25px] flex items-center justify-center border border-transparent rounded-md  cursor-none ${
          isChecked ? "bg-white" : "bg-neutral-200/80"
        }`}
      >
        <Checkbox.Indicator>{isChecked === true && <CheckIcon />}</Checkbox.Indicator>
      </Checkbox.Root>
      <label className={`${isChecked ? "font-bold" : "font-normal"} text-black cursor-none text-sm md:text-base lg:text-xl`} htmlFor={value}>
        {label}
      </label>
    </div>
  );
};