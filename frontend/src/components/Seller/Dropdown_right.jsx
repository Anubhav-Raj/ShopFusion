/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import "./dropdown.css";
import {
  Slider,
  Button,
  Select,
  Space,
  Menu,
  Checkbox,
  Drawer,
  Rate,
  Radio,
} from "antd";
import {
  SortAscendingOutlined,
  FilterOutlined,
  UnorderedListOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useFetchAllBrandbasedONDepartmentQuery } from "../../redux/API/admin/brand";
import { useFetchAllBrandbasedONSubCategoryQuery } from "../../redux/API/admin/brand";
import { usePublicFilterproductQuery } from "../../redux/API/publicApi/publicApi";
import { useDispatch } from "react-redux";
import { setSortType } from "../../redux/sort.slice";
import Seller_right from "./seller_right/Seller_right";
import { addFilterOption, removeFilterOption } from "../../redux/filter.slice";
import { useFetchAllSallerTypeQuery } from "../../redux/API/admin/saller";

function Dropdownlist1({ setSelectedCount, selectedDepartment, selectedSub }) {
  const [brands, setBrands] = useState([]);
  const { data, isLoading } =
    useFetchAllBrandbasedONDepartmentQuery(selectedDepartment);
  // const { data: brandData, isLoading: isBrandLoading } =
  //   useFetchAllBrandbasedONSubCategoryQuery(selectedSub);
  // console.log(selectedSub);
  const { data: sellerData } = useFetchAllSallerTypeQuery();

  useEffect(() => {
    if (!isLoading && data && data.brands) {
      const brandsWithKeys = data.brands.map((brand, index) => ({
        ...brand,
        key: index.toString(), // Assigning a unique key based on the index
      }));
      setBrands(brandsWithKeys);
    }
  }, [isLoading, data]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [stateOpenKeys, setStateOpenKeys] = useState(["1"]);
  function getItem(
    label,
    key,
    icon,
    children,
    type,
    checkbox = false,
    rating = null,
    parentLabel = null,
    id = null
  ) {
    return {
      key,
      icon,
      children,
      label,
      type,
      checkbox,
      rating,
      parentLabel,
      id,
    };
  }
  // console.log(sellerData && sellerData.SellerTypes);

  const items = [
    getItem(
      "Types Of Seller",
      "1",
      <UnorderedListOutlined />,
      sellerData && sellerData.SellerTypes.length > 0
        ? sellerData.SellerTypes.map((data, index) =>
            getItem(
              data.name,
              `2${index}`,
              null,
              null,
              null,
              true,
              null,
              "Types Of Seller",
              data._id
            )
          )
        : []
    ),

    getItem(
      "Brands",
      "2",
      <UnorderedListOutlined />,
      brands && brands.length > 0
        ? brands.map((brand, index) =>
            getItem(
              brand.brandName,
              `2${index}`,
              null,
              null,
              null,
              true,
              null,
              "Brand",
              brand._id
            )
          )
        : []
    ),

    getItem("Avg Customer Review", "3", <UnorderedListOutlined />, [
      getItem(
        <span>
          <Rate disabled defaultValue={1} /> &up
        </span>,
        "31",
        null,
        null,
        null,
        false,
        null,
        "Rating",
        1
      ),
      getItem(
        <span>
          <Rate disabled defaultValue={2} /> &up
        </span>,
        "32",
        null,
        null,
        null,
        false,
        null,
        "Rating",
        2
      ),
      getItem(
        <span>
          <Rate disabled defaultValue={3} /> &up
        </span>,
        "33",
        null,
        null,
        null,
        false,
        null,
        "Rating",
        3
      ),
      getItem(
        <span>
          <Rate disabled defaultValue={4} /> &up
        </span>,
        "34",
        null,
        null,
        null,
        false,
        null,
        "Rating",
        4
      ), // Rating for Option 4 is 5
      getItem(
        <span>
          <Rate disabled defaultValue={5} /> &up
        </span>,
        "35",
        null,
        null,
        null,
        false,
        null,
        "Rating",
        5
      ), // Rating for Option 4 is 5
    ]),

    //Apply   filter on product based on  used, refabrished, brandnew
    getItem("Condition", "4", <UnorderedListOutlined />, [
      getItem("Used", "41", null, null, null, true, null, "condition", "Used"),
      getItem(
        "Refurbished",
        "42",
        null,
        null,
        null,
        true,
        null,
        "condition",
        "Refurbished"
      ),
      getItem(
        "Brand New",
        "43",
        null,
        null,
        null,
        true,
        null,
        "condition",
        "Brand New"
      ),
    ]),
    //payment mode
    getItem("Payment Mode", "5", <UnorderedListOutlined />, [
      getItem(
        "Online",
        "51",
        null,
        null,
        null,
        true,
        null,
        "paymentMode",
        "Online"
      ),
      getItem(
        "Cash on Delivery",
        "52",
        null,
        null,
        null,
        true,
        null,
        "paymentMode",
        "Cash on Delivery"
      ),
    ]),
    //service mode
    getItem("Service Mode", "6", <UnorderedListOutlined />, [
      getItem(
        "Online",
        "61",
        null,
        null,
        null,
        true,
        null,
        "serviceMode",
        "Online"
      ),
      getItem(
        "Offline",
        "62",
        null,
        null,
        null,
        true,
        null,
        "serviceMode",
        "Offline"
      ),
    ]),
    getItem("Price Range", "7", <UnorderedListOutlined />, [
      getItem(
        "Under ₹50",
        "71",
        null,
        null,
        null,
        true,
        null,
        "priceRange",
        "under 50"
      ),
      getItem(
        "₹100 - ₹500",
        "72",
        null,
        null,
        null,
        true,
        null,
        "priceRange",
        "100 - 500"
      ),
      getItem(
        "₹500 - ₹1000",
        "73",
        null,
        null,
        null,
        true,
        null,
        "priceRange",
        "500 - 1000"
      ),
      getItem(
        "Over ₹1000",
        "74",
        null,
        null,
        null,
        true,
        null,
        "priceRange",
        "over 1000"
      ),
    ]),
  ];

  const getLevelKeys = (items1) => {
    // console.log(items1);
    const key = {};
    const func = (items2, level = 1) => {
      if (Array.isArray(items2)) {
        // Check if items2 is an array
        items2.forEach((item) => {
          if (item.key) {
            key[item.key] = level;
          }
          if (item.children) {
            return func(item.children, level + 1);
          }
        });
      }
    };
    func(items1);
    return key;
  };

  const levelKeys = getLevelKeys(items);

  const handleCheckboxChange = (event, item) => {
    console.log(item);
    const isChecked = event.target.checked;
    setSelectedCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );

    if (isChecked) {
      // Dispatch action to add filter option
      dispatch(addFilterOption({ parent: item.parentLabel, value: item.id }));
    } else {
      dispatch(
        removeFilterOption({ parent: item.parentLabel, value: item.id })
      );
    }
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    dispatch(removeFilterOption({ parent: "price" })); // Remove previous price range filter
    dispatch(addFilterOption({ parent: "price", value: e.target.value })); // Add the new price range filter
    setValue(e.target.value);
    setSelectedCount((prevCount) => prevCount + 1);
  };

  const renderMenuItem = (item) => {
    const isSelected = selectedOptions.includes(item.label);
    const parentLabel = item.parentLabel;

    return parentLabel !== "priceRange" ? (
      <Menu.Item
        key={item.key}
        style={{ backgroundColor: isSelected ? "#e6f4ff" : "rgb(250 250 250)" }}
      >
        <Checkbox
          style={{}}
          onChange={(event) => handleCheckboxChange(event, item)}
        >
          {item.label}
        </Checkbox>
      </Menu.Item>
    ) : (
      <Menu.Item key="7" style={{ backgroundColor: "rgb(250 250 250)" }}>
        <Radio.Group onChange={onChange} value={value}>
          <Radio key={item.label} value={item.id}>
            {item.label}
          </Radio>
        </Radio.Group>
      </Menu.Item>
    );
  };

  const renderSubMenu = (item) => {
    if (Array.isArray(item.children)) {
      return (
        <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
          {item.children.map((subItem) => (
            <React.Fragment key={subItem.key}>
              {
                subItem.children
                  ? renderSubMenu(subItem) // Recursive call for submenus
                  : renderMenuItem(subItem) // Render menu item if there are no submenus
              }
            </React.Fragment>
          ))}
        </Menu.SubMenu>
      );
    } else {
      return renderMenuItem(item); // Render menu item if there are no children
    }
  };
  // const { data: filteddata } = usePublicFilterproductQuery(selectedOptions);
  // console.log(filteddata);
  const dispatch = useDispatch();
  useEffect(() => {
    <Seller_right filterData={selectedOptions} />;
  }, [selectedOptions]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <ul className="dropdown-r42">
      <Menu
        mode="inline"
        defaultSelectedKeys={[]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
      >
        {items.map((item) => {
          return item.children ? renderSubMenu(item) : renderMenuItem(item);
        })}
      </Menu>
    </ul>
  );
}

function FilterButton({
  setSelectedCount,
  selectedCount,
  selectedDepartment,
  selectedSub,
}) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showDrawer}>
        <Space>
          <FilterOutlined />
          Filter ({selectedCount})
        </Space>
      </Button>
      <Drawer
        extra={
          <div id="selectAllContainer">
            <span id="selectAll">
              <Checkbox>Select All</Checkbox>
            </span>
            <button onClick={() => setSelectedCount(0)} id="clearAllButton">
              Clear All
            </button>
          </div>
        }
        onClose={onClose}
        open={open}
      >
        <Dropdownlist1
          selectedDepartment={selectedDepartment}
          selectedSub={selectedSub}
          setSelectedCount={setSelectedCount}
        />
      </Drawer>
    </>
  );
}

function DropdownRight({ selectedSub, selectedDepartment }) {
  const [selectedCount, setSelectedCount] = useState(0);
  const dispatch = useDispatch();
  const [sortType, setSortTypeLocal] = useState();

  const handleSortTypeChange = (type) => {
    setSortTypeLocal(type);
    dispatch(setSortType(type));
  };
  return (
    <div className="sort-4wg">
      <Select
        suffixIcon={<SortAscendingOutlined style={{ color: "black" }} />}
        labelInValue
        defaultValue={{
          value: "",
          label: "Sort By",
        }}
        style={{
          width: 160,
        }}
        onChange={handleSortTypeChange}
        options={[
          {
            value: "Newest",
            label: "Newest First ",
          },
          {
            value: "Oldest",
            label: "Oldest First",
          },
          {
            value: "HightoLow",
            label: "Price Hight To Low",
          },
          {
            value: "LowtoHigh",
            label: "Price Low To High",
          },
        ]}
      />
      <div className="dropdown-container">
        <FilterButton
          selectedDepartment={selectedDepartment}
          selectedSub={selectedSub}
          setSelectedCount={setSelectedCount}
          selectedCount={selectedCount}
        />
      </div>
    </div>
  );
}

export default DropdownRight;
