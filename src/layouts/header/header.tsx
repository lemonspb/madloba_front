"use client";
import { Logo } from "@/components/logo/logo";
import styles from "./header.module.css";
import { Button, Typography } from "antd";
import Link from "next/link";

const { Text } = Typography;
export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles.right}>
        <Button type={"primary"}>Добавить объявление</Button>
        <Text>Поиск</Text>
        <Button type={"primary"}>Войти</Button>
        <Button type={"primary"}>Ru</Button>
      </div>
    </header>
  );
}
