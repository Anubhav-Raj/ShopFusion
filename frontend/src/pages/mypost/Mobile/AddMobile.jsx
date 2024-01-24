import React, { useState } from "react";
import { Input, Select } from "../../../components/Input";
import "./addMobile.css";
import { AutoComplete, Button, Modal, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = AutoComplete;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddMobile = () => {
  const options = [
    { value: "Consumer", label: "Consumer" },
    { value: "Retailer", label: "Retailer" },
    { value: "Wholeseller", label: "Wholeseller" },
    { value: "Dealer", label: "Dealer" },
    { value: "Distributor", label: "Distributor" },
    { value: "Exporter", label: "Exporter" },
    { value: "Manufacture", label: "Manufacture" },
  ];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <h4>Add Mobile</h4>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="sellertype" className="formbold-form-label">
                Type Of Seller
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Choose Seller name"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
            <div>
              <label htmlFor="SellerName" className="formbold-form-label">
                Seller Name
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter sallername"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
            <div>
              <label htmlFor="SellerName" className="formbold-form-label">
                GST Number
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter GST Number"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
            <div>
              <label htmlFor="Color" className="formbold-form-label">
                Color
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Color Name"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
          </div>
          {/* Second row */}
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="SellerName" className="formbold-form-label">
                Select Brand
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Brand"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
            <div>
              <label htmlFor="SellerName" className="formbold-form-label">
                Select Model Name
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Model Name"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
            <div>
              <label htmlFor="Color" className="formbold-form-label">
                Enter Mobile Name
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Mobile Name"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="mobilename"
                className="formbold-form-label"
                style={{ margin: 0 }}
              >
                Condition
              </label>
              <Select
                defaultValue="lucy"
                placeholder="Select Condition"
                style={{
                  width: 120,
                }}
                //onChange={handleChange}
                options={options}
              />
            </div>
          </div>

          {/* third Row  */}
          <div className="formbold-input-flex">
            <div>
              <label
                htmlFor=" Year of Purchase"
                className="formbold-form-label"
              >
                Year of Purchase
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Year of Purchase"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="Available Quanitity"
                className="formbold-form-label"
                style={{ margin: 0 }}
              >
                Available Quanitity
              </label>
              <Input placeholder="Available Quanitity" type="Number" />
            </div>
            <div>
              <label
                htmlFor="Minimum Order"
                className="formbold-form-label"
                style={{ margin: 0 }}
              >
                Minimum Order
              </label>
              <Input placeholder="Minimum Order" type="Number" />
            </div>
            <div>
              <label
                htmlFor="Price"
                className="formbold-form-label"
                style={{ margin: 0 }}
              >
                Price
              </label>
              <Input placeholder="Price" type="Number" />
            </div>
          </div>

          {/* forth Row */}
          <div className="formbold-input-flex">
            <div>
              <label
                htmlFor="Payment Mode"
                className="formbold-form-label"
                style={{ margin: 0 }}
              >
                Payment Mode
              </label>
              <Select
                placeholder="Payment Mode"
                style={{
                  width: 120,
                }}
                //onChange={handleChange}
                options={options}
              />
            </div>
            <div>
              <label htmlFor="Service Mode" className="formbold-form-label">
                Service Mode
              </label>
              <Select
                placeholder="Service Mode"
                style={{
                  width: 120,
                }}
                //onChange={handleChange}
                options={options}
              />
            </div>
            <div>
              <label htmlFor="Enter Email" className="formbold-form-label">
                Enter Email
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Email"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
            <div>
              <label htmlFor=" Enter Address " className="formbold-form-label">
                Enter Address
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Address"
                options={options}
                filterOption={true}
                onSelect={(val) => {
                  console.log(val);
                }}
                onSearch={(val) => {
                  console.log(val);
                }}
              />
            </div>
          </div>
          {/*Fifth Row */}
          <div className="formbold-input-flex">
            <div>
              <label
                htmlFor="Google Drive Link"
                className="formbold-form-label"
                style={{ margin: 0 }}
              >
                Google Drive Link
              </label>
              <Input placeholder="Google Drive Link" type="text" />
            </div>
            <div>
              <label
                htmlFor="Mobile Description"
                className="formbold-form-label"
              >
                Mobile Description
              </label>
              <TextArea placeholder="Mobile Description" rows={4} />
            </div>
          </div>

          <div className="formbold-form-file-flex">
            <label htmlFor=" Upload Photos" className="formbold-form-label">
              Upload Photos
            </label>
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              multiple
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </div>

          <div className="formbold-form-file-flex">
            <label htmlFor=" Upload Video" className="formbold-form-label">
              Upload Video
            </label>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
          <button className="formbold-btn">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default AddMobile;
