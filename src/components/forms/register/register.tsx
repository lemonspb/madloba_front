"use client";

import React from "react";
import { Button, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const Register: React.FC = () => (
  <Form
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="email"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input placeholder="E-mail" size="large" />
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password placeholder="Пароль" size="large" />
    </Form.Item>

    <Form.Item
      name="confirm"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password placeholder="Подтвердите пароль" size="large" />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
      <Button type="primary" htmlType="submit">
        Регистрация
      </Button>
    </Form.Item>
  </Form>
);
