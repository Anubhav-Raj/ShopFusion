import React, { useEffect, useRef, useState } from "react";
import "../mypost/Mobile/addMobile.css";
import {
  AutoComplete,
  Input,
  Select,
  Button,
  Divider,
  Space,
  Descriptions,
} from "antd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = AutoComplete;
let addstate = 0;
const AddaddressPage = () => {
  const [showfrom, setShowForm] = useState(false);

  const options = [
    { value: "Consumer", label: "Consumer" },
    { value: "Retailer", label: "Retailer" },
    { value: "Wholeseller", label: "Wholeseller" },
    { value: "Dealer", label: "Dealer" },
    { value: "Distributor", label: "Distributor" },
    { value: "Exporter", label: "Exporter" },
    { value: "Manufacture", label: "Manufacture" },
  ];

  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });
  const [countylist, setCountyList] = useState([]);

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

  const [selectedCountry, setSelectedCountry] = useState();

  //   find selected country data
  //search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });

  const [allstate, setAllState] = useState([]);
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
        console.log("all state", response);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [selectedCountry]);

  //     for  state
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${addstate++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const item = [
    {
      key: "1",
      label: "UserName",
      children: "Zhou Maomao",
    },
    {
      key: "2",
      label: "Telephone",
      children: "1810000000",
    },
    {
      key: "3",
      label: "Live",
      children: "Hangzhou, Zhejiang",
    },
    {
      key: "4",
      label: "Remark",
      children: "empty",
    },
    {
      key: "5",
      label: "Address",
      children:
        "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
    },
  ];
  return (
    <>
      {showfrom ? (
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <h4>Add Address</h4>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="sellertype" className="formbold-form-label">
                    User Name
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter user name "
                    type="text"
                  />
                </div>

                <div>
                  <label htmlFor="SellerName" className="formbold-form-label">
                    Select County
                  </label>
                  <AutoComplete
                    style={{ width: 300, height: 50 }}
                    placeholder="Select County"
                    options={countylist}
                    filterOption={true}
                    onSelect={(val) => {
                      setSelectedCountry(val);
                      console.log(val);
                    }}
                  />
                </div>

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
                        type="Phone"
                      />
                    </div>
                  ) : (
                    <Input
                      style={{ height: 50 }}
                      placeholder="Enter Phone No."
                      type="Phone"
                    />
                  )}
                </div>

                <div>
                  <label htmlFor="State" className="formbold-form-label">
                    State
                  </label>
                  <Select
                    style={{
                      width: 300,
                      height: 50,
                    }}
                    placeholder="custom dropdown render"
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <Divider style={{ margin: "8px 0" }} />
                        <Space style={{ padding: "0 8px 4px" }}>
                          <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                            onKeyDown={(e) => e.stopPropagation()}
                          />
                          <Button
                            type="text"
                            icon={<PlusOutlined />}
                            onClick={addItem}
                          >
                            Add item
                          </Button>
                        </Space>
                      </>
                    )}
                    options={items.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="District" className="formbold-form-label">
                    District
                  </label>
                  <Select
                    style={{
                      width: 300,
                      height: 50,
                    }}
                    placeholder="choose District"
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <Divider style={{ margin: "8px 0" }} />
                        <Space style={{ padding: "0 8px 4px" }}>
                          <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                            onKeyDown={(e) => e.stopPropagation()}
                          />
                          <Button
                            type="text"
                            icon={<PlusOutlined />}
                            onClick={addItem}
                          >
                            Add item
                          </Button>
                        </Space>
                      </>
                    )}
                    options={items.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                  />
                </div>
                <div>
                  <label htmlFor="Sub District" className="formbold-form-label">
                    Sub District
                  </label>
                  <Select
                    style={{
                      width: 300,
                      height: 50,
                    }}
                    placeholder=" Choose Sub District"
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <Divider style={{ margin: "8px 0" }} />
                        <Space style={{ padding: "0 8px 4px" }}>
                          <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                            onKeyDown={(e) => e.stopPropagation()}
                          />
                          <Button
                            type="text"
                            icon={<PlusOutlined />}
                            onClick={addItem}
                          >
                            Add item
                          </Button>
                        </Space>
                      </>
                    )}
                    options={items.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                  />
                </div>
                <div>
                  <label htmlFor="landmark" className="formbold-form-label">
                    Landmark
                  </label>
                  <Input
                    style={{ height: 50 }}
                    placeholder="Enter Landmark "
                    type="text"
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
                  />
                </div>
              </div>

              <div className="formbold-input-flex">
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
                  />
                </div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "end", gap: "10px" }}
              >
                <button className="formbold-btn">Submit</button>
                <button className="formbold-btn">Cancle </button>
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
              //   onClick={() => setShowForm(true)}
              onClick={() => setShowForm((prevState) => !prevState)}
              className="formbold-btn"
              style={{ width: "15%" }}
            >
              ADD NEW ADDRESS
            </button>
          </div>
          <div style={{ border: "2px solid #F1F3F6", marginTop: "20px" }}>
            <Descriptions
              style={{
                padding: "5px",
                marginBottom: "5px",
              }}
              title="Anubhav"
              items={item}
            />
            <hr />
            <Descriptions
              style={{
                padding: "5px",
                marginBottom: "5px",
              }}
              title="Anubhav"
              items={item}
            />
            <hr />
            <Descriptions
              style={{
                padding: "5px",
                marginBottom: "5px",
              }}
              title="Anubhav"
              items={item}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddaddressPage;
