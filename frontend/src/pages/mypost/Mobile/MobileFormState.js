// MobileFormState.js

import { useState } from "react";

export const useMobileFormState = () => {
  const [sellerType, setSellerType] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [color, setColor] = useState("");
  const [selectBrand, setSelectBrand] = useState("");
  const [selectModel, setSelectModel] = useState("");
  const [mobileName, setMobileName] = useState("");
  const [condition, setCondition] = useState("");
  const [yearOfPurchase, setYearOfPurchase] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [minimumOrder, setMinimumOrder] = useState("");
  const [price, setPrice] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [serviceMode, setServiceMode] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [googleDriveLink, setGoogleDriveLink] = useState("");
  const [mobileDescription, setMobileDescription] = useState("");
  const [uploadPhotos, setUploadPhotos] = useState([]);
  const [uploadVideo, setUploadVideo] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  // Error state variables
  const [sellerTypeError, setSellerTypeError] = useState("");
  const [sellerNameError, setSellerNameError] = useState("");
  const [gstNumberError, setGstNumberError] = useState("");
  const [colorError, setColorError] = useState("");
  const [selectBrandError, setSelectBrandError] = useState("");
  const [selectModelError, setSelectModelError] = useState("");
  const [mobileNameError, setMobileNameError] = useState("");
  const [conditionError, setConditionError] = useState("");
  const [yearOfPurchaseError, setYearOfPurchaseError] = useState("");
  const [availableQuantityError, setAvailableQuantityError] = useState("");
  const [minimumOrderError, setMinimumOrderError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [paymentModeError, setPaymentModeError] = useState("");
  const [serviceModeError, setServiceModeError] = useState("");
  const [enterAddressError, setEnterAddressError] = useState("");
  const [googleDriveLinkError, setGoogleDriveLinkError] = useState("");
  const [mobileDescriptionError, setMobileDescriptionError] = useState("");
  const [uploadPhotosError, setUploadPhotosError] = useState("");
  const [uploadVideoError, setUploadVideoError] = useState("");
  const [uploadFileError, setUploadFileError] = useState("");

  return {
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
  };
};

export const sellerTypeOptions = [
  { value: "Consumer", label: "Consumer" },
  { value: "Retailer", label: "Retailer" },
  { value: "Wholeseller", label: "Wholeseller" },
  { value: "Dealer", label: "Dealer" },
  { value: "Distributor", label: "Distributor" },
  { value: "Exporter", label: "Exporter" },
  { value: "Manufacture", label: "Manufacture" },
];

export const conditionOptions = [
  { value: "Used", label: "Used" },
  { value: "Refurbished", label: "Refurbished" },
  { value: "Brand New", label: "Brand New" },
];

export const paymentModeOptions = [
  { value: "Online", label: "Online" },
  { value: "Cash on Delivery", label: "Cash on Delivery" },
];

export const serviceModeOptions = [
  { value: "Online", label: "Online" },
  { value: "Offline", label: "Offline" },
];
