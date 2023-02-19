"use client";
import { Logo } from "@/components/logo/logo";
import styles from "./header.module.css";
import type { MenuProps } from "antd";

import { Button, Typography, Dropdown } from "antd";
import Link from "next/link";

const { Text } = Typography;

const items: MenuProps["items"] = [
  { key: "ru", label: "Ru" },
  { key: "ge", label: "Ge" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles.right}>
        <Button type={"primary"}>Добавить объявление</Button>
        <Text>Поиск</Text>
        <Button type={"primary"} onClick={() => console.log("открыть")}>
          Войти
        </Button>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Button type={"primary"}>Ru</Button>
        </Dropdown>
      </div>
    </header>
  );
}
