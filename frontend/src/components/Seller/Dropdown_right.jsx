import React, { useState, useEffect } from "react";
import "./dropdown.css";
import { Button, Select, Space, Menu, Checkbox, Drawer, Rate } from "antd";
import {
  SortAscendingOutlined,
  FilterOutlined,
  UnorderedListOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useFetchAllBrandbasedONDepartmentQuery } from "../../redux/API/admin/brand";
import { useFetchAllBrandbasedONSubCategoryQuery } from "../../redux/API/admin/brand";
import { usePublicFilterproductQuery } from "../../redux/API/publicApi/publicApi";
function Dropdownlist1({ setSelectedCount, selectedDepartment, selectedSub }) {
  const [brands, setBrands] = useState([]);
  const { data, isLoading } =
    useFetchAllBrandbasedONDepartmentQuery(selectedDepartment);
  const { data: brandData, isLoading: isBrandLoading } =
    useFetchAllBrandbasedONSubCategoryQuery(selectedSub);
  // console.log(selectedSub);

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
  // console.log(brands);
  function getItem(
    label,
    key,
    icon,
    children,
    type,
    checkbox = false,
    rating = null,
    parentLabel = null // Add parentLabel as a parameter with a default value of null
  ) {
    return {
      key,
      icon,
      children,
      label,
      type,
      checkbox,
      rating,
      parentLabel, // Assign parentLabel to the returned object
    };
  }

  const items = [
    getItem("Types Of Seller", "1", <UnorderedListOutlined />, [
      getItem(
        "Consumer",
        "11",
        null,
        null,
        null,
        true,
        null,
        "Types Of Seller"
      ),
      getItem(
        "Retailer",
        "12",
        null,
        null,
        null,
        true,
        null,
        "Types Of Seller"
      ),
      getItem(
        "Wholesaler",
        "13",
        null,
        null,
        null,
        true,
        null,
        "Types Of Seller"
      ),
      getItem("Dealer", "14", null, null, null, true, null, "Types Of Seller"),
      getItem(
        "Distributor",
        "15",
        null,
        null,
        null,
        true,
        null,
        "Types Of Seller"
      ),
      getItem(
        "Exporter",
        "16",
        null,
        null,
        null,
        true,
        null,
        "Types Of Seller"
      ),
      getItem(
        "Manufacturer",
        "17",
        null,
        null,
        null,
        true,
        null,
        "Types Of Seller"
      ),
    ]),
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
              "Brand"
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
        1,
        null,
        "rateing"
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
        2,
        null,
        "rateing"
      ), // Rating for Option 2 is 4
      getItem(
        <span>
          <Rate disabled defaultValue={3} /> &up
        </span>,
        "33",
        null,
        null,
        null,
        false,
        3,
        null,
        "rateing"
      ), // Rating for Option 3 is 2
      getItem(
        <span>
          <Rate disabled defaultValue={4} /> &up
        </span>,
        "34",
        null,
        null,
        null,
        false,
        4,
        null,
        "rateing"
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
        5,
        null,
        "rateing"
      ), // Rating for Option 4 is 5
    ]),

    //Apply   filter on product based on  used, refabrished, brandnew
    getItem("Condition", "4", <UnorderedListOutlined />, [
      getItem("Used", "41", null, null, null, true, null, "condition"),
      getItem("Refurbished", "42", null, null, null, true, null, "condition"),
      getItem("Brand New", "43", null, null, null, true, null, "condition"),
    ]),
    //payment mode
    getItem("Payment Mode", "5", <UnorderedListOutlined />, [
      getItem("Online", "51", null, null, null, true, null, "paymentMode"),
      getItem(
        "Cash on Delivery",
        "52",
        null,
        null,
        null,
        true,
        null,
        "paymentMode"
      ),
    ]),
    //service mode
    getItem("Service Mode", "6", <UnorderedListOutlined />, [
      getItem("Online", "61", null, null, null, true, null, "serviceMode"),
      getItem("Offline", "62", null, null, null, true, null, "serviceMode"),
    ]),
  ];

  const getLevelKeys = (items1) => {
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
    const isChecked = event.target.checked;
    setSelectedCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );

    if (isChecked) {
      setSelectedOptions([
        ...selectedOptions,
        { parent: item.parentLabel, value: item.label },
      ]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option.value !== item.label)
      );
    }
  };

  const renderMenuItem = (item) => {
    // console.log(item);
    const isSelected = selectedOptions.includes(item.label);
    return (
      <Menu.Item
        key={item.key}
        style={{ backgroundColor: isSelected ? "#e6f4ff" : "rgb(250 250 250)" }}
      >
        <Checkbox onChange={(event) => handleCheckboxChange(event, item)}>
          {item.label}
        </Checkbox>
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
  const { data: filteddata } = usePublicFilterproductQuery(selectedOptions);
  console.log(data);

  useEffect(() => {
    console.log(selectedOptions);
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
          {
            /* console.log(item); */
          }
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
            <button id="clearAllButton">Clear All</button>
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
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
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
        onChange={handleChange}
        options={[
          {
            value: "newest",
            label: "Newest First (100)",
          },
          {
            value: "oldest",
            label: "Oldest First (101)",
          },
          {
            value: "priceLow",
            label: "Price Low To High (101)",
          },
          {
            value: "priceHigh",
            label: "Price High To Low (101)",
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
