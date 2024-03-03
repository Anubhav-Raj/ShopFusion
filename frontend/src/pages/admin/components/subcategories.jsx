import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
const SubCategories = ({ onFinish, onFinishFailed }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [file, setFile] = useState(null);

  const handleSelectChange = (value) => {
    setSelectedItems(value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
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
        onFinish={(values) => onFinish({ ...values, subCategoryimage: file })}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Create Sub Category</h3>
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
            label="Choose Category Type"
            name="category"
            rules={[
              {
                required: true,
                message: "Please choose the Category type!",
              },
            ]}
          >
            <Select
              mode="single"
              placeholder="Choose Category Type"
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
            label=" Sub Category Name"
            name="subcategoryName"
            rules={[
              {
                required: true,
                message: " Please input your sub category name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="subCategoryimage"
            label="category Image"
            rules={[
              {
                required: true,
                message: "Please choose your sub category image!",
              },
            ]}
          >
            <Input
              type="file"
              onChange={handleFileChange}
              accept=".png,.jpeg, .jpg"
            />
          </Form.Item>
        </div>

        <div className="flex row">
          <Form.Item
            label="Sub Category Description"
            name="subcategoryDescription"
            rules={[
              {
                required: true,
                message: "Please input your sub category description!",
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
              create Sub Category
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default SubCategories;
