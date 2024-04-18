import React from "react";
import { Form, Input, Button, message } from "antd";

const SallerType = ({ onFinish, onFinishFailed }) => {
  const [form] = Form.useForm(); // Initialize form instance

  const handleSubmit = async (values) => {
    try {
      // Trim the values before submitting
      const trimmedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.trim()])
      );
      await onFinish(trimmedValues);
      form.resetFields();
      message.success("Saller created successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Form
        form={form} // Pass the form instance to the Form component
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          borderRadius: "8px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit} // Pass handleSubmit as the onFinish callback
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex row">
          <Form.Item
            label="Saller Name"
            name="sallerName" // Corrected field name
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
            label="Saller Description" // Corrected label
            name="sallerDescription"
            rules={[
              {
                required: true,
                message: "Please input your saller description!",
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
