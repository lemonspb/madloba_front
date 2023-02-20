"use client";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Button, Typography, Dropdown } from "antd";
import Link from "next/link";
import styles from "./header.module.css";
import { Logo } from "@/components/logo/logo";
import { ModalAuth } from "@/components/modals/auth/auth";
const { Text } = Typography;

const items: MenuProps["items"] = [
  { key: "ru", label: "Ru" },
  { key: "ge", label: "Ge" },
];

export function Header() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  let pups = undefined;

  useEffect(() => {
    if (document.querySelector("body")) {
      pups = document.querySelector("body");
    }
  }, []);

  const closeModalLogin = () => {
    setOpenLoginModal((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>
        <div className={styles.right}>
          <Button type={"primary"}>Добавить объявление</Button>
          <Text>Поиск</Text>
          <Button type={"primary"} onClick={() => setOpenLoginModal(true)}>
            Войти
          </Button>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Button type={"primary"}>Ru</Button>
          </Dropdown>
        </div>
      </header>

      <ModalAuth isOpen={openLoginModal} onClose={closeModalLogin} />
    </>
  );
}
