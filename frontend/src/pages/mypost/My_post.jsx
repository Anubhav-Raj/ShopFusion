/* eslint-disable react/jsx-pascal-case */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./mypost.css";
import Table_post from "../../components/mypost/Table_post";
import AddMobile from "./Mobile/AddMobile";
import { Select } from "antd";
import { department } from "../../utils/data";
import EditMobile from "./Mobile/editMobile";

const My_post = () => {
  const [tableShow, setTableShow] = useState(false); // change here to hide table
  const [edittableshow, setEditTable] = useState(false);
  const [id, setId] = useState(null);
  const tabItems = [
    { label: "Seller", value: "Seller" },
    { label: "Buyer", value: "Buyer" },
    { label: "Employers", value: "Employers" },
    { label: "Job Seekers", vlaue: "Job Seekers" },
    { label: "Rental Service Provider", value: "Rental Service Provider" },
    { label: "Rental Service Seekers", value: "Rental Service Seekers" },
    { label: "Other Service Provider", value: "Other Service Provider" },
    { label: "Other Service Seekers", value: "Other Service Seekers" },
    { label: "Matrimony", value: "Matrimony" },
    { label: "Mobile", value: "Mobile" },
  ];
  const [categories, setCategories] = useState();
  const [subcategories, setSubCategories] = useState();
  const [item, setItem] = useState();
  const [selectedType, setSelectedselectedType] = useState();
  const [selecteddepartment, setSelectedDepartment] = useState();
  const [selectedcategories, setSelectedcategories] = useState();
  const [selectedsubcategories, setSelectedsubcategories] = useState();
  const [selectedsubcategoriesitem, setSelectedsubcategoriesitem] = useState();
  const handleSelectedDepartment = (value) => {
    setSelectedDepartment(value);
    const selectedDepartmentCategories =
      department.find((item) => item.label === value)?.categories ?? [];
    setSelectedcategories(selectedDepartmentCategories);
  };
  const handleSelectedcategories = (value) => {
    setCategories(value);
    const selectedCategoriesSubCategories =
      selectedcategories.find((item) => item.label === value)?.subcategories ??
      [];
    setSelectedsubcategories(selectedCategoriesSubCategories);
  };
  const handleSelectedSubcategories = (value) => {
    setSubCategories(value);
    const selectedCategoriesSubCategoriesItem =
      selectedsubcategories.find((item) => item.label === value)
        ?.subCategoriesitem ?? [];
    setSelectedsubcategoriesitem(selectedCategoriesSubCategoriesItem);
  };

  const handleSelectedSubcategoriesitem = (value) => {
    setItem(value);
  };
  const handleType = (value) => {
    setSelectedselectedType(value);
  };

  return (
    <>
      <div className="formbold-main-wrapper" style={{ paddingBottom: "0px" }}>
        <div className="formbold-form-wrapper">
          <h6>Choose Type</h6>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={tabItems}
            onChange={handleType}
          />
        </div>
        <div className="formbold-form-wrapper">
          <h6>Choose Department</h6>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={department}
            onChange={handleSelectedDepartment} // Pass the appropriate handler
            //value={selecteddepartment}
          />
        </div>

        <div className="formbold-form-wrapper">
          <h6>Choose Categories</h6>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={selectedcategories}
            onChange={handleSelectedcategories}
          />
        </div>

        <div className="formbold-form-wrapper">
          <h6>Choose Subcategories</h6>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={selectedsubcategories}
            onChange={handleSelectedSubcategories}
          />
        </div>

        <div className="formbold-form-wrapper">
          <h6>Choose Item</h6>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={
              selectedsubcategoriesitem &&
              selectedsubcategoriesitem.map((item, index) => ({
                value: item.value,
                label: item.label,
                key: `${item.value}-${index}`, // Unique key generation
              }))
            }
            onChange={handleSelectedSubcategoriesitem}
          />
        </div>
      </div>

      {tableShow && (
        <AddMobile
          selectedType={selectedType}
          selecteddepartment={selecteddepartment}
          selectedcategories={categories}
          selectedsubcategories={subcategories}
          selectedsubcategoriesitem={item}
          setTableShow={setTableShow}
        />
      )}
      {edittableshow && <EditMobile id={id} setEditTable={setEditTable} />}

      {selectedType === "Seller" &&
      selecteddepartment === "Electronics & Electrical Supplies" &&
      categories === "Mobile Phones, Accessories & Parts" &&
      subcategories === "Mobile Phones" &&
      item === "Android Mobile Phones" ? (
        <>
          <Table_post
            setTableShow={setTableShow}
            setEditTable={setEditTable}
            setId={setId}
          />
        </>
      ) : null}
    </>
  );
};

export default My_post;
