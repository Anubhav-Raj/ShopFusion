import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Categories from "../components/categories";
import SallerType from "../components/sallertype";
import SubCategories from "../components/subcategories";
import Department from "../components/department";
import Items from "../components/item";
import { useCreateSallerTypeMutation } from "../../../redux/API/admin/saller";
import { useCreateCategoryMutation } from "../../../redux/API/admin/categories";
import { useCreateDepartmentMutation } from "../../../redux/API/admin/department";
import { useCreateSubCategoriesMutation } from "../../../redux/API/admin/subcategories";
import { useCreateItemMutation } from "../../../redux/API/admin/item";

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [createSallerType] = useCreateSallerTypeMutation();
  const [createCategory] = useCreateCategoryMutation();
  const [createDepartment] = useCreateDepartmentMutation();
  const [createSubCategories] = useCreateSubCategoriesMutation();
  const [createItem] = useCreateItemMutation();

  const handleSallerTypeFinish = async (values) => {
    try {
      // Validate values before making the API call
      if (!values.SallerName || !values.sallerDescription) {
        throw new Error("Saller type and description are required.");
      }

      // Make the API call to create saller type
      const response = await createSallerType(values);

      // Check if the API call was successful
      if (response.error) {
        throw new Error(response.error.message); // Handle specific API errors
      }

      // Log the successful response
      console.log("Saller type created successfully:", response.data);
    } catch (error) {
      // Log and handle errors
      console.error("Error creating saller type:", error.message);
    }
  };

  const handleDepartmentFinish = async (values) => {
    try {
      // Validate values before making the API call
      console.log(values);
      if (
        !values.sallerType ||
        !values.departmentDescription ||
        !values.departmentImage ||
        !values.departmentName
      ) {
        throw new Error("Saller type and description are required.");
      }

      // Make the API call to create saller type
      const response = await createDepartment(values);

      // Check if the API call was successful
      if (response.error) {
        throw new Error(response.error.message); // Handle specific API errors
      }

      // Log the successful response
      console.log("Saller type created successfully:", response.data);
    } catch (error) {
      // Log and handle errors
      console.error("Error creating saller type:", error.message);
    }
  };

  const handleCategoriesFinish = async (values) => {
    try {
      // Validate values before making the API call
      if (
        !values.sallerType ||
        !values.department ||
        !values.categoryName ||
        !values.categoryDescription ||
        !values.categoryImage
      ) {
        throw new Error("Saller type and description are required.");
      }

      // Make the API call to create saller type
      const response = await createCategory(values);

      // Check if the API call was successful
      if (response.error) {
        throw new Error(response.error.message); // Handle specific API errors
      }

      // Log the successful response
      console.log("Saller type created successfully:", response.data);
    } catch (error) {
      // Log and handle errors
      console.error("Error creating saller type:", error.message);
    }
  };

  const handleSubCategoriesFinish = async (values) => {
    try {
      // Validate values before making the API call
      if (
        !values.sallerType ||
        !values.department ||
        !values.category ||
        !values.subcategoryName ||
        !values.subcategoryDescription ||
        !values.subCategoryimage
      ) {
        throw new Error("Saller type and description are required.");
      }

      // Make the API call to create saller type
      const response = await createSubCategories(values);

      // Check if the API call was successful
      if (response.error) {
        throw new Error(response.error.message); // Handle specific API errors
      }

      // Log the successful response
      console.log("Saller type created successfully:", response.data);
    } catch (error) {
      // Log and handle errors
      console.error("Error creating saller type:", error.message);
    }
  };

  const handleItemsFinish = async (values) => {
    try {
      // Validate values before making the API call
      if (
        !values.sallerType ||
        !values.category ||
        !values.subCategory ||
        !values.department ||
        !values.itemName ||
        !values.itemImage ||
        !values.itemDescription
      ) {
        throw new Error("Saller type and description are required.");
      }
      // Make the API call to create saller type
      const response = await createItem(values);
      // Check if the API call was successful
      if (response.error) {
        throw new Error(response.error.message); // Handle specific API errors
      }

      // Log the successful response
      console.log("Saller type created successfully:", response.data);
    } catch (error) {
      // Log and handle errors
      console.error("Error creating saller type:", error.message);
    }
  };

  const handleFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 580,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SallerType
              onFinish={handleSallerTypeFinish}
              onFinishFailed={handleFinishFailed}
            />
            <Department
              onFinish={handleDepartmentFinish}
              onFinishFailed={handleFinishFailed}
            />
          </div>
          <div
            style={{
              padding: 24,
              minHeight: 580,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Categories
              onFinish={handleCategoriesFinish}
              onFinishFailed={handleFinishFailed}
            />
            <SubCategories
              onFinish={handleSubCategoriesFinish}
              onFinishFailed={handleFinishFailed}
            />
          </div>
          <div
            style={{
              padding: 24,
              minHeight: 580,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Items
              onFinish={handleItemsFinish}
              onFinishFailed={handleFinishFailed}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
