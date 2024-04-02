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
    "66051c66c5d6688767d349e2"
  );
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Update selectedDepartment when departments change
  useEffect(() => {
    if (isLoding) {
      toast.loading("Data  is Loading...");
    }
    if (departments.length > 0) {
      setSelectedDepartment(departments[0]);
    }
  }, [departments, isLoding]);

  // Update departments when departmentData changes
  useEffect(() => {
    if (departmentData && departmentData.departments) {
      setDepartments(departmentData.departments);
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
      setTrendingCategoriesData(catagoriesData.Categories);
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

  const handleDepartmentClick = (departmentId) => {
    const selectedDepartment = departments.find((d) => d._id === departmentId);
    setSelectedDepartment(selectedDepartment);
    setIsInitialCardVisible(!isInitialCardVisible);
  };

  const [trendingCategoriesData, setTrendingCategoriesData] = useState([]);
  const [topCategoriesData, setTopCategoriesData] = useState([]);
  const [relatedPostsData, setRelatedPostsData] = useState([]);
  const [recentlyViewedData, setRecentlyViewedData] = useState([]);
  const [savedPostsData, setSavedPostsData] = useState([]);

  const fetchSavedPostsFromLocalStorage = () => {
    const savedPosts = JSON.parse(localStorage.getItem("savedProducts")) || [];
    setSavedPostsData(savedPosts);
  };
  console.log(savedPostsData);

  useEffect(() => {
    // Fetch saved posts from local storage when component mounts
    fetchSavedPostsFromLocalStorage();
  }, []);

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
                  {selectedDepartment ? (
                    <Card
                      categories={[
                        {
                          id: selectedDepartment._id,
                          name: selectedDepartment.name,
                          image: selectedDepartment.image,
                          type: "department",
                        },
                      ]}
                      onClick={() => handleDepartmentClick(selectedDepartment)}
                    />
                  ) : (
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
                          departments && departments.length > 0
                            ? departments[0]._id
                            : null
                        )
                      }
                    />
                  )}

                  {/* <Card
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
                  /> */}
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
                <Card
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
                  {trendingCategoriesData.length > 0 ? (
                    <Card
                      categories={
                        trendingCategoriesData &&
                        trendingCategoriesData.map((category) => ({
                          name: category.name,
                          image: category.image,
                          id: category._id,
                        }))
                      }
                      onClick={(subid) => {
                        setSelectedsubcategories(subid);
                      }}
                    />
                  ) : (
                    <div style={{ margin: "20px" }}>Data not found</div>
                  )}
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Top Category</h3>
                <div className="scroollong ">
                  {topCategoriesData.length > 0 ? (
                    topCategoriesData.map((category) => (
                      <Itemcard key={category.id} data={category} />
                    ))
                  ) : (
                    <div style={{ margin: "20px" }}>Data not found</div>
                  )}
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Related Post </h3>
                <div className="scroollong ">
                  {relatedPostsData.length > 0 ? (
                    relatedPostsData.map((post) => (
                      <Itemcard key={post.id} data={post} />
                    ))
                  ) : (
                    <div style={{ margin: "20px" }}>Data not found</div>
                  )}
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Recently Viewed</h3>
                <div className="scroollong ">
                  {recentlyViewedData.length > 0 ? (
                    recentlyViewedData.map((item) => (
                      <Itemcard key={item.id} data={item} />
                    ))
                  ) : (
                    <div style={{ margin: "20px" }}>Data not found</div>
                  )}
                </div>
              </div>
              <div className="sjiiudbs22 ccccccc">
                <h3 className="titlesh1"> Saved Post</h3>
                <div className="scroollong ">
                  {savedPostsData.length > 0 ? (
                    savedPostsData.map((post) => (
                      <Itemcard key={post.id} data={post} />
                    ))
                  ) : (
                    <div style={{ margin: "20px" }}>Data not found</div>
                  )}
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
                departmentData.departments &&
                departmentData.departments.length > 0
                  ? departmentData.departments.map((department) => ({
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
