import React, { useState } from 'react';

const Card = ({ title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};

const SubDepartmentList = ({ subDepartments, onSubDepartmentClick }) => {
  return (
    <div className="sub-department-list">
      {subDepartments.map(subDepartment => (
        <Card key={subDepartment.id} title={subDepartment.name} onClick={() => onSubDepartmentClick(subDepartment.id)} />
      ))}
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedSubDepartment, setSelectedSubDepartment] = useState(null);
  const [products, setProducts] = useState([]);

  const handleDepartmentClick = (departmentId) => {
    setSelectedDepartment(selectedDepartment === departmentId ? null : departmentId);
    setSelectedSubDepartment(null);
  };

  const handleSubDepartmentClick = (subDepartmentId) => {
    setSelectedSubDepartment(selectedSubDepartment === subDepartmentId ? null : subDepartmentId);
    // Fetch or filter products based on the selected sub-department
    const filteredProducts = mockProducts.filter(product => product.category === subDepartmentId);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2>Seller</h2>
      <div className="card-wrapper">
        {/* Department Cards */}
        <Card title="Agricultural Department" onClick={() => handleDepartmentClick("department1")} />
        <Card title="Electronics & Electricals Department" onClick={() => handleDepartmentClick("department2")} />
        {/* Add more department cards here as needed */}
      </div>

      {/* Display Sub-Department Cards if a Department is selected */}
      {selectedDepartment && (
        <div>
          <h3>Sub-Departments</h3>
          <SubDepartmentList
            subDepartments={mockSubDepartments[selectedDepartment]}
            onSubDepartmentClick={handleSubDepartmentClick}
          />
        </div>
      )}

      {/* Display Product List if a Sub-Department is selected */}
      {selectedSubDepartment && <ProductList products={products} />}
    </div>
  );
};

// Mock data for sub-departments
const mockSubDepartments = {
  department1: [
    { id: "category1", name: "Fruits" },
    { id: "category2", name: "Vegetables" },
    { id: "category3", name: "Grains" },
    // { id: "category4", name: "Dairy" },
    // { id: "category5", name: "Meat" },
    // { id: "category6", name: "Seafood" },
    // { id: "category7", name: "Nuts" },
    // { id: "category8", name: "Beans" },
    // { id: "category9", name: "Herbs" },
    // { id: "category10", name: "Spices" },
  ],
  department2: [
    { id: "category11", name: "Mobile Phones" },
    { id: "category22", name: "Laptops" },
    { id: "category33", name: "Tablets" },
    // { id: "category14", name: "Desktops" },
    // { id: "category15", name: "Accessories" },
    // { id: "category16", name: "Audio Devices" },
    // { id: "category17", name: "Smart Home Devices" },
    // { id: "category18", name: "Gaming Consoles" },
    // { id: "category19", name: "Cameras" },
    // { id: "category20", name: "Wearable Devices" },
  ],
  // Add more departments with their respective sub-departments here
};

// Mock data for products
const mockProducts = [
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
  // Add more products here as needed
];

export default Department;
