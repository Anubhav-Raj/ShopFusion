import React, { useEffect, useState } from "react";
import "./seller.css";
import LocationList from "../../components/Seller/location_list";
import DropdownRight from "../../components/Seller/Dropdown_right";
import SellerRight from "../../components/Seller/seller_right/Seller_right";
import Card from "../../components/Landing/Card";
import { usePublicfetchAllDepartmentQuery } from "../../redux/API/publicApi/publicApi";
import { Link } from "react-router-dom";

function SellerPage() {
  const [departments, setDepartments] = useState([]);
  const { data: departmentData, isLoading } = usePublicfetchAllDepartmentQuery(
    "66193c6f49560202a88750e8"
  );
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [categories, setCategories] = useState([]);
  const [cardsToShowMap, setCardsToShowMap] = useState({});
  const [rightDivHeight, setRightDivHeight] = useState(370); // Default height of right div

  useEffect(() => {
    if (!isLoading && departmentData && departmentData.departments) {
      setDepartments(departmentData.departments);
      if (departmentData.departments.length > 0) {
        const firstDepartment = departmentData.departments[0];
        setSelectedDepartment(firstDepartment._id);
        setCategories(firstDepartment.category);
      }
    }
  }, [departmentData, isLoading]);

  useEffect(() => {
    // Calculate and update the height of the right div when categories change
    const heightMesuringDiv = document.getElementById("heightmesuring");
    const currentHeight = heightMesuringDiv.clientHeight;
    setRightDivHeight(Math.max(currentHeight, 370)); // Set minimum height
  }, [categories, cardsToShowMap]);

  const handleDepartmentChange = (departmentId) => {
    // console.log(departmentId);
    const selectedDept = departments.find((dept) => dept._id === departmentId);
    setSelectedDepartment(selectedDept._id);
    setCategories(selectedDept.category);
    setSelectedID({ id: selectedDept._id, type: "dept" });
    setCardsToShowMap({});
  };
  const [selectedid, setSelectedID] = useState({});

  const handleSubcategoryChange = (subcategoryId, subcategoryName) => {
    setSelectedID({ id: subcategoryId, type: "subcategory" });
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
        <LocationList />
        <div id="heightmesuring">
          <div className="sjiiudbs333">
            <h3 className="titlesh1">DEPARTMENTS</h3>
            <div className="scroollong">
              <Card
                categories={departments.map((department) => ({
                  name: department.name,
                  image: department.image,
                  id: department._id,
                  count: department.products ? department.products.length : 0,
                }))}
                onClick={(departmentid, departmentname) =>
                  handleDepartmentChange(departmentid, departmentname)
                }
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
                    count: subcategory.products
                      ? subcategory.products.length
                      : 0,
                  }))}
                onClick={(subcategoryID, subcategoryName) => {
                  handleSubcategoryChange(subcategoryID, subcategoryName); // Call handleSubcategoryChange with subcategoryID and subcategoryName
                }}
              />

              <div className="ploter">
                {/* Show "More" button if there are more subcategories to show */}
                {cat.subcategories.length > (cardsToShowMap[cat._id] || 10) && (
                  <Link
                    className="load-more-button"
                    onClick={() => toggleShowMore(cat._id)}
                  >
                    More
                  </Link>
                )}
                {/* Show "Less" button only when more than initial number of products are shown */}
                {cardsToShowMap[cat._id] && cardsToShowMap[cat._id] > 10 && (
                  <Link
                    className="load-more-button"
                    onClick={() => handleLessClick(cat._id)}
                  >
                    Less
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rightdiv">
        <DropdownRight
          selectedDepartment={selectedDepartment}
          selectedSub={categories}
        />
        <div
          className="rightdivscrol"
          style={{ height: `${rightDivHeight}px` }}
        >
          <SellerRight data={selectedid} />
        </div>
      </div>
    </div>
  );
}

export default SellerPage;
