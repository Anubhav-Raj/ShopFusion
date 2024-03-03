import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

const Department = ({ onFinish, onFinishFailed }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (value) => {
    setSelectedItems(value);
  };

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
        onFinish={(values) => onFinish({ ...values })}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Create Department</h3>
        <div className="flex row">
          <Form.Item
            label="Choose Saller Type"
            name="sallerType"
            rules={[
              {
                required: true,
                message: "Please choose the seller type!",
              },
            ]}
          >
            <Select
              mode="single"
              placeholder="Choose Saller Type"
              value={selectedItems}
              onChange={handleSelectChange}
              style={{
                width: "100%",
              }}
              options={OPTIONS.map((item) => ({
                value: item,
                label: item,
              }))}
            />
          </Form.Item>

          <Form.Item
            label="Department Name"
            name="departmentName"
            rules={[
              {
                required: true,
                message: " Please input your Department name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="departmentImage"
            label="Department Image"
            rules={[
              {
                required: true,
                message: "Please input your Department image!",
              },
            ]}
          >
            <Input type="file" accept=".png,.jpeg, .jpg" />
          </Form.Item>
        </div>

        <div className="flex row">
          <Form.Item
            label="Department Description"
            name="departmentDescription"
            rules={[
              {
                required: true,
                message: "Please input your Department description!",
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
              Create Department
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Department;
