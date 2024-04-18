/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../Mobile/addMobile.css";
import {
  AutoComplete,
  Button,
  Modal,
  Input,
  Upload,
  message,
  Select,
  Form,
  Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { MinusCircleOutlined } from "@ant-design/icons";
import {
  useCreateMobileMutation,
  useGetAllBrandMutation,
  useGetAllBrandModalMutation,
  useGetUserProductsMutation,
} from "../../../redux/API/products/mobile";
import { useCreateOtherProductMutation } from "../../../redux/API/products/allOtherproduct.js";
import {
  useMobileFormState,
  sellerTypeOptions,
  conditionOptions,
  paymentModeOptions,
  serviceModeOptions,
} from "../Mobile/MobileFormState.js";
import { useUserByIDMutation } from "../../../redux/API/user.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserData,
  setUser,
} from "../../../redux/API/user_slice/user.slice.js";
import {
  useFetchCategoriesBrandQuery,
  useFetchAllBrandModalQuery,
} from "../../../redux/API/admin/brand.js";
import { useCreateProductMutation } from "../../../redux/API/products/mobile";

const { Option } = AutoComplete;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddProduct = ({
  selectedType,
  selecteddepartment,
  selectedcategories,
  selectedsubcategories,
  selectedsubcategoriesitem,
  setTableShow,
}) => {
  const [listBrends, setListBrends] = useState([]);
  const [listBrendsModal, setListBrendsModal] = useState([]);
  const [userByID] = useUserByIDMutation();
  const [allbrands] = useGetAllBrandMutation();
  const [brandModal] = useGetAllBrandModalMutation();
  const [createOtherProductMutation] = useCreateOtherProductMutation();
  const [CreateProductMutation] = useCreateProductMutation();

  const dispatch = useDispatch();

  const token = localStorage.getItem("ZoneHub");
  const userData = useSelector(selectUserData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (!token) {
  //         console.error("Token not available");
  //         return;
  //       }
  //       const { data } = await userByID();

  //       dispatch(setUser(data.user));
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (!token) {
  //         console.error("Token not available");
  //         return;
  //       }
  //       const { data } = await allbrands();
  //       setListBrends(data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(selectedcategories);

  const [selectedBrandid, setSelectBrandid] = useState();
  const { data: brands, isError: brandError } =
    useFetchCategoriesBrandQuery(selectedcategories);
  // console.log(brands);

  const { data: allbrandsmodal, isError: allbrandsError } =
    useFetchAllBrandModalQuery(selectedBrandid);
  const brandList =
    brands &&
    brands.brands.map((element) => {
      const newPropsObj = {
        value: element._id,
        label: element.brandName,
      };

      return { ...element, ...newPropsObj };
    });
  const brandmodalList =
    allbrandsmodal &&
    allbrandsmodal.models.map((element) => {
      const newPropsObj = {
        value: element._id,
        label: element.name,
      };

      return { ...element, ...newPropsObj };
    });
  //  have to push into env file
  //   const executeRecaptcha = useRecaptchaV3(
  //     "6LfplmApAAAAAHnl1aBSiQytt43VT1-SkzeNK1Hc"
  //   );
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

  // console.log(uploadFile);
  // console.log(uploadVideo);
  // console.log(uploadPhotos);

  const handleSubmit = async (values) => {
    // e.preventDefault();
    // console.log("Form values:", values);
    // const recaptchaToken = await executeRecaptcha("addmobile");
    // Reset error messages
    setSellerTypeError("");
    setSellerNameError("");
    setGstNumberError("");
    setColorError("");
    // setSelectBrandError("");
    // setSelectModelError("");
    // setMobileNameError("");
    setConditionError("");
    // setYearOfPurchaseError("");
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
      let isValid = false;

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
      // if (!color) {
      //   setColorError("Color is required");
      //   isValid = false;
      // }

      // Validation for selectBrand
      // if (!selectBrand) {
      //   setSelectBrandError("Brand selection is required");
      //   isValid = false;
      // }

      // Validation for selectModel
      // if (!selectModel) {
      //   setSelectModelError("Model selection is required");
      //   isValid = false;
      // }

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
      // if (!yearOfPurchase) {
      //   setYearOfPurchaseError("Year of purchase is required");
      //   isValid = false;
      // }

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
      if (!uploadPhotos || uploadPhotos.length === 0) {
        setUploadPhotosError("Upload at least one photo");

        isValid = false;
      }

      // if (!beforeUpload(uploadPhotos)) {
      //   isValid = false;
      // }

      // If validation fails, return early
      //   if (!isValid) {
      //     return;
      //   }

      // Extract data from the form state
      const formData = {
        sellerType,
        sellerName,
        gstNumber,
        // color,
        selectBrand,
        // selectModel,
        mobileName,
        condition,
        // yearOfPurchase,
        availableQuantity,
        minimumOrder,
        price,
        paymentMode,
        serviceMode,
        enterAddress,
        googleDriveLink,
        mobileDescription,
        values,
        uploadPhotos,
        uploadVideo,
        uploadFile,
        selectedType,
        selecteddepartment,
        selectedcategories,
        selectedsubcategories,
        selectedsubcategoriesitem,
      };

      // Object.entries(formData).forEach(([key, value]) => {
      //   console.log(`${key}: ${value}`);
      // });
      // Trigger the createMobile mutation
      const result = await CreateProductMutation(formData);
      // Handle the success response
      console.log("Product created successfully:", result);
      message.success("Product created successfully");
      // Reset the form after successful submission
      resetForm();
      setTableShow(false);
    } catch (error) {
      // Handle the error
      console.error("Error creating mobile:", error);
      message.error("Error creating mobile");
    }
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <h4>Add Product</h4>
        {/* <form onSubmit={handleSubmit}> */}

        <Form
          name="dynamic_form_nest_item"
          autoComplete="off"
          onFinish={handleSubmit}
        >
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
                filterOption={true}
                onSelect={(val) => {
                  setSellerType(val);
                  setSellerTypeError("");
                }}
                onSearch={(val) => {
                  console.log(val);
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
                placeholder="Enter Item Name"
                style={{
                  height: 50,
                  width: "100%",
                }}
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
                value={selectBrand}
                filterOption={true}
                onSelect={async (val) => {
                  const selectedBrand = await brandList.find(
                    (item) => item.value === val
                  );
                  const t = selectedBrand ? selectedBrand.label : val;
                  setSelectBrand(t);
                  setSelectBrandid(val);
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
                value={selectModel}
                filterOption={true}
                onSelect={(val) => {
                  const selectedBrand = brandmodalList.find(
                    (item) => item.value === val
                  );
                  const modelName = selectedBrand ? selectedBrand.label : val;

                  setSelectModel(modelName);
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
                onChange={(value) => setEnterAddress(value)}
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
                onChange={(e) => setPrice(e.target.value)}
                type="Number"
              />
              {priceError && <div className="error-message">{priceError}</div>}
            </div>
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
                placeholder="Google Drive Link"
                type="text"
              />
            </div>
          </div>
          <div className="formbold-input-flex">
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
                placeholder="Minimum Order"
                type="Number"
                onChange={(e) => setMinimumOrder(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="formbold-input-flex">
            <div>
              <label htmlFor="Select Brand" className="formbold-form-label">
                Select Brand
              </label>

              <Select
                placeholder="Select Brand"
                style={{
                  height: 50,
                  width: "100%",
                }}
                value={selectBrand}
                filterOption={(inputValue, option) =>
                  option.label
                    .toLowerCase()
                    .indexOf(inputValue.toLowerCase()) !== -1
                }
                onSelect={async (val) => {
                  const selectedBrand = await brandList.find(
                    (item) => item.value === val
                  );
                  const t = selectedBrand ? selectedBrand.label : val;
                  setSelectBrand(t);
                  setSelectBrandid(val);
                }}
                onSearch={(val) => {
                  setSelectBrand(val);
                }}
                options={brandList}
              />

              {yearOfPurchaseError && (
                <div className="error-message">{yearOfPurchaseError}</div>
              )}
            </div>
            <div>
              <label htmlFor="Select Brand" className="formbold-form-label">
                Select Brand Moadl
              </label>

              <Select
                placeholder="Select Brand"
                style={{
                  height: 50,
                  width: "100%",
                }}
                onChange={(e) => setListBrends(e.target.value)}
                options={brandmodalList}
              />

              {yearOfPurchaseError && (
                <div className="error-message">{yearOfPurchaseError}</div>
              )}
            </div>
          </div> */}

          {/*Fifth Row */}
          <div className="formbold-input-flex">
            <div
              style={{
                width: "100%",
              }}
            >
              <label
                htmlFor="Mobile Description"
                className="formbold-form-label"
              >
                Product Description
              </label>
              <TextArea
                onChange={(e) => setMobileDescription(e.target.value)}
                placeholder="Mobile Description"
                name="productDescription"
                rows={4}
              />
            </div>
          </div>

          {/*Sixth Row */}
          <div className="formbold-input-flex">
            <div
              style={{
                width: "100%",
              }}
            >
              <label
                htmlFor="Color"
                className="formbold-form-label"
                style={{ marginBottom: "10px" }}
              >
                Add Other Field
              </label>

              <Form.List name="otherfeature">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          width: "100%",
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Title ",
                            },
                          ]}
                        >
                          <Input placeholder="Title" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Value",
                            },
                          ]}
                        >
                          <Input placeholder="Value /Discription " />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
          </div>

          {/*Seventh Row */}
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
              name="uploadPhotos"
              accept=".jpeg,.png,.jpg,.webp"
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

          {/*Eight Row */}
          <div className="formbold-form-file-flex">
            <label htmlFor=" Upload Video" className="formbold-form-label">
              Upload Video
            </label>
            <Upload name="video" {...videoprops} accept="video/*">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <span> Only Accept (.MP4 .HD .4k)</span>
          </div>

          {/*Nine Row */}
          <div
            style={{ marginTop: "10px" }}
            className="formbold-form-file-flex"
          >
            <label htmlFor=" Upload Files" className="formbold-form-label">
              Upload Files
            </label>

            <Upload
              name="file"
              {...fileprops}
              accept=".pdf,.doc,.docx,.xls,.zip,.rar"
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <span> Only Accept (.pdf/ .Doc/ .Xls/.Rar/.Zip)</span>
          </div>
          {/* Tenth Row */}
          <div
            style={{ marginTop: "10px" }}
            className="formbold-form-file-flex"
          >
            <button type="submit" className="formbold-btn">
              Save
            </button>
            <button
              className="formbold-btn"
              onClick={() => setTableShow(false)}
            >
              Cancle
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
