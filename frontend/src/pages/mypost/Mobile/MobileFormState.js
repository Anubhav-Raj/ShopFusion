// MobileFormState.js

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../../redux/API/user_slice/user.slice";
import { useAllAddressQuery } from "../../../redux/API/products/profile";

export const useMobileFormState = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const { data: addresses } = useAllAddressQuery("");
  const addressoption =
    addresses &&
    addresses.address
      .filter(
        (element) =>
          element.phoneNumber.isVerified &&
          element.altNumber.isVerified &&
          element.email.isVerified
      )
      .map((element) => ({
        value: element._id,
        label: `${element.userName}, \n ${element.flatHouseNo} ${element.areaStreetVillage}`,
      }));

  const allgstNumber =
    addresses &&
    addresses.address.map((element) => {
      const newPropsObj = {
        value: element.gstNumber,
        label: element.gstNumber,
      };

      return { ...element, ...newPropsObj };
    });

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
    addressoption,
    allgstNumber,
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

export const colores = [
  { value: "Red", label: "Red" },
  { value: "Blue", label: "Blue" },
  { value: "Green", label: "Green" },
  { value: "Yellow", label: "Yellow" },
  { value: "Orange", label: "Orange" },
  { value: "Purple", label: "Purple" },
  { value: "Pink", label: "Pink" },
  { value: "Black", label: "Black" },
  { value: "White", label: "White" },
  { value: "Gray", label: "Gray" },
  { value: "Brown", label: "Brown" },
  { value: "Beige", label: "Beige" },
  { value: "Cyan", label: "Cyan" },
  { value: "Magenta", label: "Magenta" },
  { value: "Teal", label: "Teal" },
  { value: "Navy", label: "Navy" },
  { value: "Maroon", label: "Maroon" },
  { value: "Olive", label: "Olive" },
  { value: "Lime", label: "Lime" },
  { value: "Indigo", label: "Indigo" },
  { value: "Turquoise", label: "Turquoise" },
  { value: "Lavender", label: "Lavender" },
  { value: "Slate", label: "Slate" },
  { value: "Sky Blue", label: "Sky Blue" },
  { value: "Salmon", label: "Salmon" },
  { value: "Crimson", label: "Crimson" },
  { value: "Violet", label: "Violet" },
  { value: "Gold", label: "Gold" },
  { value: "Silver", label: "Silver" },
  { value: "Bronze", label: "Bronze" },
  { value: "Pearl", label: "Pearl" },
  { value: "Ruby", label: "Ruby" },
  { value: "Emerald", label: "Emerald" },
  { value: "Sapphire", label: "Sapphire" },
  { value: "Amethyst", label: "Amethyst" },
  { value: "Topaz", label: "Topaz" },
  { value: "Opal", label: "Opal" },
  { value: "Aquamarine", label: "Aquamarine" },
  { value: "Peridot", label: "Peridot" },
  { value: "Coral", label: "Coral" },
  { value: "Turquoise", label: "Turquoise" },
  { value: "Copper", label: "Copper" },
  { value: "Platinum", label: "Platinum" },
  { value: "Brass", label: "Brass" },
  { value: "Titanium", label: "Titanium" },
  { value: "Graphite", label: "Graphite" },
];
