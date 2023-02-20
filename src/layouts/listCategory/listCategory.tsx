"use client";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

const list = [
  {
    name: "Одежда, обувь и аксессуары",
    id: "1",
    isOpen: false,
    url: "closing_shoes",
    child: [
      {
        name: "Женская одежда",
        id: "2",
        url: "woman_clothing",
      },
      {
        name: "Мужская одежда",
        id: "3",
        url: "man_clothing",
      },
      {
        name: "Детская одежда",
        id: "4",
        url: "kids_clothing",
      },
    ],
  },
  {
    name: "Транспорт",
    id: "5",
    isOpen: false,
    url: "transport",
    child: [
      {
        name: "Личный",
        id: "6",
        url: "private",
      },
    ],
  },
];

export function ListCategory() {
  return (
    <>
      <Menu
        mode="inline"
        items={[
          {
            label: "Одежда, обувь и аксессуары",
            key: "1",
            children: [
              {
                label: "Женская одежда",
                key: "2",
              },
              {
                label: "Мужская одежда",
                key: "3",
              },
              {
                label: "Детская одежда",
                key: "4",
              },
            ],
          },
          {
            label: "Tранспорт",
            key: "10",
          },
          {
            label: "Работа",
            key: "11",
          },
          {
            label: "Услуги",
            key: "12",
          },
        ]}
      />
    </>
  );
}
