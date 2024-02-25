/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import "./table.css";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useGetUserProductsMutation } from "../../redux/API/products/mobile";
import { DeleteOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { loginData } from "../../redux/API/user_slice/login.slice";

function Table_post({ setTableShow }) {
  const token = localStorage.getItem("ZoneHub");
  const userData = useSelector(loginData);
  const [bordered] = useState(true);
  const [showHeader] = useState(true);
  const [hasData] = useState(true);
  const [yScroll] = useState(false);
  const [xScroll] = useState("fixed");
  const [products, setProducts] = useState([]);
  const [getUserProducts] = useGetUserProductsMutation();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [deadlineDate, setDeadlineDate] = useState("Feb 30, 2024");
  const [selectedRow, setSelectedRow] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRow(selectedRows.map((item) => item._id));
    },
  };

  const gettime = () => {
    const time = Date.parse(deadlineDate) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  // useEffect(() => {
  //   const interval = setInterval(() => gettime(deadlineDate), 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const renderStatusColumn = () => {
    return `${days} D ${hours} H ${minutes} M ${seconds} S`;
  };
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await getUserProducts();
        setProducts(response.data.products);
      } catch (error) {
        toast.error("Error fetching Product data");
      }
    };
    FetchData();
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
          title: "View",
          width: 65,
          fixed: "left",
          render: () => <Button icon={<EyeOutlined />} />,
        },
        {
          title: "Edit",
          width: 65,
          fixed: "left",
          render: () => <Button icon={<EditOutlined />} />,
        },
        {
          title: "Delete",
          width: 65,
          fixed: "left",
          render: () => <Button icon={<DeleteOutlined />} />,
        },
      ],
    },

    {
      title: "Status",
      dataIndex: "status",
      // render: (item) => {
      //   // console.log(item);
      //   if (item) {
      //   } else {
      //     setDeadlineDate();
      //   }
      // },
      //render: renderStatusColumn,
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
      render: (item) => Object.values(item)[1],
      key: "selectBrand",
    },
    {
      title: "Item Model Name",
      dataIndex: "selectModel",
      render: (item) => Object.values(item)[1],
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
      render: (item) => item[Object.keys(item)[0]].phoneNumber,
    },
    {
      title: "E-mail",
      dataIndex: "enterAddress",
      className: "description-column",
      render: (item) => item[Object.keys(item)[2]].email,
      key: "email",
    },

    {
      title: "Address",
      dataIndex: "enterAddress",
      className: "description-column",
      render: (item) => {
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
        return `${flatHouseNo}, ${areaStreetVillage}, ${landmark}, ${subDistrict}, ${district}, ${selectedState},${selectedCountry},${pincode}`;
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
    },
    {
      title: "Video",
      dataIndex: "video",
      key: "video",
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
    },
  ];

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
  const baseUrl = "http://localhost:5000/api/payment/";

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
  const __DEV__ = document.domain === "localhost";
  async function displayRazorpay() {
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
    //return console.log("selectedRow", selectedRow);
    const formdata = {
      productsID: selectedRow,
    };
    const data = await fetch(`${baseUrl}productpayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(formdata),
    }).then((t) => t.json());

    console.log(data);
    if (!data) {
      alert("Server error. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_AjDOUl6GpeumxG",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "ZoneHub",
      description: "Thank you for nothing. Please give us some money",
      image:
        "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/361586894_3669385440010177_673264268362134479_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=NEOVieuKC8sAX8AASGL&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBBY6wkPRKddru9fQfL7MzBCFVTfOyM6Y6rmvU7vjnAZg&oe=65D38A80",
      // handler: function (response) {
      //   alert(response.razorpay_payment_id);
      //   alert(response.razorpay_order_id);
      //   alert(response.razorpay_signature);
      // },
      callback_url:
        "http://localhost:5000/api/payment/mobilepaymentverification",
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
      <div
        style={{
          padding: "0px 45px",
        }}
      >
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
