import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { useFetchAllCategoryQuery } from "../../../redux/API/admin/categories";
import { useFetchAllDepartmentQuery } from "../../../redux/API/admin/department";

const SubCategories = ({ onFinish, onFinishFailed, data }) => {
  const [selectedSellerType, setSelectedSellerType] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [form] = Form.useForm(); // Initialize form instance

  const { data: departmentData } = useFetchAllDepartmentQuery(
    selectedSellerType || ""
  );

  const { data: categoriesData } = useFetchAllCategoryQuery(
    selectedDepartment || ""
  );

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
      await onFinish({ ...trimmedValues, subCategoryImage: file });
      // Reset form fields after successful submission
      form.resetFields();
      // Optionally, display a success message
      message.success("Sub Category created successfully");
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
        <h3>Create Sub Category</h3>
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
              style={{
                width: "100%",
              }}
              onChange={(value) => setSelectedSellerType(value)}
              options={
                data &&
                data.map((item) => ({
                  value: item._id,
                  label: item.name,
                }))
              }
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
              onChange={(value) => setSelectedDepartment(value)}
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
              value={selectedCategories}
              style={{
                width: "100%",
              }}
              onChange={(value) => setSelectedCategories(value)}
              options={
                categoriesData &&
                categoriesData.Categories.map((item) => ({
                  value: item._id,
                  label: item.name,
                }))
              }
            />
          </Form.Item>

          <Form.Item
            label="Sub Category Name"
            name="subcategoryName"
            rules={[
              {
                required: true,
                message: "Please input your sub category name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="subCategoryImage"
            label="Sub Category Image"
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
              Create Sub Category
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default SubCategories;
