import React, { useState } from "react";
import Imgss from "./monitor-removebg-preview.png";
import Card from "./Card";

function Department() {
  const departments = [
    {
      name: "Electronics",
      categories: [
        "Smartphones",
        "Laptops",
        "Tablets",
        "Cameras",
        "Accessories",
        "Others",
      ],
    },
    {
      name: "Agriculture",
      categories: [
        "Fertilizers",
        "Seeds",
        "Tools",
        "Machinery",
        "Pesticides",
        "Others",
      ],
    },
    // Add more departments as needed
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedcategories, setSelectedcategories] = useState(
    departments[0].categories // Default categories
  );
  const [isInitialCardVisible, setIsInitialCardVisible] = useState(true);

  const handleDepartmentClick = (departmentName) => {
    setSelectedDepartment(departmentName);
    const selectedDepartmentObject = departments.find(
      (department) => department.name === departmentName
    );
    setSelectedcategories(selectedDepartmentObject.categories);
    if (isInitialCardVisible == false) {
      setIsInitialCardVisible(true);
    } else {
      setIsInitialCardVisible(false); // Close the popup
    }
  };

  return (
    <>
      {isInitialCardVisible ? (
        <div className="sjiikdudbs">
          <div className="sjiiudbs">
            <h1 className="titlesh">Seller</h1>
            <Card
              categories={[
                {
                  name: selectedDepartment
                    ? selectedDepartment
                    : departments[0].name,
                  image: Imgss,
                },
              ]}
              onClick={() =>
                handleDepartmentClick(
                  selectedDepartment ? selectedDepartment : departments[0].name
                )
              }
            />
            <div className="sjiiudbs22">
              <Card
                categories={selectedcategories.map((subcategory) => ({
                  name: subcategory,
                }))}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="alignmentflx">
          <div className="page">
            <div className="navbar navbar-page">
              <div className="navbar-inner sliding">
                <div className="left">
                  <span
                    className="crosstoclose"
                    onClick={() => setIsInitialCardVisible(true)} // Close the popup
                  >
                    x
                  </span>
                </div>
                <div className="title">Select a Department</div>
              </div>
            </div>
            <Card
              categories={departments.map((department) => ({
                name: department.name,
                image: Imgss,
              }))}
              onClick={(departmentName) =>
                handleDepartmentClick(departmentName)
              }
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Department;
