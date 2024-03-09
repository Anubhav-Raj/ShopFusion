import React, { useEffect, useState } from "react";

import { Layout, theme } from "antd";
import Categories from "../components/categories";
import SallerType from "../components/sallertype";
import SubCategories from "../components/subcategories";
import Department from "../components/department";
import Items from "../components/item";
import {
  useCreateSallerTypeMutation,
  useFetchAllSallerTypeQuery,
} from "../../../redux/API/admin/saller";
import { useCreateCategoryMutation } from "../../../redux/API/admin/categories";
import {
  seCreateDepartmentMutation,
  useCreateDepartmentMutation,
} from "../../../redux/API/admin/department";
import { useCreateSubCategoriesMutation } from "../../../redux/API/admin/subcategories";
import { useCreateItemMutation } from "../../../redux/API/admin/item";
import AdminFooter from "../components/common/footer";
import Adminsidebar from "../components/common/sidebar";

const { Header, Content } = Layout;

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [sallerType, setSallerType] = useState([]);
  const [createSallerType] = useCreateSallerTypeMutation();
  const [createCategory] = useCreateCategoryMutation();
  const [createDepartment] = useCreateDepartmentMutation();
  const [createSubCategories] = useCreateSubCategoriesMutation();
  const [createItem] = useCreateItemMutation();
  const { isLoading, data } = useFetchAllSallerTypeQuery();
  useEffect(() => {
    if (data) {
      setSallerType(data && data.SellerTypes);
    }
  }, [isLoading, data]);

  const handleSallerTypeFinish = async (values) => {
    try {
      // Validate values before making the API call
      if (!values.sallerName || !values.sallerDescription) {
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
      console.log(values);
      // Validate values before making the API call
      if (
        !values.sellerType ||
        !values.department ||
        !values.categoryName ||
        !values.categoryDescription ||
        !values.categoryImage
      ) {
        throw new Error("Saller type and description are required.");
      }

      console.log(values);
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
      if (
        !values.sellerType ||
        !values.department ||
        !values.category ||
        !values.subcategoryName ||
        !values.subcategoryDescription ||
        !values.subCategoryImage
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
      <Adminsidebar />
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
              data={sallerType && sallerType}
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
              data={sallerType && sallerType}
            />
            <SubCategories
              onFinish={handleSubCategoriesFinish}
              onFinishFailed={handleFinishFailed}
              data={sallerType && sallerType}
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
              data={sallerType && sallerType}
            />
          </div>
        </Content>

        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
