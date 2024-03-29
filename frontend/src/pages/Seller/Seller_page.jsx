import React, { useEffect, useState } from "react";
import "./seller.css";
import Location_list from "../../components/Seller/location_list";
import Dropdown_right from "../../components/Seller/Dropdown_right";
import Seller_right from "../../components/Seller/seller_right/Seller_right";
import Card from "../../components/Landing/Card";
import { usePublicfetchAllDepartmentQuery } from "../../redux/API/publicApi/publicApi";
function Seller_page() {
  const [departments, setDepartments] = useState([]);
  const { data: departmentData, isLoading } = usePublicfetchAllDepartmentQuery(
    "66051c66c5d6688767d349e2"
  );
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isLoading) {
      // Show loading indicator
      return;
    }

    if (departmentData && departmentData.departments) {
      // Set departments
      setDepartments(departmentData.departments);

      // Set categories of the first department as default
      if (departmentData.departments.length > 0) {
        setSelectedDepartment(departmentData.departments[0]._id);
        setCategories(departmentData.departments[0].category);
      }
    }
  }, [departmentData, isLoading]);
  const handleDepartmentChange = (departmentId) => {
    // Find the selected department
    const selectedDept = departments.find((dept) => dept._id === departmentId);
    // Set selected department
    setSelectedDepartment(selectedDept._id);
    // Set categories of the selected department
    setCategories(selectedDept.category);
  };
  return (
    <>
      <div className="seller_main">
        <div className="box-o3x style-bd5">
          {/* <Location_list /> */}
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
                  handleDepartmentChange(departmentid);
                }}
              />
            </div>
          </div>

          {categories.map((cat) => (
            <div className="sjiiudbs2222" key={cat._id}>
              <h3 className="titlesh1">{cat.name}</h3>
              <Card
                categories={cat.subcategories.map((subcategory) => ({
                  name: subcategory.name,
                  image: subcategory.image,
                  id: subcategory._id,
                }))}
              />
            </div>
          ))}
        </div>
        <div className="rightdiv">
          {/* <Dropdown_right /> */}
          <Seller_right />
        </div>
      </div>
    </>
  );
}

export default Seller_page;
