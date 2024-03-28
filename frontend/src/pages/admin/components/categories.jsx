import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { useFetchAllDepartmentQuery } from "../../../redux/API/admin/department";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

const Categories = ({ onFinish, onFinishFailed, data }) => {
  const [selectedSellerType, setSelectedSellerType] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [form] = Form.useForm(); // Initialize form instance

  const { data: departmentData } = useFetchAllDepartmentQuery(
    selectedSellerType || ""
  );

  const handleSellerTypeChange = (value) => {
    setSelectedSellerType(value);
  };

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (values) => {
    try {
      // Trim the values before submitting
      const trimmedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.trim()])
      );

      // Pass form values and categoryImage file to onFinish
      await onFinish({ ...trimmedValues, categoryImage: file });
      // Reset form fields after successful submission
      form.resetFields();
      // Optionally, display a success message
      message.success("Category created successfully");
    } catch (error) {
      // Handle submission error
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
        onFinish={handleSubmit} // Pass handleSubmit as the onFinish callback
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Create Category</h3>
        <div className="flex row">
          <Form.Item
            label="Choose Seller Type"
            name="sellerType"
            rules={[
              {
                required: true,
                message: "Please choose the seller type!",
              },
            ]}
          >
            <Select
              mode="single"
              placeholder="Choose Seller Type"
              value={selectedSellerType}
              onChange={handleSellerTypeChange}
              style={{
                width: "100%",
              }}
              options={data.map((item) => ({
                value: item._id,
                label: item.name,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Choose Department Type"
            name="department"
            rules={[
              {
                required: true,
                message: "Please choose the department!",
              },
            ]}
          >
            <Select
              mode="single"
              placeholder="Choose Department"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              style={{
                width: "100%",
              }}
              options={
                departmentData &&
                departmentData.departments.map((item) => ({
                  value: item._id,
                  label: item.name,
                }))
              }
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
            <Input
              type="file"
              onChange={handleFileChange}
              accept=".png,.jpeg, .jpg"
            />
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
              Create Category
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Categories;
