"use client";

import { Card, List } from "antd";

export default function ListProducts() {
  const list = [
    {
      title: "Iphone 14",
      id: "1",
      price: "14000",
      location: "Батуми",
    },
    {
      title: "Playstation 4",
      id: "2",
      price: "30000",
      location: "Батуми",
    },
    {
      title: "Стол кухонный",
      id: "3",
      price: "3000",
      location: "Тбилиси",
    },
    {
      title: "Samsung",
      id: "4",
      price: "10000",
      location: "Кутаиси",
    },
    {
      title: "Iphone xr",
      id: "5",
      price: "15000",
      location: "Батуми",
    },
  ];
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>
            <div>{item.price}</div>
            <div>{item.location}</div>
          </Card>
        </List.Item>
      )}
    />
  );
}
