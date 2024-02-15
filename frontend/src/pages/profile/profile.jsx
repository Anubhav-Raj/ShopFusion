import React, { useEffect, useRef, useState } from "react";
import "../mypost/Mobile/addMobile.css";
import {
  AutoComplete,
  Input,
  Select,
  Button,
  Divider,
  Descriptions,
  message,
  Modal,
} from "antd";
import axios from "axios";
import { useAddAddressMutation } from "../../redux/API/products/profile";
import useRecaptchaV3 from "../../Hooks/reCaptchaV3";
import OtpInput from "react-otp-input";
import {
  useEmailotpMutation,
  useSendemailotpMutation,
} from "../../redux/API/otp";
import { usePhoneNumberUniqueMutation } from "../../redux/API/uniqueIdentification";
import { useSelector } from "react-redux";
import { loginData } from "../../redux/API/user_slice/login.slice";
import { setUser } from "../../redux/API/user_slice/user.slice";
const { Option } = AutoComplete;

const AddaddressPage = () => {
  const userData = useSelector(loginData);
  const executeRecaptcha = useRecaptchaV3(
    "6LfplmApAAAAAHnl1aBSiQytt43VT1-SkzeNK1Hc"
  );
  const [showfrom, setShowForm] = useState(false);
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });
  const [countylist, setCountyList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [allstate, setAllState] = useState([]);
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [landmark, setLandmark] = useState("");
  const [areaStreetVillage, setAreaStreetVillage] = useState("");
  const [flatHouseNo, setFlatHouseNo] = useState("");
  const [pincode, setPincode] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [email, setemail] = useState("");
  const [altNumber, setAltNumber] = useState("");

  const [validationErrors, setValidationErrors] = useState({
    userName: false,
    selectedCountry: false,
    phoneNumber: false,
    selectedState: false,
    district: false,
    subDistrict: false,
    landmark: false,
    areaStreetVillage: false,
    flatHouseNo: false,
    pincode: false,
    gstNumber: false,
    email: false,
    altNumber: false,
  });

  const options = [
    { value: "Consumer", label: "Consumer" },
    { value: "Retailer", label: "Retailer" },
    { value: "Wholeseller", label: "Wholeseller" },
    { value: "Dealer", label: "Dealer" },
    { value: "Distributor", label: "Distributor" },
    { value: "Exporter", label: "Exporter" },
    { value: "Manufacture", label: "Manufacture" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
        // Extract 'common' property from each country object
        const countyList = response.data.map((country) => ({
          value: country.name.common,
          label: country.name.common,
        }));
        setCountyList(countyList);
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry Something went wrong",
        });
      }
    };

    fetchData();
  }, []);
  const { loading, errorMessage, countries } = countryState;

  //   find selected country data
  //search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        //  fetch data
        const dataUrl = `https://countriesnow.space/api/v0.1/countries/states`;
        const response = await axios.post(dataUrl, {
          country: selectedCountry,
        });

        const states = response.data.data.states;
        const allstate = states.map((item) => item.name);
        setAllState(allstate);
        setItems(allstate);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [selectedCountry]);

  //     for  state

  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const [AddAddressMutation] = useAddAddressMutation();
  const [PhoneNumberUniqueMutation] = usePhoneNumberUniqueMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recaptchaToken = await executeRecaptcha("addmobile");
    // Reset validation errors
    setValidationErrors({
      userName: false,
      selectedCountry: false,
      phoneNumber: false,
      selectedState: false,
      district: false,
      subDistrict: false,
      landmark: false,
      areaStreetVillage: false,
      flatHouseNo: false,
      pincode: false,
      gstNumber: false,
      email: false,
    });

    // Field validation
    if (
      !userName ||
      !selectedCountry ||
      !phoneNumber ||
      !selectedState ||
      !district ||
      !subDistrict ||
      !landmark ||
      !areaStreetVillage ||
      !flatHouseNo ||
      !pincode ||
      !gstNumber ||
      !email
    ) {
      message.error("Please fill in all required fields");

      // Highlight the fields with errors
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        userName: !userName,
        selectedCountry: !selectedCountry,
        phoneNumber: !phoneNumber,
        selectedState: !selectedState,
        district: !district,
        subDistrict: !subDistrict,
        landmark: !landmark,
        areaStreetVillage: !areaStreetVillage,
        flatHouseNo: !flatHouseNo,
        pincode: !pincode,
        gstNumber: !gstNumber,
        email: !email,
      }));

      return;
    }

    if (phoneNumber === altNumber) {
      message.error("Phone No and Whatapp not be same ");
      return;
    }
    const phonenumber = {
      phoneNumber: phoneNumber,
    };
    const checkuniquephone = await PhoneNumberUniqueMutation(phonenumber);
    if (checkuniquephone.data.isError) {
      message.error("Phone number must be Unique");
      return;
    }
    const Whatappnumber = {
      phoneNumber: altNumber,
    };
    const checkuniquewhatappnumber = await PhoneNumberUniqueMutation(
      Whatappnumber
    );
    if (checkuniquewhatappnumber.data.isError) {
      message.error("Whatapp number must be Unique");
      return;
    }

    try {
      // Your existing API call or any other action here
      const formData = {
        userName,
        selectedCountry,
        phoneNumber,
        altNumber,
        selectedState,
        district,
        subDistrict,
        landmark,
        areaStreetVillage,
        flatHouseNo,
        pincode,
        gstNumber,
        email,
        recaptchaToken,
      };

      const result = await AddAddressMutation(formData);

      // Handle the success response
      console.log("Address added successfully:", result);
      message.success("Address added successfully");

      // Reset all fields
      setUserName("");
      setSelectedCountry("");
      setPhoneNumber("");
      setSelectedState("");
      setDistrict("");
      setSubDistrict("");
      setLandmark("");
      setAreaStreetVillage("");
      setFlatHouseNo("");
      setPincode("");
      setGstNumber("");
      setemail("");
      setAltNumber("");

      // Reset the form state or close the form here if needed
      setShowForm(false);
    } catch (error) {
      // Handle errors
      // console.error("Error adding address:", error);
      message.error("Error adding address. Please try again.");
    }
  };

  const [showOtpModal, setShowOtpModal] = useState(false); // State to control OTP modal visibility
  const [code, setCode] = useState("");
  const [EmailotpMutation] = useEmailotpMutation();
  const [SendmailOtpMutation] = useSendemailotpMutation();
  const handleChange = (code) => setCode(code);
  const handleOpenOtpModal = () => {
    setShowOtpModal(true);
  };

  const handleCloseOtpModal = () => {
    setShowOtpModal(false);
  };
  const otpHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        otp: code,
      };
      const result = await EmailotpMutation(formData);
      console.log("Email OTP verification successful:", result);
      setShowOtpModal(false);
    } catch (error) {
      console.error("Error verifying email OTP:", error);
      setShowOtpModal(false);
    }
  };
  //const userData = useSelector(loginData);
  const handlesandOtp = async (email) => {
    const formData = {
      email: email,
    };
    console.log(email);
    setShowOtpModal(true);
    const sandopt = await SendmailOtpMutation(formData);
    console.log(sandopt);
  };
  return (
    <>
      <Modal
        title="Enter OTP"
        visible={showOtpModal}
        onCancel={handleCloseOtpModal}
        footer={[
          <Button key="cancel" onClick={handleCloseOtpModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={otpHandleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <OtpInput
          style={{ display: "flex", justifyContent: "space-around" }}
          value={code}
          onChange={handleChange}
          numInputs={6}
          separator={<span style={{ width: "8px" }}>-</span>}
          isInputNum={true}
          shouldAutoFocus={true}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
          containerStyle={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        />
      </Modal>
      {showfrom ? (
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <h4>Add Address</h4>
            <form onSubmit={handleSubmit}>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="sellertype" className="formbold-form-label">
                    User Name
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter user name "
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    className={validationErrors.userName ? "error" : ""}
                  />
                </div>

                <div>
                  <label htmlFor="sellertype" className="formbold-form-label">
                    Email
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter E-Mail "
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                    className={validationErrors.userName ? "error" : ""}
                  />
                  <div onClick={handleOpenOtpModal}>Verify </div>
                </div>

                <div>
                  <label htmlFor="gstnumber" className="formbold-form-label">
                    GST Number
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter GST Number"
                    type="text"
                    onChange={(e) => setGstNumber(e.target.value)}
                    className={validationErrors.userName ? "error" : ""}
                  />
                </div>

                <div>
                  <label htmlFor="SellerName" className="formbold-form-label">
                    Select County
                  </label>
                  <AutoComplete
                    style={{ width: "100%", height: 50 }}
                    placeholder="Select County"
                    options={countylist}
                    filterOption={true}
                    onSelect={(val) => {
                      setSelectedCountry(val);
                      console.log(val);
                    }}
                    className={validationErrors.selectedCountry ? "error" : ""}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="phone number" className="formbold-form-label">
                    Phone number
                  </label>
                  {searchSelectedCountry ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      className="flex items-end border-b-2 border-gray-500 pb-2"
                    >
                      <img
                        style={{ width: "11%" }}
                        src={
                          searchSelectedCountry &&
                          searchSelectedCountry.flags.png
                        }
                        alt=""
                      />
                      <div>
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.root}
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.suffixes}
                      </div>
                      <Input
                        style={{ height: 50 }}
                        placeholder="Enter Phone No."
                        type="number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={validationErrors.phoneNumber ? "error" : ""}
                      />
                    </div>
                  ) : (
                    <Input
                      style={{ height: 50 }}
                      placeholder="Enter Phone No."
                      type="number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={validationErrors.phoneNumber ? "error" : ""}
                    />
                  )}
                </div>
                <div>
                  <label
                    htmlFor=" Whatapp number "
                    className="formbold-form-label"
                  >
                    Whatapp number
                  </label>
                  {searchSelectedCountry ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      className="flex items-end border-b-2 border-gray-500 pb-2"
                    >
                      <img
                        style={{ width: "11%" }}
                        src={
                          searchSelectedCountry &&
                          searchSelectedCountry.flags.png
                        }
                        alt=""
                      />
                      <div>
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.root}
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.suffixes}
                      </div>
                      <Input
                        style={{ height: 50 }}
                        placeholder="Enter Phone No."
                        type="number"
                        onChange={(e) => setAltNumber(e.target.value)}
                        className={validationErrors.phoneNumber ? "error" : ""}
                      />
                    </div>
                  ) : (
                    <Input
                      style={{ height: 50 }}
                      placeholder="Enter Phone No."
                      type="number"
                      onChange={(e) => setAltNumber(e.target.value)}
                      className={validationErrors.phoneNumber ? "error" : ""}
                    />
                  )}
                </div>

                <div>
                  <label htmlFor="State" className="formbold-form-label">
                    State
                  </label>
                  <Select
                    style={{
                      width: "100%",
                      height: 50,
                    }}
                    placeholder="Select Scate"
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <Divider style={{ margin: "8px 0" }} />
                      </>
                    )}
                    options={items.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                    onChange={(value) => setSelectedState(value)}
                    className={validationErrors.selectedState ? "error" : ""}
                  />
                </div>

                <div>
                  <label htmlFor="District" className="formbold-form-label">
                    District
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter District "
                    type="text"
                    onChange={(e) => setDistrict(e.target.value)}
                    className={validationErrors.district ? "error" : ""}
                  />
                </div>
                <div>
                  <label htmlFor="Sub District" className="formbold-form-label">
                    Sub District
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter Sub District "
                    type="text"
                    onChange={(e) => setSubDistrict(e.target.value)}
                    className={validationErrors.subDistrict ? "error" : ""}
                  />
                </div>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="landmark" className="formbold-form-label">
                    Landmark
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter Landmark "
                    type="text"
                    onChange={(e) => setLandmark(e.target.value)}
                    className={validationErrors.landmark ? "error" : ""}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Area/Street/village"
                    className="formbold-form-label"
                  >
                    Area/Street/Village
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter Area/Street/Village "
                    type="text"
                    onChange={(e) => setAreaStreetVillage(e.target.value)}
                    className={
                      validationErrors.areaStreetVillage ? "error" : ""
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="Flat/House No/Building/Company/Apartment"
                    className="formbold-form-label"
                  >
                    Flat/House No
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter Flat/House No/Building/Company/Apartment"
                    type="text"
                    onChange={(e) => setFlatHouseNo(e.target.value)}
                    className={validationErrors.flatHouseNo ? "error" : ""}
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="formbold-form-label">
                    Pincode
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter Pin Code"
                    type="text"
                    onChange={(e) => setPincode(e.target.value)}
                    className={validationErrors.pincode ? "error" : ""}
                  />
                </div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "end", gap: "10px" }}
              >
                <button type="submit" className="formbold-btn">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="formbold-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <h3>Manage Addresses</h3>
            <button
              onClick={() => setShowForm((prevState) => !prevState)}
              className="formbold-btn"
              style={{ width: "15%" }}
            >
              ADD NEW ADDRESS
            </button>
          </div>

          <div style={{ border: "2px solid #F1F3F6", marginTop: "20px" }}>
            {/* Replace the hard-coded Descriptions data with your actual data */}
            {userData &&
              userData.addresses &&
              userData.addresses.map((item, index) => {
                return (
                  <>
                    <Descriptions
                      key={index}
                      style={{
                        padding: "5px",
                        marginBottom: "5px",
                      }}
                      title={item.userName}
                      items={[
                        {
                          key: "1",
                          label: "UserName",
                          children: `${item.userName}`,
                        },
                        {
                          key: "2",
                          label: "Phone",
                          children: (
                            <>
                              <span
                                style={{
                                  color: item.phoneNumber.isVerified
                                    ? "green"
                                    : "red",
                                }}
                              >
                                {`${item.phoneNumber.phoneNumber} ${
                                  item.phoneNumber.isVerified
                                    ? "verified"
                                    : "Unverified"
                                }`}
                              </span>
                              <span style={{ marginLeft: "10px" }}>
                                Get OTP
                              </span>
                            </>
                          ),
                        },
                        item.altNumber.altNumber && {
                          key: "3",
                          label: "WhatsApp No",
                          children: (
                            <span
                              style={{
                                color: item.altNumber.isVerified
                                  ? "green"
                                  : "red",
                              }}
                            >
                              {`${item.altNumber.altNumber} ${
                                item.altNumber.isVerified
                                  ? "verified"
                                  : "Unverified"
                              }`}
                            </span>
                          ),
                        },

                        {
                          key: "4",
                          label: "E-Mail",

                          children: (
                            <span
                              style={{
                                color: item.email.isVerified ? "green" : "red",
                              }}
                              onClick={() => handlesandOtp(item.email.email)}
                            >
                              {`${item.email.email} ${
                                item.email.isVerified
                                  ? "verified"
                                  : "Unverified"
                              }`}
                            </span>
                          ),
                        },
                        {
                          key: "5",
                          label: "GST Number",
                          children: `${item.gstNumber}`,
                        },
                        {
                          key: "6",
                          label: "Country",
                          children: `${item.selectedCountry}`,
                        },
                        {
                          key: "7",
                          label: "PinCode",
                          children: `${item.pincode}`,
                        },
                        {
                          key: "8",
                          label: "Address",
                          children: `${item.flatHouseNo}, ${item.areaStreetVillage}, ${item.subDistrict}, ${item.district}, ${item.selectedState}, ${item.selectedCountry}`,
                        },
                      ]}
                    />

                    <hr />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddaddressPage;
