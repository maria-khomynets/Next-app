// components/Modal/Modal.tsx

"use client";

import { useRouter } from "next/navigation";
import css from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.overlay}>
      <div className={css.dialog}>
        {children}
        <button className={css.close} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
