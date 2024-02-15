/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Form, Radio, Space, Switch, Table } from "antd";
import "./table.css";
import Trashicon from "./trash-can.png";
import Editicon from "./edit.png";
import CustomCheckbox from "./Costum_checkbox";
import Onoffbutton from "./Onoffbutton";
import AddMobile from "../../pages/mypost/Mobile/AddMobile";

const columns = [
  {
    title: "S.no",
    dataIndex: "S.no",
    width: 80,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Status",
    dataIndex: "Status",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Type Of Seller",
    dataIndex: "Type Of Seller",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Seller Name",
    dataIndex: "Seller Name",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "GST No.",
    dataIndex: "GST No.",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Item Brand Name",
    dataIndex: "Item Brand Name",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Item Model Name",
    dataIndex: "Item Model Name",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Colour",
    dataIndex: "Colour",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "AD Title",
    dataIndex: "AD Title",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "AD Description",
    dataIndex: "AD Description",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Condition",
    dataIndex: "Condition",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Year Of Purchase",
    dataIndex: "Year Of Purchase",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Available Quantity",
    dataIndex: "Available Quantity",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Minimum Ordered Quantity",
    dataIndex: "Minimum Ordered Quantity",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Price",
    dataIndex: "Price",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Payment Method",
    dataIndex: "Payment Method",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Service Mode",
    dataIndex: "Service Mode",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Mobile No.",
    dataIndex: "Mobile No.",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "E-mail",
    dataIndex: "E-mail",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Address",
    dataIndex: "Address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Google Drive Link",
    dataIndex: "Google Drive Link",
    fixed: false,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  // {
  //   title: "Seller Name",
  //   key: "Seller Name",
  //   sorter: true,
  //   render: () => (
  //     <Space size="middle">
  //       <a>Delete</a>
  //       <a>
  //         <Space>
  //           More actions
  //           <DownOutlined />
  //         </Space>
  //       </a>
  //     </Space>
  //   ),
  // },
];

const data = [];
for (let i = 1; i <= 5; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

function Table_post({ setTableShow }) {
  const [bordered] = useState(true);
  const [showHeader] = useState(true);
  const [rowSelection] = useState({});
  const [hasData] = useState(true);
  const [yScroll] = useState(false);
  const [xScroll] = useState("fixed");
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
    rowSelection,
    scroll,
  };

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
          dataSource={hasData ? data : []}
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
            <a href="javascript:;" className="btn addrows">
              Publish Posts In Private(Free)
            </a>
            <a href="javascript:;" className="btn addrows">
              Publish Posts In Public(Free)
            </a>
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
