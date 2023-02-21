"use client";

import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const Auth: React.FC = () => (
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
      <Input placeholder="E-mail" prefix={<UserOutlined />} size="large" />
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password
        placeholder={"Пароль"}
        prefix={<LockOutlined />}
        size="large"
      />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 0, span: 1 }}
    >
      <Checkbox>Запомнить</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
    </Form.Item>
  </Form>
);
