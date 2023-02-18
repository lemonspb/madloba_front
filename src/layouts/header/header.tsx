"use client";
import { Logo } from "@/components/logo/logo";
import styles from "./header.module.css";
import { Button, Typography } from "antd";

const { Text } = Typography;
export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <Button type={"primary"}>Добавить объявление</Button>
        <Text>Поиск</Text>
        <Button type={"primary"}>User</Button>
        <Button type={"primary"}>Ru</Button>
      </div>
    </header>
  );
}
