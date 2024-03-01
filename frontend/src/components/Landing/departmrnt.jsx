import React, { useState } from "react";
import Imgss from "./monitor-removebg-preview.png";
import Card from "./Card";
import Itemcard from "./Itemcard";
import { DoubleRightOutlined } from "@ant-design/icons";

function Department() {
  const departments = [
    // update this data on select departmennt name >catagories>subcategory>items list
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
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedcategories, setSelectedcategories] = useState(
    departments[0].categories
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
      setIsInitialCardVisible(false);
    }
  };

  return (
    <>
      {isInitialCardVisible ? (
        <>
          <fieldset className="sjiikdudbs">
            <div className="sjiiudbs">
              <h1 className="titlesh">Seller</h1>
              <div className="topdivsellerscroll">
                <div className="sjiiudbs223">
                  <h3 className="titlesh1"> Department</h3>

                  <h3 className="titlesh11">
                    <DoubleRightOutlined />{" "}
                  </h3>

                  <Card // department list is showed here
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
                        selectedDepartment
                          ? selectedDepartment
                          : departments[0].name
                      )
                    }
                  />
                </div>

                <div className="sjiiudbs22">
                  <h3 className="titlesh1">Category</h3>
                  <Card // category list is showed here
                    categories={selectedcategories.map((subcategory) => ({
                      name: subcategory,
                    }))}
                  />
                </div>
              </div>
              <div className="sjiiudbs2222">
                <h3 className="titlesh1"> Sub Category</h3>
                <Card //subcategory list is showed here
                  categories={selectedcategories.map((subcategory) => ({
                    name: subcategory,
                  }))}
                />
              </div>
              <div className="sjiiudbs22 ccccccc">
                {/* //item list is showed here */}
                <h3 className="titlesh1"> Items</h3>
                <div className="scroollong ">
                  <Itemcard />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="sjiikdudbs">
            <div className="sjiiudbs">
              <h1 className="titleshseller">Seller</h1>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Trending Category</h3>
                <div className="scroollong ">
                  <Itemcard />
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Top Category</h3>
                <div className="scroollong ">
                  <Itemcard />
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Related Post </h3>
                <div className="scroollong ">
                  <Itemcard />
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Recently Viewed</h3>
                <div className="scroollong ">
                  <Itemcard />
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Saved Post</h3>
                <div className="scroollong ">
                  <Itemcard />
                </div>
              </div>
            </div>
          </fieldset>
        </>
      ) : (
        <div className="alignmentflx">
          <div className="page">
            <div className="navbar navbar-page">
              <div className="navbar-inner sliding">
                <div className="left">
                  <span
                    className="crosstoclose"
                    onClick={() => setIsInitialCardVisible(true)}
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
