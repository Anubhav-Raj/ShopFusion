/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Space,
  Table,
  Modal,
  Form,
  Select,
  message,
} from "antd";
import toast from "react-hot-toast";
import { MinusCircleOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Layout, theme } from "antd";
import AdminFooter from "../components/common/footer";
import Adminsidebar from "../components/common/sidebar";
import Adminheader from "../components/common/header";
import { useFetchAllSallerTypeQuery } from "../../../redux/API/admin/saller";
import { useFetchAllDepartmentQuery } from "../../../redux/API/admin/department";
import { useFetchAllCategoryQuery } from "../../../redux/API/admin/categories";
import { useAllbrandQuery } from "../../../redux/API/admin/brand";
import {
  useCreateBrandMutation,
  useCreateBrandModalMutation,
} from "../../../redux/API/admin/brand";

const { Content } = Layout;
const { Option } = Select;

const data = [
  {
    key: "1",
    name: "Brand 1",
    description: "This is brand 1",
    Brandmodal: "Modal 1",
    Type: "Type 1",
    Departmemt: "Department 1",
    Categories: ["Category 1", "Category 2"],
    Image: "image1.jpg",
  },
  {
    key: "2",
    name: "Brand 2",
    description: "This is brand 2",
    Brandmodal: "Modal 2",
    Type: "Type 2",
    Departmemt: "Department 2",
    Categories: ["Category 2", "Category 3"],
    Image: "image2.jpg",
  },
  {
    key: "3",
    name: "Brand 3",
    description: "This is brand 3",
    Brandmodal: "Modal 3",
    Type: "Type 3",
    Departmemt: "Department 3",
    Categories: ["Category 1", "Category 3"],
    Image: "image3.jpg",
  },
  {
    key: "4",
    name: "Brand 4",
    description: "This is brand 4",
    Brandmodal: "Modal 4",
    Type: "Type 4",
    Departmemt: "Department 4",
    Categories: ["Category 2"],
    Image: "image4.jpg",
  },
];

const BrandList = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  // fetch all Brand
  const {
    data: brands,
    isError,
    isLoading: brandloding,
    isSuccess,
  } = useAllbrandQuery();

  useEffect(() => {
    // console.log(brandloding);
    // if (brandloding === false) {
    //   toast.loading("Fetching all brands...");
    // }
    if (isError) {
      toast.error("Something went wrong! Please try again.");
    }
    if (isSuccess) {
      toast.success("Successfully fetched all brands");
    }
  }, [brandloding]);

  //fetch saller type
  const [sallerType, setSallerType] = useState();
  const { isLoading, data: barnd } = useFetchAllSallerTypeQuery();
  useEffect(() => {
    if (barnd) {
      setSallerType(barnd && barnd.SellerTypes); // Changed 'data' to 'barnd'
    }
  }, [isLoading, barnd]);

  // Fetch Department
  const [selectedType, setSelectedselectedType] = useState();
  const [department, setDepartment] = useState([]);
  const { data: departmentData, isLoading: departmentLoading } =
    useFetchAllDepartmentQuery(selectedType || "");

  useEffect(() => {
    if (departmentData) {
      const modifiedArray = departmentData.departments.map((item) => ({
        ...item,
        newobj: {
          label: item.name,
          value: item._id,
        },
      }));
      const newobjArray = modifiedArray.map((item) => item.newobj);
      setDepartment(newobjArray);
    }
  }, [departmentLoading, selectedType, departmentData]);

  //Categories Fetch
  const [selecteddepartment, setSelecteddepartment] = useState();
  const [allcategories, setAllCategories] = useState([]);
  const { data: categoriesData, isLoading: categoriesLoading } =
    useFetchAllCategoryQuery(selecteddepartment || "");
  useEffect(() => {
    if (categoriesData) {
      const modifiedArray = categoriesData.Categories.map((item) => ({
        ...item,
        newobj: {
          label: item.name,
          value: item._id,
        },
      }));
      const newobjArray = modifiedArray.map((item) => item.newobj);
      setAllCategories(newobjArray);
    }
  }, [categoriesLoading, selecteddepartment, categoriesData]);
  const [selectedcategories, setSelectedcategories] = useState();
  // console.log("selectedcategories", selectedcategories);

  // //SubCategories Fetch
  // const [allsubcategories, setAllSelectedsubcategories] = useState([]);
  // const { data: subcategoriesData, isLoading: subcategoriesLoading } =
  //   useFetchAllSubCategoriesQuery(selectedcategories || "");
  // useEffect(() => {
  //   if (subcategoriesData) {
  //     const modifiedArray = subcategoriesData.SubCategories.map((item) => ({
  //       ...item,
  //       newobj: {
  //         label: item.name,
  //         value: item._id,
  //       },
  //     }));
  //     const newobjArray = modifiedArray.map((item) => item.newobj);
  //     setAllSelectedsubcategories(newobjArray);
  //   }
  // }, [subcategoriesLoading, selectedcategories, subcategoriesData]);

  // // Item Fetch
  // const [selectedsubcategories, setSelectedsubcategories] = useState();
  // const [allsubcategoriesitem, setAllSelectedsubcategoriesitem] = useState([]);

  // const { data: itemData, isLoading: itemLoading } = useFetchAllItemQuery(
  //   selectedsubcategories || ""
  // );
  // useEffect(() => {
  //   if (itemData) {
  //     const modifiedArray = itemData.Items.map((item) => ({
  //       ...item,
  //       newobj: {
  //         label: item.name,
  //         value: item._id,
  //       },
  //     }));
  //     const newobjArray = modifiedArray.map((item) => item.newobj);
  //     setAllSelectedsubcategoriesitem(newobjArray);
  //   }
  // }, [itemLoading, selectedsubcategories, itemData]);
  const [brandID, setbrandID] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal2 = (id) => {
    setIsModalVisible2(true);
    // console.log(id);
    setbrandID(id);
  };
  // console.log(brandID);
  const showModal3 = () => {
    setIsModalVisible3(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setIsModalVisible3(false);
  };

  const searchInput = useRef(null);
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
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
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
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
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
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRows(selectedRows);
  };

  const columns = [
    {
      title: "S.No",
      key: "_id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      key: "brand",
      ...getColumnSearchProps("brand"),
    },
    {
      title: "Brand Modal",
      dataIndex: "Brandmodal",
      key: "brandmodal",
    },

    {
      title: "Categories",
      dataIndex: "category_ID",
      key: "Categories",
      ...getColumnSearchProps("Categories"),
      render: (categories) => (
        <span>
          {categories.map((category) => (
            <span key={category._id}>
              {category.name}
              {categories.indexOf(category) !== categories.length - 1 && ", "}
            </span>
          ))}
        </span>
      ),
    },

    {
      title: "Image",
      dataIndex: "image",
      key: "Image",
      render: (image) => (
        <img
          src={`http://localhost:5000/${image}`}
          alt="Brand Image"
          style={{ width: 50, height: 50 }}
        />
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={showModal3}>
            Edit
          </Button>
          <Button type="danger">Delete</Button>
          <Button type="link" onClick={() => showModal2(record._id)}>
            Add BrandModal
          </Button>
        </Space>
      ),
    },
  ];

  const handleDelete = (record) => {
    const newData = [...data];
    const index = newData.findIndex((item) => record.key === item.key);
    newData.splice(index, 1);
    message.success("Brand deleted successfully");
    data = newData;
  };

  const rowSelection = {
    selectedRows,
    onChange: onSelectChange,
  };

  const [brandFields, setBrandFields] = useState([]);

  const handleAddField = () => {
    setBrandFields([...brandFields, { Brandname: "", brandImage: null }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...brandFields];
    updatedFields.splice(index, 1);
    setBrandFields(updatedFields);
  };

  const handleInputChange = (index, key, value) => {
    const updatedFields = [...brandFields];
    updatedFields[index][key] = value;
    setBrandFields(updatedFields);
  };
  const [CreateBrandMutation] = useCreateBrandMutation();

  const onFinish = async (values) => {
    // console.log("Received values of form:", values);
    const form = {
      brandFields: brandFields,
      department: values.Department,
      categories: values.categories,
      type: values.type,
    };
    try {
      const response = await CreateBrandMutation(form);
      console.log("response", response);
      // Check if the API call was successful
      if (response.error) {
        throw new Error(response.error.message); // Handle specific API errors
      }
      // Log the successful response
      console.log("Brand created successfully:", response.data);
      toast.success("Brand created successfully:", response.data);
    } catch (error) {
      console.error("Error creating Brand:", error.message);
      toast.error("Error creating Brand:", error.message);
    }

    // form.resetFields();
    setIsModalVisible(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // Show error message
    message.error("Failed to create.");
  };
  const [createBrandModal] = useCreateBrandModalMutation();
  const onFinish2 = async (values) => {
    try {
      const from = {
        modalname: values.modalname,
        brandID: brandID,
      };
      const response = await createBrandModal(from);
      if (response.error) {
        throw new Error(response.error.message); // Handle specific API errors
      }
      // Log the successful response
      form.resetFields();
      setIsModalVisible2(false);
      toast.success("Modal created successfully:", response.data);
    } catch (error) {
      console.error("Error creating Brand:", error.message);
      toast.error("Error creating Brand:", error.message);
    }
  };
  const onFinishFailed2 = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // Show error message
    message.error("Failed to create.");
  };

  return (
    <Layout>
      <Adminsidebar />
      <Layout>
        <Adminheader />
        <Content style={{ margin: "24px 16px 0" }}>
          <h4>List Of All Brand</h4>
          <Space style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={showModal}>
              <PlusOutlined /> Add New Brand
            </Button>

            <Button
              type="danger"
              onClick={() => handleDelete(selectedRows)}
              disabled={selectedRows.length === 0}
            >
              Delete Selected
            </Button>
            {/* Add Brand  */}
            <Modal
              title="Add New Brand"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                form={form}
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{
                  maxWidth: 600,
                }}
                autoComplete="off"
              >
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[
                    {
                      required: true,
                      message: "Missing Type",
                    },
                  ]}
                >
                  <Select
                    mode="single"
                    showSearch
                    placeholder="Select Type"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={(value) => setSelectedselectedType(value)}
                    options={
                      sallerType &&
                      sallerType.map((item) => ({
                        value: item._id,
                        label: item.name,
                      }))
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Department"
                  label="Department"
                  rules={[
                    {
                      required: true,
                      message: "Missing Department ",
                    },
                  ]}
                >
                  <Select
                    mode="Single"
                    showSearch
                    placeholder="Select categories"
                    optionFilterProp="children"
                    onChange={(value) => setSelecteddepartment(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    options={department && department}
                  />
                </Form.Item>

                <Form.Item
                  name="categories"
                  label="Categories"
                  rules={[
                    {
                      required: true,
                      message: "Missing Category",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    showSearch
                    placeholder="Select categories"
                    optionFilterProp="children"
                    onChange={(value) => setSelectedcategories(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    options={allcategories && allcategories}
                  />
                </Form.Item>

                <Form.List name="barnd">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }, index) => (
                        <Space
                          key={key}
                          style={{
                            display: "flex",
                            marginBottom: 8,
                          }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "Brandname"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing Brand",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Brand Name"
                              value={brandFields[index]?.Brandname}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Brandname",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "brandImage"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing Image",
                              },
                            ]}
                          >
                            <Input
                              type="file"
                              onChange={(event) => {
                                // Handle the file here
                                const file = event.target.files[0];
                                handleInputChange(index, "brandImage", file);
                              }}
                              placeholder="Select Image"
                            />
                          </Form.Item>
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(name);
                              handleRemoveField(index);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                            handleAddField();
                          }}
                          block
                          icon={<PlusOutlined />}
                        >
                          Add field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            {/* Edit modal  */}
            <Modal
              title="Edit Brand"
              visible={isModalVisible3}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                form={form}
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{
                  maxWidth: 600,
                }}
                autoComplete="off"
              >
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[
                    {
                      required: true,
                      message: "Missing Type",
                    },
                  ]}
                >
                  <Select
                    mode="single"
                    showSearch
                    placeholder="Select Type"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={(value) => setSelectedselectedType(value)}
                    options={
                      sallerType &&
                      sallerType.map((item) => ({
                        value: item._id,
                        label: item.name,
                      }))
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Department"
                  label="Department"
                  rules={[
                    {
                      required: true,
                      message: "Missing Department ",
                    },
                  ]}
                >
                  <Select
                    mode="Single"
                    showSearch
                    placeholder="Select categories"
                    optionFilterProp="children"
                    onChange={(value) => setSelecteddepartment(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    options={department && department}
                  />
                </Form.Item>

                <Form.Item
                  name="categories"
                  label="Categories"
                  rules={[
                    {
                      required: true,
                      message: "Missing Category",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    showSearch
                    placeholder="Select categories"
                    optionFilterProp="children"
                    onChange={(value) => setSelectedcategories(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    options={allcategories && allcategories}
                  />
                </Form.Item>

                <Form.List name="barnd">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }, index) => (
                        <Space
                          key={key}
                          style={{
                            display: "flex",
                            marginBottom: 8,
                          }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "Brandname"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing Brand",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Brand Name"
                              value={brandFields[index]?.Brandname}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Brandname",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "brandImage"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing Image",
                              },
                            ]}
                          >
                            <Input
                              type="file"
                              onChange={(event) => {
                                // Handle the file here
                                const file = event.target.files[0];
                                handleInputChange(index, "brandImage", file);
                              }}
                              placeholder="Select Image"
                            />
                          </Form.Item>
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(name);
                              handleRemoveField(index);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                            handleAddField();
                          }}
                          block
                          icon={<PlusOutlined />}
                        >
                          Add field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            {/* ADD model modal */}
            <Modal
              title="Add Modal"
              visible={isModalVisible2}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                form={form}
                name="dynamic_form_nest_item"
                onFinish={onFinish2}
                onFinishFailed={onFinishFailed2}
                style={{
                  maxWidth: 600,
                }}
                autoComplete="off"
              >
                <Form.Item
                  name="modalname"
                  label="Modal Name"
                  rules={[
                    {
                      required: true,
                      message: "Missing Modal Name",
                    },
                  ]}
                >
                  <Input type="text" placeholder="Enter Model Name" />
                </Form.Item>
                {/* <Form.Item name="brandid" hidden>
                  <Input value={brandID} />
                </Form.Item> */}

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </Space>

          <Table
            columns={columns}
            dataSource={brands && brands.brands}
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
          />
        </Content>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default BrandList;
