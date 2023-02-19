"use client";
import { FC } from "react";
import { Card } from "antd";
import Image from "next/image";
interface ProductCardProps {
  title: string;
  price: number;
  location: string;
  id: string;
  image?: any;
  open?: (id: string) => void;
}

const { Meta } = Card;

export const ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  location,
  id,
  open,
  image,
}) => {
  return (
    <Card
      cover={Boolean(image) && <Image src={image} alt={title} />}
      title={title}
      onClick={() => open && open(id)}
    >
      <Meta title={price} description={location} />
    </Card>
  );
};
