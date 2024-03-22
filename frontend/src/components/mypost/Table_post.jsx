/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Modal } from "antd";
import "./table.css";
import toast from "react-hot-toast";
import {
  useFetchPaymentMutation,
  useGetUserProductsQuery,
  useVerifyPaymentMutation,
} from "../../redux/API/products/mobile";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDeleteMobileMutation } from "../../redux/API/products/mobile";
import { useAppSelector } from "../../redux/store";
const { confirm } = Modal;
function Table_post({ setTableShow, setEditTable, setId }) {
  const [bordered] = useState(true);
  const [showHeader] = useState(true);
  const [hasData, setHasData] = useState(false);
  const [yScroll] = useState(false);
  const [xScroll] = useState("fixed");
  const [products, setProducts] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [imagesToDisplay, setImagesToDisplay] = useState([]);
  const userData = useAppSelector((state) => state.user2.user);

  // Function to handle opening the modal and setting the images to display
  const handleViewImages = (images) => {
    setImagesToDisplay(images);
    setModalVisible(true);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRow(selectedRows.map((item) => item._id));
    },
  };

  const { isLoading, data } = useGetUserProductsQuery("");
  useEffect(() => {
    if (!isLoading && data) {
      setHasData(true);
      if (data.products) {
        const t = data.products.map((element, index) => {
          const newPropsObj = {
            status: element.status,
            created: element.createdAt,
            update: element.updatedAt,
          };

          return { ...element, data: newPropsObj, key: index };
        });
        setProducts(t);
      }
    }
  }, [isLoading, data]);

  const [deleteMobileMutation] = useDeleteMobileMutation();
  const handleDeleteProduct = async (productId) => {
    // Implement your logic to delete the product with the given productId
    confirm({
      title: "Are you sure you want to delete this product?",
      icon: <ExclamationCircleOutlined />,
      // content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        // Mark the onOk function as async
        try {
          // Implement your logic to delete the product with the given productId
          const response = await deleteMobileMutation(productId);

          // Assuming setProducts is a state updater function
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== productId)
          );

          toast.success("Product deleted successfully");
        } catch (error) {
          console.error("Error deleting product:", error);
          toast.error("Failed to delete product");
        }
      },
    });
  };

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleString("en-US", options);
  }

  const renderdata = (data) => {
    console.log(data);

    const createdAtDate = new Date(
      data.status === false ? data.created : data.update
    );

    if (data.status) {
      createdAtDate.setMonth(createdAtDate.getMonth() + 3);
    } else {
      createdAtDate.setMonth(createdAtDate.getMonth() + 1);
    }

    const formattedDate = createdAtDate.toISOString().slice(0, 19);
    const deadlineDate = formatDate(formattedDate); // Calculate deadline date here
    const timeRemaining = Math.max(0, Date.parse(deadlineDate) - Date.now());
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    return `${days} D ${hours} H ${minutes} M ${seconds} S`;
  };

  useEffect(() => {
    // Function to update countdown every second
    const interval = setInterval(() => {
      setProducts((prevProducts) =>
        prevProducts.map((product) => {
          const timeRemaining = Math.max(
            0,
            Date.parse(product.deadlineDate) - Date.now()
          );
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
          const seconds = Math.floor((timeRemaining / 1000) % 60);
          return {
            ...product,
            countdown: `${days} D ${hours} H ${minutes} M ${seconds} S`,
          };
        })
      );
    }, 1000);
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const columns = [
    {
      title: "S.no",
      dataIndex: "_id",
      width: 50,
      fixed: "left",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Action",
      dataIndex: "Action",
      children: [
        {
          title: "Edit",
          width: 65,
          dataIndex: "_id",
          fixed: "left",
          render: (id) => (
            <>
              <div
                onClick={() => {
                  setId(id);
                  setEditTable(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-eye-edit"
                  style={{ fill: "transparent" }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M11.192 17.966c-3.242 -.28 -5.972 -2.269 -8.192 -5.966c2.4 -4 5.4 -6 9 -6c3.326 0 6.14 1.707 8.442 5.122" />
                  <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
                </svg>
              </div>
            </>
          ),
        },
        {
          title: "Delete",
          width: 65,
          fixed: "left",
          render: (id) => (
            <Button
              icon={<DeleteOutlined />}
              onClick={() => handleDeleteProduct(id._id)} // Call handleDeleteProduct with the product ID
            />
          ),
        },
      ],
    },
    {
      title: "Status",
      dataIndex: "data",
      //render: renderStatusColumn,
      render: (data) => renderdata(data),

      key: "status",
      filters: [
        {
          text: "Public",
          value: "Active",
        },
        {
          text: "Private",
          value: "Inactive",
        },
      ],
      onFilter: (value, record) => record.status === value,
    },

    {
      title: "Type Of Seller",
      dataIndex: "sellerType",
      key: "sellerType",
      filters: [
        {
          text: "Retailer",
          value: "Retailer",
        },
        {
          text: "Wholesaler",
          value: "Wholesaler",
        },
        {
          text: "Consumer",
          value: "Consumer",
        },
        { text: "Manufacturer", value: "Manufacturer" },
        { text: "Distributor", value: "Distributor" },
        { text: "Supplier", value: "Supplier" },
        { text: "Exporter", value: "Exporter" },
      ],
      onFilter: (value, record) => record.sellerType === value,
    },

    {
      title: "Seller Name",
      dataIndex: "sellerName",
      key: "sellerName",
    },
    {
      title: "GST No.",
      dataIndex: "gstNumber",
      key: "gstNumber",
    },
    {
      title: "Item Brand Name",
      dataIndex: "selectBrand",
      render: (item) => {
        if (item && item.brandName) {
          return item.brandName;
        } else {
          return null; // or any default value you want to display when brandName is undefined
        }
      },
      key: "selectBrand",
    },
    {
      title: "Item Model Name",
      dataIndex: "selectModel",
      render: (item) => {
        if (item && item.name) {
          // console.log(item.brandName);
          return item.name;
        } else {
          return null; // or any default value you want to display when brandName is undefined
        }
      },
      key: "selectModel",
    },
    {
      title: "Colour",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Title",
      dataIndex: "mobileName",
      key: "mobileName",
    },
    {
      title: "Description",
      dataIndex: "mobileDescription",
      key: "mobileDescription",
      className: "description-column",
    },

    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
      filters: [
        {
          text: "Used",
          value: "Used",
        },
        {
          text: "Refurbished",
          value: "Refurbished",
        },
        {
          text: "Brand New",
          value: "Brand New",
        },
      ],
      onFilter: (value, record) => record.condition === value,
    },
    {
      title: "Year Of Purchase",
      dataIndex: "yearOfPurchase",
      key: "yearOfPurchase",
    },
    {
      title: "Available Quantity",
      dataIndex: "availableQuantity",
    },
    {
      title: "Minimum Ordered Quantity",
      dataIndex: "minimumOrder",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMode",
      filters: [
        {
          text: "Online",
          value: "Online",
        },
        {
          text: "Cash on Delivery",
          value: "Cash on Delivery",
        },
      ],
      onFilter: (value, record) => record.serviceMode === value,
    },
    {
      title: "Payment Status",
      dataIndex: "status",
      render: (status) => (status ? "Paid" : "Unpaid"),
      filters: [
        { text: "Paid", value: true },
        { text: "Unpaid", value: false },
      ],
      onFilter: (value, record) => record.status === value,
    },

    {
      title: "Service Mode",
      dataIndex: "serviceMode",
      filters: [
        {
          text: "Online",
          value: "Online",
        },
        {
          text: "Offline",
          value: "Offline",
        },
      ],
      onFilter: (value, record) => record.serviceMode === value,
    },
    {
      title: "Mobile No.",
      dataIndex: "enterAddress",
      render: (item) => {
        // console.log(item);
        if (item && Object.keys(item).length > 0) {
          return item[Object.keys(item)[0]].phoneNumber;
        } else {
          return null; // Or any default value you want to return when item is null or undefined
        }
      },
    },
    {
      title: "E-mail",
      dataIndex: "enterAddress",
      className: "description-column",
      render: (item) => {
        // console.log(item);
        if (item && Object.keys(item).length > 0) {
          return item[Object.keys(item)[2]].email;
        } else {
          return null; // Or any default value you want to return when item is null or undefined
        }
      },
      key: "email",
    },

    {
      title: "Address",
      dataIndex: "enterAddress",
      className: "description-column",
      render: (item) => {
        if (!item) return null; // Handle null or undefined item
        const {
          flatHouseNo,
          areaStreetVillage,
          landmark,
          district,
          subDistrict,
          selectedState,
          selectedCountry,
          pincode,
        } = item;
        // Add null check for flatHouseNo
        const flatHouseNoValue = flatHouseNo ? flatHouseNo : "";
        return `${flatHouseNoValue}, ${areaStreetVillage}, ${landmark}, ${subDistrict}, ${district}, ${selectedState},${selectedCountry},${pincode}`;
      },
      key: "enterAddress",
    },
    {
      title: "Google Drive Link",
      dataIndex: "googleDriveLink",
      className: "description-column",
      key: "googleDriveLink",
    },
    {
      title: "Image",
      dataIndex: "images",
      className: "description-column",
      key: "images",

      render: (images) => (
        <Button onClick={() => handleViewImages(images)}>View Images</Button>
      ),
    },
    {
      title: "Video",
      dataIndex: "video",
      key: "video",
      render: (id) => (
        <>
          <Link
            target="_blanck"
            to={`http://localhost:5000/uploads/videos/${id}`}
          >
            View Video
          </Link>
        </>
      ),
    },

    {
      title: "File",
      dataIndex: "file",
      key: "file",
      render: (id) => (
        <>
          {" "}
          <Link
            target="_blanck"
            to={`http://localhost:5000/uploads/files/${id}`}
          >
            View File{" "}
          </Link>
        </>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (createdAt) => {
        return <label>{formatDate(createdAt)}</label>;
      },
    },
  ];

  const renderImagesModal = () => (
    <Modal
      title="Image Gallery"
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      footer={null}
    >
      <>
        <div className="flex">
          {imagesToDisplay && imagesToDisplay.length > 0 && (
            <div>
              {imagesToDisplay.map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                >
                  <img
                    width={200}
                    height={200}
                    style={{ objectFit: "contain" }}
                    src={`http://localhost:5000/uploads/images/${item}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    </Modal>
  );
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({
    ...item,
  }));

  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const tableProps = {
    bordered,
    showHeader,
    scroll,
  };

  // payment method
  const [fetchPaymentQuery] = useFetchPaymentMutation();
  const [verifyPayment] = useVerifyPaymentMutation();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const paymentedProduct =
      products &&
      products.map((item) => {
        if (item.status === true) {
          return item._id;
        }
      });

    const hasMatch = selectedRow.some((item) =>
      paymentedProduct.includes(item)
    );

    if (hasMatch) {
      // At least one ID in selectedRow matches with an ID in paymentedProduct
      toast.error(
        "You have already paid for this product. Please select another product to proceed."
      );
      return;
    }

    if (selectedRow.length === 0) {
      toast.error("Please select a product to proceed");
      return;
    }
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const formdata = {
      productsID: selectedRow,
    };

    const { data } = await fetchPaymentQuery(formdata);

    if (!data) {
      alert("Server error. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_AjDOUl6GpeumxG",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      receipt: data.receipt,
      name: "ZoneHub",
      description: "Thank you for nothing. Please give us some money",
      image:
        "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/361586894_3669385440010177_673264268362134479_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=NEOVieuKC8sAX8AASGL&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBBY6wkPRKddru9fQfL7MzBCFVTfOyM6Y6rmvU7vjnAZg&oe=65D38A80",

      handler: function (response) {
        const responseData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          productID: formdata,
          receipt: data.receipt,
        };
        verifyPayment(responseData)
          .unwrap()
          .then((response) => {
            //  console.log("payment response", response);
            window.location.href = response.redirectUrl;
          })
          .catch((error) => {
            // Handle verification error
            //  console.error("Error:", error);
            window.location.href = response.redirectUrl;
          });
      },
      prefill: {
        name: userData.name,
        email: userData.email,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <div style={{ padding: "0px 45px" }}>
        <Table
          {...tableProps}
          columns={tableColumns}
          dataSource={hasData ? products : []}
          rowSelection={{
            ...rowSelection,
          }}
          scroll={scroll}
          style={{
            marginTop: "50px",
          }}
        />
        {renderImagesModal()}
      </div>

      <div className="row snipcss-JxGSH">
        <div className="container">
          <div className="btn-wrap">
            <a onClick={() => setTableShow(true)} className="btn btn-primary ">
              + Add More
            </a>
            <a className="btn addrows">Publish Posts In Private(Free)</a>
            <button onClick={displayRazorpay} className="btn addrows">
              Publish Posts In Public(Free)
            </button>
            <p className="rightWrap">
              <button className="btn btn-primary mkCta ">
                Delete Posts/Row
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table_post;
