import { HTMLAttributes } from "react";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer(props: FooterProps) {
  const { ...rest } = props;
  return (
    <div {...rest}>
      <p className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">We are changing advertising for the benefit of ALL</p>
      <p className="text-center font-normal text-xl sm:text-2xl md:text-3xl">
        At Persona, we are passionate about helping businesses achieve explosive growth through scalable and innovative financial incentives. Let us show you
        what sets us apart.
      </p>
      <div className="flex gap-2 mx-auto w-fit">
        <button>Get in touch</button>
        <button>View demo</button>
      </div>
    </div>
  );
}
