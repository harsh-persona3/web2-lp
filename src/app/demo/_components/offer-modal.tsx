"use client";

import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OfferModal = ({
  open,
  setOpen,
  partnerData,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
  partnerData: any;
}) => {

  const router = useRouter();
  const onClickSignUp = () => {
    sessionStorage.setItem("offer", JSON.stringify(partnerData));
    router.push('/demo/payment');
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
                alt="logo"
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
              <input className={styles.Input} id="name" placeholder="Name" />
            </fieldset>
            <fieldset className={styles.Fieldset}>
              <input
                className={styles.Input}
                id="username"
                placeholder="Email"
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
