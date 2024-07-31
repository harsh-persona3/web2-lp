"use client";

import * as Dialog from "@radix-ui/react-dialog";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const RedirectingDialog = ({
  open,
  setOpen,
  redirectUrl,
}: {
  open: boolean;
  redirectUrl: string;
  // eslint-disable-next-line no-unused-vars
  setOpen: (arg: boolean) => void;
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            <Image
              src="/demo/checkmark-circle.png"
              height={30}
              width={50}
              alt="redirect-icon"
            />
            <span className={`flex font-bold text-2xl `}>Payment Complete </span>
          </Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            <div className="w-full text-lg">
              <span className={`${styles.colorBanding}`}>Redirecting </span>
              back to your cart
            </div>
          </Dialog.Description>
          <p className="text-center font-normal text-gray-600">
            Click
            <Link href={redirectUrl} className="mx-1 text-blue-500">
              here
            </Link>
            if redirection does not happen within 3 seconds..
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RedirectingDialog;
