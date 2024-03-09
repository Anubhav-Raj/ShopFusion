/* eslint-disable react/jsx-pascal-case */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./mypost.css";
import Table_post from "../../components/mypost/Table_post";
import AddMobile from "./Mobile/AddMobile";
import { Select } from "antd";
import { department } from "../../utils/data";
import EditMobile from "./Mobile/editMobile";
import AddProduct from "./product/addproduct";
import { useEffect } from "react";
import { useFetchAllSallerTypeQuery } from "../../redux/API/admin/saller";
import {
  useCreateDepartmentMutation,
  useFetchAllDepartmentQuery,
} from "../../redux/API/admin/department";
import { useFetchAllSubCategoriesQuery } from "../../redux/API/admin/subcategories";
import { useFetchAllCategoryQuery } from "../../redux/API/admin/categories";
import { useFetchAllItemQuery } from "../../redux/API/admin/item";
const My_post = () => {
  const [tableShow, setTableShow] = useState(false); // change here to hide table
  const [edittableshow, setEditTable] = useState(false);
  const [id, setId] = useState(null);
  const [categories, setCategories] = useState();
  const [subcategories, setSubCategories] = useState();
  const [item, setItem] = useState();
  const [selectedType, setSelectedselectedType] = useState();
  const [selecteddepartment, setSelectedDepartment] = useState();
  const [selectedcategories, setSelectedcategories] = useState();
  const [selectedsubcategories, setSelectedsubcategories] = useState();
  const handleSelectedDepartment = (value) => {
    setSelectedDepartment(value);
  };
  const handleSelectedcategories = (value) => {
    setCategories(value);
  };
  const handleSelectedSubcategories = (value) => {
    setSubCategories(value);
  };
  const handleSelectedSubcategoriesitem = (value) => {
    setItem(value);
  };
  const handleType = (value) => {
    setSelectedselectedType(value);
  };
  // Fetch Saller Type
  const [Types, setTypes] = useState();
  const { isLoading, data } = useFetchAllSallerTypeQuery();
  useEffect(() => {
    if (!isLoading && data) {
      const modifiedArray = data.SellerTypes.map((item) => ({
        ...item,
        newobj: {
          label: item.name,
          value: item._id,
        },
      }));
      const newobjArray = modifiedArray.map((item) => item.newobj);
      setTypes(newobjArray);
    }
  }, [isLoading]);

  // Fetch Department
  const { data: departmentData, isLoading: departmentLoading } =
    useFetchAllDepartmentQuery(selectedType || "");
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    if (departmentData) {
      const modifiedArray = departmentData.Departments.map((item) => ({
        ...item,
        newobj: {
          label: item.name,
          value: item._id,
        },
      }));
      const newobjArray = modifiedArray.map((item) => item.newobj);
      setDepartment(newobjArray);
    }
  }, [departmentLoading, selectedType, departmentData]);

  //Categories Fetch
  const { data: categoriesData, isLoading: categoriesLoading } =
    useFetchAllCategoryQuery(selecteddepartment || "");
  const [allcategories, setAllCategories] = useState([]);
  useEffect(() => {
    if (categoriesData) {
      const modifiedArray = categoriesData.Categories.map((item) => ({
        ...item,
        newobj: {
          label: item.name,
          value: item._id,
        },
      }));
      const newobjArray = modifiedArray.map((item) => item.newobj);
      setAllCategories(newobjArray);
    }
  }, [categoriesLoading, selecteddepartment, categoriesData]);

  //SubCategories Fetch
  const { data: subcategoriesData, isLoading: subcategoriesLoading } =
    useFetchAllSubCategoriesQuery(categories || "");
  const [allsubcategories, setAllSelectedsubcategories] = useState([]);
  useEffect(() => {
    if (subcategoriesData) {
      const modifiedArray = subcategoriesData.SubCategories.map((item) => ({
        ...item,
        newobj: {
          label: item.name,
          value: item._id,
        },
      }));
      const newobjArray = modifiedArray.map((item) => item.newobj);
      setAllSelectedsubcategories(newobjArray);
    }
  }, [subcategoriesLoading, selectedcategories, subcategoriesData]);

  // Item Fetch
  const { data: itemData, isLoading: itemLoading } = useFetchAllItemQuery(
    subcategories || ""
  );
  const [allsubcategoriesitem, setAllSelectedsubcategoriesitem] = useState([]);
  useEffect(() => {
    if (itemData) {
      const modifiedArray = itemData.Items.map((item) => ({
        ...item,
        newobj: {
          label: item.name,
          value: item._id,
        },
      }));
      const newobjArray = modifiedArray.map((item) => item.newobj);
      setAllSelectedsubcategoriesitem(newobjArray);
    }
  }, [itemLoading, selectedsubcategories, itemData]);

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
            options={Types}
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
            options={allcategories}
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
            options={allsubcategories}
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
            options={allsubcategoriesitem}
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
        <></>
      ) : null}
      <AddProduct
        selectedType={selectedType}
        selecteddepartment={selecteddepartment}
        selectedcategories={categories}
        selectedsubcategories={subcategories}
        selectedsubcategoriesitem={item}
        setTableShow={setTableShow}
      />
      <Table_post
        setTableShow={setTableShow}
        setEditTable={setEditTable}
        setId={setId}
      />
    </>
  );
};

export default My_post;
