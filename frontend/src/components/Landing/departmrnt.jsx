import React, { useEffect, useState } from "react";
import Card from "./Card";
import Itemcard from "./Itemcard";
import {
  usePublicfetchAllCategoriesQuery,
  usePublicfetchAllDepartmentQuery,
  usePublicfetchAllSubCategoriesQuery,
  usePublicfetchSavedPostQuery, // Import the hook
} from "../../redux/API/publicApi/publicApi";
import toast from "react-hot-toast";
import { useGetSubCategoryproductQuery } from "../../redux/API/products/mobile";

function Department() {
  const [departments, setDepartments] = useState([]);
  const { data: departmentData, isLoading } = usePublicfetchAllDepartmentQuery(
    "66193c6f49560202a88750e8"
  );

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Update selectedDepartment when departments change
  useEffect(() => {
    if (isLoading) {
      //toast.loading("Data is Loading...");
    }
    if (departments.length > 0) {
      setSelectedDepartment(departments[0]);
    }
  }, [departments, isLoading]);

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
    }
  }, [catagoriesData, seletedCategories]);

  // Fetch SubCategories
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

  const { data: itemData } = useGetSubCategoryproductQuery(
    selectedsubcategories
  );

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
  const savedPosts = JSON.parse(localStorage.getItem("savedProducts")) || [];
  const [savedPostsData, setsavedPostsData] = useState([]);
  const BASE_URL = process.env.LIVE_BACKENDAPI || "http://localhost:5000";

  // Now you can use BASE_URL wherever needed, such as in your fetch call
  const url = `${BASE_URL}/api/product/productbasedonid`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST", // Change method to POST
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
          body: JSON.stringify(savedPosts), // Send savedPosts array in the request body
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        console.log(jsonData);
        setsavedPostsData(jsonData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Include savedPosts in the dependency array to trigger the effect when it changes

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
                          count: selectedDepartment.products.length,
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
                </div>
                <div className="sjiiudbs22">
                  <h3 className="titlesh1">Category</h3>
                  <Card
                    categories={catagorie.map((category) => ({
                      name: category.name,
                      image: category.image,
                      id: category._id,
                      count: category.products ? category.products.length : 0,
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
                      count: subcategory.products
                        ? subcategory.products.length
                        : 0,
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
                      count: department.products
                        ? department.products.length
                        : 0,
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
