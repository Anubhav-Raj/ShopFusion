import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${process.env.LIVE_BACKENDAPI}api/product/`;
const token = localStorage.getItem("ZoneHub");

export const OtherProductAPI = createApi({
  reducerPath: "OtherProductAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["productPost"],
  endpoints: (builder) => ({
    createOtherProduct: builder.mutation({
      query: (product) => {
        const formData = new FormData();
        console.log(product);
        formData.append("sellerType", product.sellerType);
        formData.append("sellerName", product.sellerName);
        formData.append("gstNumber", product.gstNumber);
        // formData.append("color", product.color);
        formData.append("selectBrand", product.selectBrand);
        //formData.append("selectModel", product.selectModel);
        formData.append("productName", product.mobileName);
        formData.append("condition", product.condition);
        // formData.append("yearOfPurchase", product.yearOfPurchase);
        formData.append("availableQuantity", product.availableQuantity);
        formData.append("minimumOrder", product.minimumOrder);
        formData.append("price", product.price);
        formData.append("paymentMode", product.paymentMode);
        formData.append("serviceMode", product.serviceMode);
        formData.append("enterAddress", product.enterAddress);
        formData.append("googleDriveLink", product.googleDriveLink);
        formData.append("productDescription", product.mobileDescription);
        formData.append("selectedType", product.selectedType);
        formData.append("selecteddepartment", product.selecteddepartment);
        formData.append("selectedcategories", product.selectedcategories);
        formData.append("selectedsubcategories", product.selectedsubcategories);
        formData.append(
          "selectedsubcategoriesitem",
          product.selectedsubcategoriesitem
        );
        const otherFeatureArray = product.values.otherfeature;
        const otherFeatureString = JSON.stringify(otherFeatureArray);

        formData.append("otherFeature", otherFeatureString);

        // Handle uploadPhotos

        product.uploadPhotos.forEach((photo, index) => {
          formData.append("uploadPhotos", photo.originFileObj);
        });

        // Handle uploadVideo
        if (product.uploadVideo && product.uploadVideo.file) {
          formData.append(
            "uploadVideo",
            product.uploadVideo.file.originFileObj
          );
        }

        // Handle uploadFile
        if (product.uploadFile && product.uploadFile.file) {
          formData.append("uploadFile", product.uploadFile.file.originFileObj);
        }

        for (let pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

        return {
          url: "createproduct",
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["productPost"],
    }),
  }),
});

export const { useCreateOtherProductMutation } = OtherProductAPI;
