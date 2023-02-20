"use client";
import { Typography, Descriptions, Carousel, Button } from "antd";
import { MainContainer } from "@/layouts/mainContainer/mainContainer";
import Image from "next/image";
import productImageFirst from "../../../../public/mockImg/product.png";
import productImageSecond from "../../../../public/mockImg/cover.png";

import styles from "./product.module.css";
const { Title, Paragraph } = Typography;

export default function Product() {
  return (
    <MainContainer>
      <Title>Постер в стиле Эгона Шиле </Title>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.carousel}>
            <Carousel>
              <div className={styles.slide}>
                <Image
                  src={productImageSecond}
                  width={500}
                  height={500}
                  alt="first"
                />
              </div>
              <div className={styles.slide}>
                <Image
                  src={productImageFirst}
                  width={500}
                  height={500}
                  alt="second"
                />
              </div>
            </Carousel>
          </div>
          <Button type="primary">Связаться с продавцом</Button>
        </div>
        <div className={styles.right}>
          <div>юзер</div>
          <div>
            <Title level={3}>Характеристики</Title>
            <Descriptions column={2}>
              <Descriptions.Item label="Состояние">Новое</Descriptions.Item>
              <Descriptions.Item label="Размер">80 х 80 см.</Descriptions.Item>
              <Descriptions.Item label="Материал">Фотобумага</Descriptions.Item>
              <Descriptions.Item label="Состояние">Новое</Descriptions.Item>
              <Descriptions.Item label="Размер">80 х 80 см.</Descriptions.Item>
              <Descriptions.Item label="Материал">Фотобумага</Descriptions.Item>
            </Descriptions>
          </div>
          <div>
            <Title level={3}>Описание</Title>
            <Paragraph>
              Это отличный подарок себе, друзьям, маме, бабушке, родственникам и
              коллегам. Мы печатаем постеры на качественной глянцевой премиум
              бумаге плотностью 200 гр/м. с нанесением качественного,
              светостойкого, невыцветающего принта. Постеры для интерьера станут
              ярким акцентом в доме или на даче и добавят еще больше уюта и
              красоты. Набор постеров - прекрасное украшение для стен в спальне,
              детской, прихожей, коридоре, гостиной или кухне. В комплекте: 3
              постера. Все тщательно упаковано для сохранности во время
              транспортировки. Добавляйте наш магазин в избранное и первыми
              узнавайте о новинках и акциях! В нашем магазине большой выбор
              товаров для дома: кружки, картины на холсте, стикеры, планеры,
              значки и многое другое!
            </Paragraph>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
