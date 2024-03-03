import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
const Categories = ({ onFinish, onFinishFailed }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (value) => {
    setSelectedItems(value);
  };
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
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
        <h3>Create Category</h3>
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
            label="Choose Department Type"
            name="department"
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
            label="Category Name"
            name="categoryName"
            rules={[
              {
                required: true,
                message: " Please input your category name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="categoryImage"
            label="Category Image"
            rules={[
              {
                required: true,
                message: "Please input your category image!",
              },
            ]}
          >
            <Input type="file" accept=".png,.jpeg, .jpg" />
          </Form.Item>
        </div>

        <div className="flex row">
          <Form.Item
            label="Category Description"
            name="categoryDescription"
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
              create category
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Categories;
