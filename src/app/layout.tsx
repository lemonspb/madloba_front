"use client";

import "./globals.css";
import { Header } from "@/layouts/header/header";
import { ConfigProvider, Modal } from "antd";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head />
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0058A3",
            },
            components: {
              Button: {
                borderRadius: 50,
              },
            },
          }}
        >
          <Header />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
