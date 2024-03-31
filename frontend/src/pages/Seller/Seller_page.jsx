import React, { useEffect, useState } from "react";
import "./seller.css";
import Location_list from "../../components/Seller/location_list";
import Dropdown_right from "../../components/Seller/Dropdown_right";
import Seller_right from "../../components/Seller/seller_right/Seller_right";
import Card from "../../components/Landing/Card";
import { usePublicfetchAllDepartmentQuery } from "../../redux/API/publicApi/publicApi";
import { Link } from "react-router-dom";

function Seller_page() {
  const [departments, setDepartments] = useState([]);
  const { data: departmentData, isLoading } = usePublicfetchAllDepartmentQuery(
    "66051c66c5d6688767d349e2"
  );
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [categories, setCategories] = useState([]);
  const [cardsToShowMap, setCardsToShowMap] = useState({});

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

  useEffect(() => {
    // Update the height of the rightdiv when categories change
    const heightMesuringDiv = document.getElementById("heightmesuring");
    const rightDiv = document.querySelector(".rightdiv");
    const currentHeight = heightMesuringDiv.clientHeight;
    rightDiv.style.height = `${Math.max(currentHeight, 370)}px`;
  }, [categories]);

  const handleDepartmentChange = (departmentId) => {
    const selectedDept = departments.find((dept) => dept._id === departmentId);
    setSelectedDepartment(selectedDept._id);
    setCategories(selectedDept.category);
    setCardsToShowMap({});
  };

  const toggleShowMore = (categoryId) => {
    setCardsToShowMap((prevMap) => ({
      ...prevMap,
      [categoryId]: (prevMap[categoryId] || 0) + 10,
    }));
  };

  const handleLessClick = (categoryId) => {
    setCardsToShowMap((prevMap) => ({
      ...prevMap,
      [categoryId]: 10,
    }));
  };

  return (
    <div className="seller_main">
      <div className="box-o3x style-bd5">
        <div id="heightmesuring">
          <div className="sjiiudbs333">
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
            <div className="sjiiudbs777" key={cat._id}>
              <h3 className="titlesh1">{cat.name}</h3>

              <Card
                categories={cat.subcategories
                  .slice(0, cardsToShowMap[cat._id] || 10)
                  .map((subcategory) => ({
                    name: subcategory.name,
                    image: subcategory.image,
                    id: subcategory._id,
                  }))}
              />
              <div className="ploter">
                <Link
                  className="load-more-button"
                  onClick={() => handleLessClick(cat._id)}
                >
                  Less
                </Link>

                <Link
                  className="load-more-button"
                  onClick={() => toggleShowMore(cat._id)}
                >
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rightdiv">
        <Seller_right />
      </div>
    </div>
  );
}

export default Seller_page;
