"use client";
import { useRouter } from "next/navigation";
import { List } from "antd";
import mockImg from "../../../public/mockImg/cover.png";
import { ProductCard } from "@/components/productCard/productCard";
import styles from "./listProducts.module.css";
export default function ListProducts() {
  const router = useRouter();

  const list = [
    {
      title: "Iphone 14",
      id: "1",
      price: 14000,
      location: "Батуми",
      image: mockImg,
    },
    {
      title: "Playstation 4",
      id: "2",
      price: 30000,
      location: "Батуми",
      image: mockImg,
    },
    {
      title: "Стол кухонный",
      id: "3",
      price: 3000,
      location: "Тбилиси",
      image: mockImg,
    },
    {
      title: "Samsung",
      id: "4",
      price: 10000,
      location: "Кутаиси",
      image: mockImg,
    },
    {
      title: "Iphone xr",
      id: "5",
      price: 15000,
      location: "Батуми",
      image: mockImg,
    },
  ];

  const onOpenProduct = (id: string) => {
    router.push(`product/${id}`);
  };
  return (
    <List
      grid={{ gutter: 24, column: 3 }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item className={styles.listItem}>
          <ProductCard
            price={item.price}
            title={item.title}
            location={item.location}
            id={item.id}
            image={item.image}
            open={onOpenProduct}
          />
        </List.Item>
      )}
    />
  );
}
