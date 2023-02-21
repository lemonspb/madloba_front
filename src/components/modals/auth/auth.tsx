"use client";

import { FC, useEffect } from "react";
import { Tabs, Modal } from "antd";
import { Auth } from "@/components/forms/authorization/authorization";
import { Register } from "@/components/forms/register/register";
import styles from "./auth.module.css";
interface ModalAuthProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const ModalAuth: FC<ModalAuthProps> = ({ isOpen, onClose }) => {
  let container = undefined;

  useEffect(() => {
    if (document.querySelector("body")) {
      container = document.querySelector("body");
    }
  }, []);

  const closeModal = () => {
    onClose && onClose();
  };

  return (
    <>
      <Modal
        closable={false}
        className={styles.modal}
        getContainer={container || false}
        open={isOpen}
        footer={null}
        onCancel={() => closeModal()}
      >
        {isOpen && (
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: `Войти`,
                children: <Auth />,
              },
              {
                key: "2",
                label: `Регистрация`,
                children: <Register />,
              },
            ]}
          />
        )}
      </Modal>
    </>
  );
};
