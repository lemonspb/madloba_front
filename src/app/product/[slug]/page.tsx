"use client";
import { Typography, Descriptions } from "antd";
import { MainContainer } from "@/layouts/mainContainer/mainContainer";

const { Title, Paragraph } = Typography;

export default function Product() {
  return (
    <MainContainer>
      <Title>Постер в стиле Эгона Шиле </Title>
      <div className="">
        <div></div>
        <div>
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
