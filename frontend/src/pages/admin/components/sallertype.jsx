import React from "react";
import { Form, Input, Checkbox, Button } from "antd";

const SallerType = ({ onFinish, onFinishFailed }) => {
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: "50%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          borderRadius: "8px",
          width: "45%",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Create Saller</h3>
        <div className="flex row">
          <Form.Item
            label="Saller Name"
            name="SallerName"
            rules={[
              {
                required: true,
                message: "Please input your saller name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="flex row">
          <Form.Item
            label="Category Description"
            name="sallerDescription"
            rules={[
              {
                required: true,
                message: "Please input your category description!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Create Saller
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default SallerType;
