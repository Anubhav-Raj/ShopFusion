import React, { useEffect, useState } from "react";
import "./seller.css";
import Location_list from "../../components/Seller/location_list";
import Dropdown_right from "../../components/Seller/Dropdown_right";
import Itemcard from "../../components/Landing/Itemcard";
import Seller_right from "../../components/Seller/seller_right/Seller_right";
import Card from "../../components/Landing/Card";
import {
  usePublicfetchAllCategoriesQuery,
  usePublicfetchAllDepartmentQuery,
  usePublicfetchAllSubCategoriesQuery,
  usePublicfetchProductQuery,
} from "../../redux/API/publicApi/publicApi";
import toast from "react-hot-toast";
function Seller_page() {
  const [departments, setDepartments] = useState([]);
  const { data: departmentData, isLoding } = usePublicfetchAllDepartmentQuery(
    "65e4bd0e38000742f274da71"
  );
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Update selectedDepartment when departments change
  useEffect(() => {
    if (isLoding) {
      toast.loading("Data  is Loading...");
    }
    if (departments.length > 0) {
      setSelectedDepartment(departments[0]._id);
    }
  }, [departments, isLoding]);

  // Update departments when departmentData changes
  useEffect(() => {
    if (departmentData && departmentData.Departments) {
      setDepartments(departmentData.Departments);
    }
  }, [departmentData]);

  // Fetch Categories
  const [catagorie, setCatagories] = useState([]);
  const { data: catagoriesData } =
    usePublicfetchAllCategoriesQuery(selectedDepartment);
  const [seletedCategories, setSelectedCatagories] = useState();
  useEffect(() => {
    if (catagorie.length > 0) {
      setSelectedCatagories(catagorie[0]._id);
    }
  }, [catagorie]);

  useEffect(() => {
    if (catagoriesData && catagoriesData.Categories) {
      setCatagories(catagoriesData.Categories);
    }
  }, [catagoriesData, seletedCategories]);

  //Fech SubCategories
  const { data: subcategoriesData } =
    usePublicfetchAllSubCategoriesQuery(seletedCategories);
  const [subcategories, setSubCategories] = useState([]);
  const [selectedsubcategories, setSelectedsubcategories] = useState(null);
  useEffect(() => {
    if (subcategories.length > 0) {
      setSelectedsubcategories(subcategories[0]._id);
    }
  }, [subcategories, seletedCategories]);
  useEffect(() => {
    if (subcategoriesData && subcategoriesData.SubCategories) {
      setSubCategories(subcategoriesData.SubCategories);
    }
  }, [subcategoriesData]);

  const { data: itemData } = usePublicfetchProductQuery(selectedsubcategories);
  return (
    <>
      <div className="seller_main">
        <div className="box-o3x style-bd5" id="sty-dlo">
          <Location_list />
          <div className="sjiiudbs2222">
            <h3 className="titlesh1"> DEPARTMENTS</h3>
            <div className="scroollong">
              <Card
                categories={departments.map((department) => ({
                  name: department.name,
                  image: department.image,
                  id: department._id,
                }))}
                onClick={(departmentid) => {
                  setSelectedDepartment(departmentid);
                }}
              />
            </div>
          </div>
          <div className="sjiiudbs2222">
            <h3 className="titlesh1"> CATEGORIES</h3>
            <div className="scroollong">
              <Card
                categories={catagorie.map((category) => ({
                  name: category.name,
                  image: category.image,
                  id: category._id,
                }))}
                onClick={(catagorieId) => {
                  setSelectedCatagories(catagorieId);
                }}
              />
            </div>
          </div>
          <div className="sjiiudbs2222">
            <h3 className="titlesh1"> Sub Category</h3>
            <div className="scroollong">
              <Card //subcategory list is showed here
                categories={
                  subcategories &&
                  subcategories.map((subcategory) => ({
                    name: subcategory.name,
                    image: subcategory.image,
                    id: subcategory._id,
                  }))
                }
                onClick={(subid) => {
                  setSelectedsubcategories(subid);
                }}
              />
            </div>
          </div>

          <div className="sjiiudbs2222">
            {/* //item list is showed here */}
            <h3 className="titlesh1"> Items</h3>
            <div className="scroollong ">
              {itemData && itemData.products.length > 0 ? (
                itemData.products.map((item) => <Itemcard data={item} />)
              ) : (
                <div style={{ margin: "20px" }}>Data not found</div>
              )}
            </div>
          </div>
        </div>
        <div className="rightdiv">
          <Dropdown_right />
          <Seller_right />
        </div>
      </div>
    </>
  );
}

export default Seller_page;
