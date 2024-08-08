"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

interface PartnerData {
  label: string;
  logo: string;
  bgSrc: string;
  content: string;
}

interface OfferModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  partnerData: PartnerData;
}

const OfferModal: React.FC<OfferModalProps> = ({
  open,
  setOpen,
  partnerData,
}: OfferModalProps) => {
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const router = useRouter();

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!formValues.name) {
      newErrors.name = "Name is required";
    }
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email address is invalid";
    }
    return newErrors;
  };

  const onClickSignUp = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      sessionStorage.setItem("offer", JSON.stringify(partnerData));
      router.push("/demo/payment");
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            Sign Up for {partnerData.label}
          </Dialog.Title>
          <div className="border rounded-md flex flex-col items-center gap-4 pb-8 overflow-hidden">
            <div className="bg-fuchsia-300 h-[200px] w-full relative rounded-md flex items-center justify-center">
              <Image
                src={partnerData.logo}
                alt="logo"
                height={80}
                width={200}
                className="z-30"
              />
              <Image
                src={partnerData.bgSrc}
                alt="background"
                fill
                className="object-cover z-10"
              />
              <div
                className={`size-full absolute z-20 ${styles.gradient}`}
              ></div>
            </div>
            <Dialog.Description className={styles.DialogDescription}>
              {partnerData.content}
            </Dialog.Description>
            <fieldset className={styles.Fieldset}>
              <input
                className={`${styles.Input} ${
                  errors.name ? "!border-2 !border-red-400" : ""
                }`}
                id="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </fieldset>
            <fieldset className={styles.Fieldset}>
              <input
                className={`${styles.Input} ${
                  errors.email ? "!border-2 !border-red-400" : ""
                }`}
                id="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </fieldset>
            <button onClick={onClickSignUp} className={styles.Button}>
              Sign Up
            </button>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          ></div>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default OfferModal;
