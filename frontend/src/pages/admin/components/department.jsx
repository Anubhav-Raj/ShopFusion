import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { useFetchAllDepartmentQuery } from "../../../redux/API/admin/department";

const Department = ({ onFinish, onFinishFailed, data }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [file, setFile] = useState(null);
  const [form] = Form.useForm(); // Initialize form instance

  const handleSelectChange = (value) => {
    setSelectedItems(value);
  };

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

      // Pass form values and departmentImage file to onFinish
      await onFinish({ ...trimmedValues, departmentImage: file });
      // Reset form fields after successful submission
      form.resetFields();
      // Optionally, display a success message
      message.success("Department created successfully");
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
          // maxWidth: "50%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          borderRadius: "8px",
          // width: "45%",
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
            label="Choose Seller Type"
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
              placeholder="Choose Seller Type"
              value={selectedItems}
              onChange={handleSelectChange}
              style={{
                width: "100%",
              }}
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
            label="Department Image"
            name="departmentImage"
            rules={[
              {
                required: true,
                message: "Please input your Department image!",
              },
            ]}
          >
            <input
              type="file"
              accept=".png,.jpeg,.jpg"
              onChange={handleFileChange}
            />
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
