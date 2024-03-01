/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./addMobile.css";
import {
  AutoComplete,
  Button,
  Modal,
  Input,
  Upload,
  message,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import {
  useCreateMobileMutation,
  useGetAllBrandMutation,
  useGetAllBrandModalMutation,
  useGetUserProductsQuery,
  useEditMobileMutation,
} from "../../../redux/API/products/mobile";
import { Link, useParams } from "react-router-dom";
import {
  useMobileFormState,
  sellerTypeOptions,
  conditionOptions,
  paymentModeOptions,
  serviceModeOptions,
  colores,
} from "./MobileFormState";
// import useRecaptchaV3 from "../../../Hooks/reCaptchaV3/index.js";
import { useUserByIDMutation } from "../../../redux/API/user.js";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";

import {
  selectUserData,
  setUser,
} from "../../../redux/API/user_slice/user.slice.js";
const { Option } = AutoComplete;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const EditMobile = ({ id, setEditTable }) => {
  // const { id } = useParams();
  const [listBrends, setListBrends] = useState([]);
  const [listBrendsModal, setListBrendsModal] = useState([]);
  const [mobile, setMobileData] = useState(null);
  const [userByID] = useUserByIDMutation();
  const { data, isLoading, isError } = useGetUserProductsQuery("");
  const [allbrands] = useGetAllBrandMutation();
  const [brandModal] = useGetAllBrandModalMutation();
  const [editMobileMutation] = useEditMobileMutation();
  const dispatch = useDispatch();
  const token = localStorage.getItem("ZoneHub");
  const {
    sellerType,
    setSellerType,
    sellerName,
    setSellerName,
    gstNumber,
    setGstNumber,
    color,
    setColor,
    selectBrand,
    setSelectBrand,
    selectModel,
    setSelectModel,
    mobileName,
    setMobileName,
    condition,
    setCondition,
    yearOfPurchase,
    setYearOfPurchase,
    availableQuantity,
    setAvailableQuantity,
    minimumOrder,
    setMinimumOrder,
    price,
    setPrice,
    paymentMode,
    setPaymentMode,
    serviceMode,
    setServiceMode,
    enterAddress,
    setEnterAddress,
    googleDriveLink,
    setGoogleDriveLink,
    mobileDescription,
    setMobileDescription,
    uploadPhotos,
    setUploadPhotos,
    uploadVideo,
    setUploadVideo,
    uploadFile,
    setUploadFile,
    previewOpen,
    setPreviewOpen,
    previewImage,
    setPreviewImage,
    previewTitle,
    setPreviewTitle,
    fileList,
    setFileList,
    sellerTypeError,
    setSellerTypeError,
    sellerNameError,
    setSellerNameError,
    gstNumberError,
    setGstNumberError,
    colorError,
    setColorError,
    selectBrandError,
    setSelectBrandError,
    selectModelError,
    setSelectModelError,
    mobileNameError,
    setMobileNameError,
    conditionError,
    setConditionError,
    yearOfPurchaseError,
    setYearOfPurchaseError,
    availableQuantityError,
    setAvailableQuantityError,
    minimumOrderError,
    setMinimumOrderError,
    priceError,
    setPriceError,
    paymentModeError,
    setPaymentModeError,
    serviceModeError,
    setServiceModeError,
    enterAddressError,
    setEnterAddressError,
    googleDriveLinkError,
    setGoogleDriveLinkError,
    mobileDescriptionError,
    setMobileDescriptionError,
    uploadPhotosError,
    setUploadPhotosError,
    uploadVideoError,
    setUploadVideoError,
    uploadFileError,
    setUploadFileError,
    addressoption,
    allgstNumber,
  } = useMobileFormState();
  useEffect(() => {
    if (!isLoading && !isError) {
      // Find the mobile product data by ID
      const mobile = data && data.products.find((item) => item._id === id);
      if (mobile) {
        // Extract address information
        const { userName, flatHouseNo, areaStreetVillage, _id } =
          mobile.enterAddress;

        // Construct the address object
        const address = {
          value: _id,
          label: `${userName}, \n ${flatHouseNo} ${areaStreetVillage}`,
        };
        const newObjWithAddress = { ...mobile, address };
        setMobileData(newObjWithAddress);

        // Extract brand information
        const { _id: brandId, name: brandName } = mobile.selectBrand;
        const brand = {
          value: brandId,
          label: brandName,
        };
        const newObjWithBrand = { ...newObjWithAddress, brand };
        setMobileData(newObjWithBrand);

        // Extract model information
        const { _id: modelId, name: modelName } = mobile.selectModel;
        const model = {
          value: modelId,
          label: modelName,
        };
        const newObjWithModel = { ...newObjWithBrand, model };
        setMobileData(newObjWithModel);
      }
    }
  }, [isLoading, isError, data, id]);

  const [uploadeditimage, setuploadeditimage] = useState([]);
  useEffect(() => {
    if (mobile) {
      setSellerType(mobile.sellerType);
      setSellerName(mobile.sellerName);
      setGstNumber(mobile.gstNumber);
      setColor(mobile.color);
      setSelectBrand(mobile.selectBrand);
      setSelectModel(mobile.selectModel);
      setMobileName(mobile.mobileName);
      setCondition(mobile.condition);
      setYearOfPurchase(mobile.yearOfPurchase);
      setAvailableQuantity(mobile.availableQuantity);
      setMinimumOrder(mobile.minimumOrder);
      setPrice(mobile.price);
      setPaymentMode(mobile.paymentMode);
      setServiceMode(mobile.serviceMode);
      setEnterAddress(mobile.address);
      setGoogleDriveLink(mobile.googleDriveLink);
      setMobileDescription(mobile.mobileDescription);
      setuploadeditimage(mobile.images);
      setUploadVideo(mobile.video);
      setUploadFile(mobile.file);
    }
  }, [mobile]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.error("Token not available");
          return;
        }
        const { data } = await userByID();
        dispatch(setUser(data.user));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.error("Token not available");
          return;
        }
        const { data } = await allbrands();
        setListBrends(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handlebrandModal = async (brandId) => {
    try {
      if (!token) {
        console.error("Token not available");
        return;
      }
      const formdata = {
        brandId: brandId,
      };
      const { data } = await brandModal(formdata);
      setListBrendsModal(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const brandList =
    listBrends &&
    listBrends.map((element) => {
      const newPropsObj = {
        value: element._id,
        label: element.name,
      };

      return { ...element, ...newPropsObj };
    });
  const brandmodalList =
    listBrendsModal &&
    listBrendsModal.map((element) => {
      const newPropsObj = {
        value: element._id,
        label: element.name,
      };

      return { ...element, ...newPropsObj };
    });

  // const executeRecaptcha = useRecaptchaV3(
  //   "6LfplmApAAAAAHnl1aBSiQytt43VT1-SkzeNK1Hc"
  // );

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

  const handleChange = ({ fileList: newFileList }) =>
    setUploadPhotos(newFileList);

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

  const videoprops = {
    name: "video",
    onChange(info) {
      if (info) {
        setUploadVideo(info);
      }
    },
  };
  const fileprops = {
    name: "file", // Make sure the name matches the key in formData
    onChange(info) {
      if (info) {
        setUploadFile(info); // Assuming you have a state for file in your component
      }
    },
  };

  const resetForm = () => {
    // Reset all form fields
    setSellerType("");
    setSellerName("");
    setGstNumber("");
    setColor("");
    setSelectBrand("");
    setSelectModel("");
    setMobileName("");
    setCondition("");
    setYearOfPurchase("");
    setAvailableQuantity("");
    setMinimumOrder("");
    setPrice("");
    setPaymentMode("");
    setServiceMode("");
    setEnterAddress("");
    setGoogleDriveLink("");
    setMobileDescription("");
    setUploadPhotos([]);
    setUploadVideo(null);
    setUploadFile(null);

    // Reset all error messages
    setSellerTypeError("");
    setSellerNameError("");
    setGstNumberError("");
    setColorError("");
    setSelectBrandError("");
    setSelectModelError("");
    setMobileNameError("");
    setConditionError("");
    setYearOfPurchaseError("");
    setAvailableQuantityError("");
    setMinimumOrderError("");
    setPriceError("");
    setPaymentModeError("");
    setServiceModeError("");
    setEnterAddressError("");
    setGoogleDriveLinkError("");
    setMobileDescriptionError("");
    setUploadPhotosError("");
    setUploadVideoError("");
    setUploadFileError("");
  };
  const beforeUpload = (files) => {
    let isValid = true;
    //setUploadFile("");
    files.forEach((file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      const isLt400K = file.size / 1024 < 400;

      if (!isJpgOrPng) {
        setUploadPhotosError("You can only upload JPG/PNG files!");
        isValid = false;
      } else if (!isLt400K) {
        setUploadPhotosError("Image must be smaller than 400KB!");
        isValid = false;
      }
    });

    if (isValid) {
      setUploadPhotosError(""); // Clear the error message if all files pass the validation
    }

    return isValid;
  };
  // console.log(uploadPhotos);
  console.log(enterAddress);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const recaptchaToken = await executeRecaptcha("addmobile");
    // Reset error messages
    setSellerTypeError("");
    setSellerNameError("");
    setGstNumberError("");
    setColorError("");
    setSelectBrandError("");
    setSelectModelError("");
    setMobileNameError("");
    setConditionError("");
    setYearOfPurchaseError("");
    setAvailableQuantityError("");
    setMinimumOrderError("");
    setPriceError("");
    setPaymentModeError("");
    setServiceModeError("");
    setEnterAddressError("");
    setGoogleDriveLinkError("");
    setMobileDescriptionError("");
    setUploadPhotosError("");
    setUploadVideoError("");
    setUploadFileError("");
    try {
      let isValid = true;
      // Validation for sellerType
      if (!sellerType) {
        setSellerTypeError("Seller type is required");
        isValid = false;
      }

      // Validation for sellerName
      if (!sellerName) {
        setSellerNameError("Seller name is required");
        isValid = false;
      }

      // Validation for color
      if (!color) {
        setColorError("Color is required");
        isValid = false;
      }

      // Validation for selectBrand
      if (!selectBrand) {
        setSelectBrandError("Brand selection is required");
        isValid = false;
      }

      // Validation for selectModel
      if (!selectModel) {
        setSelectModelError("Model selection is required");
        isValid = false;
      }

      // Validation for mobileName
      if (!mobileName) {
        setMobileNameError("Mobile name is required");
        isValid = false;
      }

      // Validation for condition
      if (!condition) {
        setConditionError("Condition is required");
        isValid = false;
      }

      // Validation for yearOfPurchase
      if (!yearOfPurchase) {
        setYearOfPurchaseError("Year of purchase is required");
        isValid = false;
      }

      // Validation for availableQuantity
      if (!availableQuantity) {
        setAvailableQuantityError("Available quantity is required");
        isValid = false;
      }

      // Validation for minimumOrder
      if (!minimumOrder) {
        setMinimumOrderError("Minimum order is required");
        isValid = false;
      }

      // Validation for price
      if (!price) {
        setPriceError("Price is required");
        isValid = false;
      }

      // Validation for paymentMode
      if (!paymentMode) {
        setPaymentModeError("Payment mode is required");
        isValid = false;
      }

      // Validation for serviceMode
      if (!serviceMode) {
        setServiceModeError("Service mode is required");
        isValid = false;
      }

      // Validation for enterAddress
      if (!enterAddress) {
        setEnterAddressError("Enter address is required");
        isValid = false;
      }

      // Validation for uploadPhotos
      if (
        !uploadPhotos ||
        uploadPhotos.length === 0 ||
        !uploadeditimage ||
        uploadeditimage.length === 0
      ) {
        setUploadPhotosError("Upload at least one photo");
        isValid = false;
      }
      const totalimagelngth = uploadPhotos.length + uploadeditimage.length;
      if (!uploadPhotos || totalimagelngth > 6) {
        setUploadPhotosError("Upload only 6  photos");
        isValid = false;
      }

      // If validation fails, return early
      if (!isValid) {
        toast.error("Please fill all the required fields");
        return;
      }

      // Extract data from the form state
      const formData = {
        sellerType,
        sellerName,
        gstNumber,
        color,
        selectBrand,
        selectModel,
        mobileName,
        condition,
        yearOfPurchase,
        availableQuantity,
        minimumOrder,
        price,
        paymentMode,
        serviceMode,
        enterAddress,
        googleDriveLink,
        mobileDescription,
        uploadPhotos,
        uploadeditimage,
        uploadVideo,
        uploadFile,
      };
      console.log(selectBrand);

      // Object.entries(formData).forEach(([key, value]) => {
      //   console.log(`${key}: ${value}`);
      // });
      // return;
      // Trigger the createMobile mutation
      const result = await editMobileMutation(formData);
      console.log(result);
      // Handle the success response

      message.success("Mobile created successfully");

      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      // Handle the error
      console.error("Error creating mobile:", error);
      message.error("Error creating mobile");
    }
  };

  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleDelete = (index) => {
    const updatedPhotos = uploadeditimage.filter((_, i) => i !== index);
    setuploadeditimage(updatedPhotos);
  };
  // console.log("uploadeditimage", uploadeditimage);
  return (
    <div className="  formbold-main-wrapper">
      <div className=" formbold-form-wrapper">
        <h4>Edit Mobile</h4>
        <form onSubmit={handleSubmit}>
          {/* First row */}
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="sellertype" className="formbold-form-label">
                Type Of Seller
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Choose Seller name"
                options={sellerTypeOptions}
                value={sellerType}
                filterOption={true}
                onSelect={(val) => {
                  setSellerType(val);
                  setSellerTypeError("");
                }}
                onSearch={(val) => {
                  // console.log(val);
                }}
              />
              {/* Display error message */}
              {sellerTypeError && (
                <div className="error-message">{sellerTypeError}</div>
              )}
            </div>
            <div>
              <label htmlFor="SellerName" className="formbold-form-label">
                Seller Name
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter sallername"
                filterOption={true}
                value={sellerName}
                onSelect={(val) => {
                  setSellerName(val);
                }}
                onSearch={(val) => {
                  setSellerName(val);
                }}
              />
              {sellerNameError && (
                <div className="error-message">{sellerNameError}</div>
              )}
            </div>
            <div>
              <label htmlFor="SellerName" className="formbold-form-label">
                GST Number
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter GST Number"
                options={allgstNumber}
                value={gstNumber}
                filterOption={true}
                onSelect={(val) => {
                  setGstNumber(val);
                }}
                onSearch={(val) => {
                  setGstNumber(val);
                }}
              />
            </div>
            <div>
              <label htmlFor="Color" className="formbold-form-label">
                Enter Item Name
              </label>
              <AutoComplete
                placeholder="Enter Mobile Name"
                style={{
                  height: 50,
                  width: "100%",
                }}
                value={mobileName}
                onChange={(value) => setMobileName(value)}
              />
              {mobileNameError && (
                <div className="error-message">{mobileNameError}</div>
              )}
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
                options={brandList}
                value={selectBrand.name}
                filterOption={true}
                onSelect={async (val) => {
                  const selectedBrand = await brandList.find(
                    (item) => item.value === val
                  );

                  const t = selectedBrand ? selectedBrand.label : val;

                  const f = {
                    name: t,
                    _id: val,
                  };
                  setSelectBrand(f);
                  handlebrandModal(val);
                }}
                onSearch={(val) => {
                  setSelectBrand(val);
                }}
              />
              {selectBrandError && (
                <div className="error-message">{selectBrandError}</div>
              )}
            </div>
            <div>
              <label htmlFor="SellerName" className="formbold-form-label">
                Select Model Name
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Model Name"
                options={brandmodalList}
                value={selectModel.name}
                filterOption={true}
                onSelect={(val) => {
                  const selectedBrand = brandmodalList.find(
                    (item) => item.value === val
                  );
                  const modelName = selectedBrand ? selectedBrand.label : val;
                  const f = {
                    _id: val,
                    name: modelName,
                  };

                  setSelectModel(f);
                }}
                onSearch={(val) => {
                  setSelectModel(val);
                }}
              />

              {selectModelError && (
                <div className="error-message">{selectModelError}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="Enter Address "
                className="formbold-form-label"
                style={{ marginBottom: "10px" }}
              >
                Enter Address
              </label>
              <Select
                placeholder="Enter Address "
                style={{
                  height: 50,
                  width: "100%",
                }}
                value={enterAddress}
                onChange={(value) => {
                  const f = {
                    value: value,
                    //  we need as objet with label and value
                  };
                  setEnterAddress(f);
                }}
                options={addressoption}
              />
              {enterAddressError && (
                <div className="error-message">{enterAddressError}</div>
              )}
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
                placeholder="Select Condition"
                style={{
                  height: 50,
                  width: "100%",
                }}
                value={condition}
                onChange={(value) => setCondition(value)}
                options={conditionOptions}
              />
              {conditionError && (
                <div className="error-message">{conditionError}</div>
              )}
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

              <Input
                placeholder="Year of Purchase"
                style={{
                  height: 50,
                }}
                value={yearOfPurchase}
                onChange={(e) => setYearOfPurchase(e.target.value)}
              />
              {yearOfPurchaseError && (
                <div className="error-message">{yearOfPurchaseError}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="Available Quanitity"
                className="formbold-form-label"
                style={{ marginBottom: "10px" }}
              >
                Available Quanitity
              </label>
              <Input
                style={{
                  height: 50,
                }}
                value={availableQuantity}
                placeholder="Available Quantity"
                onChange={(e) => setAvailableQuantity(e.target.value)}
              />
              {availableQuantityError && (
                <div className="error-message">{availableQuantityError}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="Minimum Order"
                className="formbold-form-label"
                style={{ marginBottom: "10px" }}
              >
                Minimum Order
              </label>
              <Input
                style={{
                  height: 50,
                }}
                value={minimumOrder}
                placeholder="Minimum Order"
                type="Number"
                onChange={(e) => setMinimumOrder(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="Price"
                className="formbold-form-label"
                style={{ marginBottom: "10px" }}
              >
                Price
              </label>
              <Input
                style={{
                  height: 50,
                }}
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="Number"
              />
              {priceError && <div className="error-message">{priceError}</div>}
            </div>
          </div>
          {/* forth Row */}
          <div className="formbold-input-flex">
            <div>
              <label
                htmlFor="Payment Mode"
                className="formbold-form-label"
                style={{ marginBottom: "10px" }}
              >
                Payment Mode
              </label>
              <Select
                placeholder="Payment Mode"
                style={{
                  height: 50,
                  width: "100%",
                }}
                value={paymentMode}
                onChange={(value) => setPaymentMode(value)}
                options={paymentModeOptions}
              />
              {paymentModeError && (
                <div className="error-message">{paymentModeError}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="Service Mode"
                style={{ marginBottom: "10px" }}
                className="formbold-form-label"
              >
                Service Mode
              </label>
              <Select
                placeholder="Service Mode"
                style={{
                  height: 50,
                  width: "100%",
                }}
                value={serviceMode}
                onChange={(value) => setServiceMode(value)}
                options={serviceModeOptions}
              />
              {serviceModeError && (
                <div className="error-message">{serviceModeError}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="Google Drive Link"
                className="formbold-form-label"
                style={{ marginBottom: "10px" }}
              >
                Google Drive Link
              </label>
              <Input
                style={{
                  height: 50,
                }}
                onChange={(e) => setGoogleDriveLink(e.target.value)}
                value={googleDriveLink}
                placeholder="Google Drive Link"
                type="text"
              />
            </div>
          </div>
          {/*Fifth Row */}
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="Color" className="formbold-form-label">
                Color
              </label>
              <AutoComplete
                style={{ width: 300, height: 50 }}
                placeholder="Enter Color Name"
                options={colores}
                filterOption={true}
                value={color}
                onSelect={(val) => {
                  setColor(val);
                }}
                onSearch={(val) => {
                  setColor(val);
                }}
              />
              {colorError && <div className="error-message">{colorError}</div>}
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <label
                htmlFor="Mobile Description"
                className="formbold-form-label"
              >
                Mobile Description
              </label>
              <TextArea
                onChange={(e) => setMobileDescription(e.target.value)}
                placeholder="Mobile Description"
                value={mobileDescription}
                rows={4}
              />
            </div>
          </div>
          {/*Sixth Row */}
          <span> Only Accept (.jpeg .png .jpg)</span>
          <div className="formbold-form-file-flex">
            <label htmlFor=" Upload Photos" className="formbold-form-label">
              Upload Photos
            </label>

            {uploadPhotosError && (
              <div className="error-message">{uploadPhotosError}</div>
            )}

            <Upload
              listType="picture-card"
              fileList={uploadPhotos}
              onPreview={handlePreview}
              onChange={handleChange}
              multiple
              maxCount={6}
              name="uploadPhotos"
              accept=".jpeg,.png,.jpg,.webp"
            >
              {fileList.length >= 6 ? null : uploadButton}
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

          <div className="flex row">
            {uploadeditimage && uploadeditimage.length > 0 && (
              <div>
                {uploadeditimage.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      width={100}
                      height={100}
                      style={{ objectFit: "contain" }}
                      src={`http://localhost:5000/uploads/images/${item}`} // Assuming item is an object with a 'name' property
                      alt={item.name} // Adding an alt attribute for accessibility
                    />
                    {hoverIndex === index && (
                      <div
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <DeleteOutlined onClick={() => handleDelete(index)} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/*Seventh Row */}
          <div className="formbold-form-file-flex">
            <label htmlFor=" Upload Video" className="formbold-form-label">
              Upload Video
            </label>

            {uploadVideo && !uploadVideo.fileList && (
              <div>
                <label>{uploadVideo}</label>
              </div>
            )}

            {uploadVideo && !uploadVideo.fileList && (
              <>
                <div>
                  <Button
                    onClick={() => setUploadVideo("")}
                    icon={<DeleteOutlined />}
                  />
                </div>
                <Link
                  target="_blank"
                  to={`http://localhost:5000/uploads/videos/${uploadVideo}`}
                >
                  Download
                </Link>
              </>
            )}

            <Upload name="video" {...videoprops} accept="video/*">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <span> Only Accept (.MP4 .HD .4k)</span>
          </div>

          {/*Eight Row */}
          <div
            style={{ marginTop: "10px" }}
            className="formbold-form-file-flex"
          >
            <label htmlFor=" Upload Files" className="formbold-form-label">
              Upload Files
            </label>

            {uploadFile && !uploadFile.fileList && (
              <div>
                <label>{uploadFile}</label>
              </div>
            )}

            {uploadFile && !uploadFile.fileList && (
              <>
                <div>
                  <Button
                    onClick={() => setUploadFile("")}
                    icon={<DeleteOutlined />}
                  />
                </div>
                <Link
                  target="_blank"
                  to={`http://localhost:5000/uploads/files/${uploadFile}`}
                >
                  Download
                </Link>
              </>
            )}

            <Upload
              name="file"
              {...fileprops}
              accept=".pdf,.doc,.docx,.xls,.zip,.rar"
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <span> Only Accept (.pdf/ .Doc/ .Xls/.Rar/.Zip)</span>
          </div>
          {/*Nine Row */}
          <div
            style={{ marginTop: "10px" }}
            className="formbold-form-file-flex  gap-5"
          >
            <button
              type="submit"
              className="formbold-btn"
              style={{ width: "15%" }}
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditTable(false)}
              className="formbold-btn"
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMobile;
