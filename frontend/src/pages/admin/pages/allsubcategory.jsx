import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { Layout } from "antd";
import AdminFooter from "../components/common/footer";
import Adminsidebar from "../components/common/sidebar";
import Adminheader from "../components/common/header";
import SubcategoryForm from "../../admin/components/subcategories"; // Import the SubcategoryForm component
import { useFetchAllSubcategoryforadminQuery } from "../../../redux/API/admin/subcategories"; // Import the subcategory-related API call
const { Content } = Layout;

const SubcategoryList = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const {
    isLoading: subcategoryLoading,
    data: subcategoryData,
    refetch: subcategoryRefetch,
  } = useFetchAllSubcategoryforadminQuery();
  console.log(subcategoryData);
  useEffect(() => {
    subcategoryRefetch();
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "S.no",
      dataIndex: "_id",
      width: 50,
      fixed: "left",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "10%",
      render: (text, record, index) => (
        <img
          src={`http://localhost:5000/${record.image}`}
          alt="image"
          style={{ width: "50px" }}
        />
      ),
    },
    // Image render here if applicable
    {
      title: "Subcategory Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "No of Product",
      dataIndex: "products",
      key: "noofproduct",
      width: "14%",
      render: (products) => products.length,
      sorter: (a, b) => a.products.length - b.products.length,
      sortDirections: ["descend", "ascend"],
    },
    // Additional columns as needed (e.g., number of products, description)

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record) => {
    setEditRecord(record);
    setIsEditModalVisible(true);
  };

  const handleDelete = (record) => {
    setDeleteRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleAdd = () => {
    setIsAddModalVisible(true);
  };

  return (
    <Layout>
      <Adminsidebar />
      <Layout>
        <Adminheader />
        <Content style={{ margin: "24px 16px 0" }}>
          <Button type="primary" onClick={handleAdd}>
            Add Subcategory
          </Button>
          <Table
            columns={columns}
            dataSource={subcategoryData && subcategoryData.SubCategories}
            rowKey="_id"
          />
          <Modal
            title="Edit Subcategory"
            visible={isEditModalVisible}
            onCancel={() => setIsEditModalVisible(false)}
            footer={null}
          >
            {editRecord && (
              <SubcategoryForm
                initialValues={editRecord}
                onCancel={() => setIsEditModalVisible(false)}
                onSuccess={() => {
                  setIsEditModalVisible(false);
                  subcategoryRefetch();
                }}
              />
            )}
          </Modal>
          <Modal
            title="Confirm Delete"
            visible={isDeleteModalVisible}
            onCancel={() => setIsDeleteModalVisible(false)}
            footer={null}
          >
            {deleteRecord && (
              <div>
                <p>Are you sure you want to delete this subcategory?</p>
                <p>Name: {deleteRecord.name}</p>
                <p>Description: {deleteRecord.description}</p>
                <Button onClick={() => setIsDeleteModalVisible(false)}>
                  Cancel
                </Button>
                {/* Implement delete functionality here */}
              </div>
            )}
          </Modal>
          <Modal
            title="Add Subcategory"
            visible={isAddModalVisible}
            onCancel={() => setIsAddModalVisible(false)}
            footer={null}
          >
            <SubcategoryForm
              onCancel={() => setIsAddModalVisible(false)}
              onSuccess={() => {
                setIsAddModalVisible(false);
                subcategoryRefetch();
              }}
            />
          </Modal>
        </Content>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default SubcategoryList;
