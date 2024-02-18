import React, { useState } from "react";
import Img11 from "./monitor-removebg-preview.png";

const Card = ({ title, onClick }) => {
  return (
    <>
      <div className="card_amazon" onClick={onClick}>
        <img
          width={50}
          height={50}
          className="sm-i8i"
          src={Img11}
        />
        <span>{title}</span>
      </div>
    </>
  );
};

const SubDepartmentList = ({ subDepartments, onSubDepartmentClick }) => {
  return (
    <>
      <div className="sub-department-list">
        {subDepartments.map((subDepartment) => (
          <Card
            key={subDepartment.id}
            title={subDepartment.name}
            onClick={() => onSubDepartmentClick(subDepartment.id)}
          />
        ))}
      </div>
    </>
  );
};

const ProductList = ({ products }) => {
  return (
    // <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product rounded-md border">
            <img
              src={`https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60`}
              alt="Product"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {product.name}
              </h1>
              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Price :</span>
                <span className="">{product.price}</span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    // </div>
  );
};


const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedSubDepartment, setSelectedSubDepartment] = useState(null);
  const [products, setProducts] = useState([]);

  const handleDepartmentClick = (departmentId) => {
    setSelectedDepartment(
      selectedDepartment === departmentId ? null : departmentId
    );
    setSelectedSubDepartment(null);
  };

  const handleSubDepartmentClick = (subDepartmentId) => {
    setSelectedSubDepartment(
      selectedSubDepartment === subDepartmentId ? null : subDepartmentId
    );
    const filteredProducts = mockProducts.filter(
      (product) => product.category === subDepartmentId
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <div className="home_card_contaiiner">
        <h1>Seller</h1>
        <div className="card-wrar">
          <Card
            title="Agricultural Department"
            onClick={() => handleDepartmentClick("department1")}
          />
          <Card
            title="Electronics & Electricals Department"
            onClick={() => handleDepartmentClick("department2")}
          />
          <Card
            title="Agricultural Department"
            onClick={() => handleDepartmentClick("department1")}
          />
          <Card
            title="Electronics & Electricals Department"
            onClick={() => handleDepartmentClick("department2")}
          />
          <Card
            title="Agricultural Department"
            onClick={() => handleDepartmentClick("department1")}
          />
          <Card
            title="Electronics & Electricals Department"
            onClick={() => handleDepartmentClick("department2")}
          />
          <Card
            title="Agricultural Department"
            onClick={() => handleDepartmentClick("department1")}
          />
          <Card
            title="Electronics & Electricals Department"
            onClick={() => handleDepartmentClick("department2")}
          />
          <Card
            title="Agricultural Department"
            onClick={() => handleDepartmentClick("department1")}
          />
          <Card
            title="Electronics & Electricals Department"
            onClick={() => handleDepartmentClick("department2")}
          />
          <Card
            title="Agricultural Department"
            onClick={() => handleDepartmentClick("department1")}
          />
          <Card
            title="Electronics & Electricals Department"
            onClick={() => handleDepartmentClick("department2")}
          />
        </div>

        {selectedDepartment && (
          <>
            <h1>Sub-Departments</h1>
            <div className="card-wrar">
              <SubDepartmentList
                subDepartments={mockSubDepartments[selectedDepartment]}
                onSubDepartmentClick={handleSubDepartmentClick}
              />
            </div>
          </>
        )}

        {selectedSubDepartment && <ProductList products={products} />}
      </div>
    </>
  );
};

const mockSubDepartments = {
  department1: [
    { id: "category1", name: "Fruits" },
    { id: "category2", name: "Vegetables" },
    { id: "category3", name: "Grains" },
  ],
  department2: [
    { id: "category11", name: "Mobile Phones" },
    { id: "category22", name: "Laptops" },
    { id: "category33", name: "Tablets" },
  ],
};

const mockProducts = [
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 1, name: "Apple", price: "$1.99", category: "category1" },
  { id: 2, name: "Banana", price: "$0.99", category: "category1" },
  { id: 3, name: "Orange", price: "$2.49", category: "category1" },
  { id: 4, name: "Potato", price: "$0.79", category: "category2" },
  { id: 5, name: "Tomato", price: "$1.29", category: "category2" },
  { id: 6, name: "Carrot", price: "$0.89", category: "category2" },
  { id: 7, name: "Rice", price: "$3.49", category: "category3" },
  { id: 8, name: "Wheat", price: "$2.99", category: "category3" },
  { id: 1, name: "Apple iphone", price: "$1000.99", category: "category11" },
  { id: 2, name: "redmi", price: "$0.99", category: "category11" },
  { id: 3, name: "Orange", price: "$200.49", category: "category11" },
  { id: 4, name: "dell", price: "$0.79", category: "category22" },
  { id: 5, name: "hp", price: "$1.29", category: "category22" },
  { id: 6, name: "lenavo", price: "$0.89", category: "category22" },
  { id: 7, name: "blackberry", price: "$3.49", category: "category33" },
  { id: 8, name: "samsung", price: "$2.99", category: "category33" },
];

export default Department;
