import React, { useEffect, useState } from "react";
import Card from "./Card";
import Itemcard from "./Itemcard";
import {
  usePublicfetchAllCategoriesQuery,
  usePublicfetchAllDepartmentQuery,
  usePublicfetchAllSubCategoriesQuery,
  usePublicfetchProductQuery,
} from "../../redux/API/publicApi/publicApi";
import toast from "react-hot-toast";

function Department() {
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

  const [isInitialCardVisible, setIsInitialCardVisible] = useState(true);

  const handleDepartmentClick = (departmentName) => {
    setSelectedDepartment(departmentName);
    if (isInitialCardVisible === false) {
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

                  <Card
                    categories={[
                      {
                        id:
                          departments && departments.length > 0
                            ? departments[0]._id
                            : null,
                        name:
                          departments && departments.length > 0
                            ? departments[0].name
                            : null,
                        image:
                          departments && departments.length > 0
                            ? departments[0]?.image
                            : null,
                        type: "department",
                      },
                    ]}
                    onClick={() =>
                      handleDepartmentClick(
                        selectedDepartment
                          ? selectedDepartment
                          : departments[0]?._id
                      )
                    }
                  />
                </div>

                <div className="sjiiudbs22">
                  <h3 className="titlesh1">Category</h3>
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

              <div className="sjiiudbs22 ccccccc">
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
              categories={
                departmentData &&
                departmentData.Departments &&
                departmentData.Departments.length > 0
                  ? departmentData.Departments.map((department) => ({
                      name: department.name,
                      image: department.image,
                      id: department._id,
                    }))
                  : []
              }
              onClick={(departmentID) => {
                // console.log(departmentID);
                return handleDepartmentClick(departmentID);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Department;
