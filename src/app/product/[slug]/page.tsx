"use client";
import { Typography } from "antd";
import { MainContainer } from "@/layouts/mainContainer/mainContainer";

const { Title } = Typography;

export default function Product() {
  return (
    <MainContainer>
      <Title>Постер в стиле Эгона Шиле </Title>
      <div className="">
        <div></div>
        <div>
          <div>юзер</div>
          <div>характеристики</div>
          <div>Описание</div>
        </div>
      </div>
    </MainContainer>
  );
}
