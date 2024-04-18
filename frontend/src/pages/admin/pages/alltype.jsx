import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal, Form } from "antd";
import Highlighter from "react-highlight-words";
import { Layout, theme } from "antd";
import AdminFooter from "../components/common/footer";
import Adminsidebar from "../components/common/sidebar";
import Adminheader from "../components/common/header";
import {
  useCreateSallerTypeMutation,
  useFetchAllSallerTypeQuery,
} from "../../../redux/API/admin/saller";
import { debounce } from "lodash";
import SallerType from "../components/sallertype";
const { Content } = Layout;

const TypeList = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(null);
  const [isAddTypeModalVisible, setIsAddTypeModalVisible] = useState(false); // Add state variable for Add Type modal
  const { isLoading, data, refetch } = useFetchAllSallerTypeQuery();

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  // const debouncedSearch = useRef(debounce(handleSearch, 300)).current;

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
      close,
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
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
      title: "Type name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      ...getColumnSearchProps("desc"),
      sorter: (a, b) => a.desc.length - b.desc.length,
      sortDirections: ["descend", "ascend"],
    },
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

  const [pagination, setPagination] = useState({ current: 1, pageSize: 7 });

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  const handleEdit = (record) => {
    setEditRecord(record);
    setIsEditModalVisible(true);
  };

  const handleDelete = (record) => {
    setDeleteRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleSaveEdit = (record) => {
    console.log("Save edited record:", record);
    setIsEditModalVisible(false);
  };

  const handleConfirmDelete = (record) => {
    console.log("Delete confirmed for record:", record);
    setIsDeleteModalVisible(false);
  };

  const handleAddType = () => {
    setIsAddTypeModalVisible(true);
  };
  const [sallerType, setSallerType] = useState([]);
  const [createSallerType] = useCreateSallerTypeMutation();

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

      setIsAddTypeModalVisible(false); // Close the modal
      refetch(); // Refetch the list of types
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
        <Adminheader />
        <Content style={{ margin: "24px 16px 0" }}>
          <Button type="primary" onClick={handleAddType}>
            Add Type
          </Button>
          <Table
            columns={columns}
            dataSource={data && data.SellerTypes}
            pagination={pagination}
            onChange={handleTableChange}
          />
          <Modal
            title="Edit Record"
            visible={isEditModalVisible}
            onCancel={() => setIsEditModalVisible(false)}
            footer={null}
          >
            {editRecord && (
              <div>
                <p>Name: {editRecord.name}</p>
                <p>Description: {editRecord.desc}</p>
                <Button onClick={() => setIsEditModalVisible(false)}>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  onClick={() => handleSaveEdit(editRecord)}
                >
                  Save
                </Button>
              </div>
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
                <p>Are you sure you want to delete this record?</p>
                <p>Name: {deleteRecord.name}</p>
                <p>Description: {deleteRecord.desc}</p>
                <Button onClick={() => setIsDeleteModalVisible(false)}>
                  Cancel
                </Button>
                <Button
                  type="danger"
                  onClick={() => handleConfirmDelete(deleteRecord)}
                >
                  Confirm Delete
                </Button>
              </div>
            )}
          </Modal>
          <Modal
            title="Add Type"
            visible={isAddTypeModalVisible}
            onCancel={() => setIsAddTypeModalVisible(false)}
            footer={null}
          >
            <SallerType
              onFinish={handleSallerTypeFinish}
              onFinishFailed={handleFinishFailed}
            />
          </Modal>
        </Content>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default TypeList;
