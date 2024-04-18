import React from "react";
import { Layout, theme } from "antd";
import AdminFooter from "../components/common/footer";
import Adminsidebar from "../components/common/sidebar";
import Adminheader from "../components/common/header";
const { Header, Content } = Layout;
const AdminDashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Adminsidebar />
        <Layout>
          <Adminheader />
          <Content style={{ margin: "24px 16px 0" }}>
            <h1> Welcome To ZoneHub </h1>
          </Content>
          <AdminFooter />
        </Layout>
      </Layout>
    </>
  );
};

export default AdminDashboard;
