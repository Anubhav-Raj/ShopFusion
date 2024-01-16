import React, { useState } from "react";
import "./table.css";
import Trashicon from "./trash-can.png";
import Editicon from "./edit.png";
import CustomCheckbox from "./Costum_checkbox";
import Onoffbutton from "./Onoffbutton";

function Table_post() {
  const [rows, setRows] = useState([
    {
      id: 1,
      status: "active",
      sellerType: "consumer",
      sellerName: "",
      gstId: "",
      itemBrandName: "",
      itemModelName: "",
      color: "",
      adTitle: "",
      adDescription: "",
      condition: "new",
      yearOfPurchase: "",
      availableQuantity: "",
      minimumOrderQuantity: "",
      price: "",
      paymentMethod: "cash",
      serviceMode: "pickup",
      phoneNumber: "",
      showPhoneNumber: false,
      emailId: "",
      showEmail: false,
      address: "",
      // ... add more properties for each column
    },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      status: "active",
      sellerType: "consumer",
      sellerName: "",
      gstId: "",
      itemBrandName: "",
      itemModelName: "",
      color: "",
      adTitle: "",
      adDescription: "",
      condition: "new",
      yearOfPurchase: "",
      availableQuantity: "",
      minimumOrderQuantity: "",
      price: "",
      paymentMethod: "cash",
      serviceMode: "pickup",
      phoneNumber: "",
      showPhoneNumber: false,
      emailId: "",
      showEmail: false,
      address: "",
      // ... add more properties for each column
    };

    setRows((prevRows) => [...prevRows, newRow]);
  };

  return (
    <>
      <div className="snipcss-eBKL4">
        <div className="table-wrap attrTable">
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th colSpan="3" data-type="InputIcon">
                    <input type="checkbox" id="selectAll" />
                    Actions
                  </th>
                  <th>Status</th>
                  <th>Type Of Seller</th>
                  <th>Seller Name </th>
                  <th>GST ID</th>
                  <th>Item Brand Name</th>
                  <th>Item Model Name</th>
                  <th>Color</th>
                  <th>Ad Title</th>
                  <th>Ad Description</th>
                  <th>Condition</th>
                  <th>Year Of Purchase</th>
                  <th>Available Quantity</th>
                  <th>Minimum Order Quantity</th>
                  <th>Price</th>
                  <th>Payment Method</th>
                  <th>Service Mode</th>
                  <th>Phone no.</th>
                  <th>Show Phone no. in Ads</th>
                  <th>Email Id</th>
                  <th>Show Email no. in Ads</th>
                  <th>Address</th>
                  <th>Photos/Video</th>
                  <th>Documents</th>
                  <th>Google Drive link</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                      <div className="form-grp">
                        <CustomCheckbox />
                      </div>
                    </td>
                    <td>
                      <span className="dsprite Edit-icon zero-photo">
                        <img src={Editicon} alt="Edit Icon" />
                      </span>
                    </td>
                    <td>
                      <span className="dsprite Edit-icon zero-photo">
                        <img src={Trashicon} alt="Trash Icon" />
                      </span>
                    </td>
                    <td>
                      <select value={row.status}>
                        <option value="active">PUBLIC</option>
                        <option value="inactive">PRIVATE</option>
                      </select>
                    </td>
                    <td>
                      <select value={row.sellerType}>
                        <option value="consumer">Consumer</option>
                        <option value="retailer">Retailer</option>
                      </select>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter Name"
                          value={row.sellerName}
                        />
                        <span className="err-msg"></span>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="GST Number"
                          value={row.gstId}
                        />
                        <span className="err-msg"></span>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Item Brand Name"
                          value={row.itemBrandName}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Item Model Name"
                          value={row.itemModelName}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Color"
                          value={row.color}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Ad Title"
                          value={row.adTitle}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <textarea
                          className="form-input"
                          placeholder="Ad Description"
                          value={row.adDescription}
                        ></textarea>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <select value={row.condition}>
                          <option value="new">New</option>
                          <option value="used">Used</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Year Of Purchase"
                          value={row.yearOfPurchase}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="number"
                          className="form-input"
                          placeholder="Available Quantity"
                          value={row.availableQuantity}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="number"
                          className="form-input"
                          placeholder="Minimum Order Quantity"
                          value={row.minimumOrderQuantity}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Price"
                          value={row.price}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <select value={row.paymentMethod}>
                          <option value="cash">Cash</option>
                          <option value="credit">Credit Card</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <select value={row.serviceMode}>
                          <option value="pickup">Pickup</option>
                          <option value="delivery">Delivery</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="Phone no."
                          value={row.phoneNumber}
                        />
                      </div>
                    </td>
                    <td>
                      <Onoffbutton checked={row.showPhoneNumber} />
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="email"
                          className="form-input"
                          placeholder="Email Id"
                          value={row.emailId}
                        />
                      </div>
                    </td>
                    <td>
                      <Onoffbutton checked={row.showEmail} />
                    </td>
                    <td>
                      <div className="form-grp">
                        <textarea
                          className="form-input"
                          placeholder="Address"
                          value={row.address}
                        ></textarea>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <div className="form-grp">
                          <label className="camera-icon" htmlFor="cameraInput"></label>
                          <input
                            id="cameraInput"
                            type="file"
                            className="form-input"
                            accept="image/*, video/*"
                            capture="environment"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="file"
                          className="form-input"
                          accept=".pdf, .doc, .docx"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Google Drive link"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row snipcss-JxGSH">
          <div className="container">
            <div className="btn-wrap">
              <a href="javascript:;" className="btn btn-primary " onClick={handleAddRow}>
                + Add Row
              </a>
              <a href="javascript:;" className="btn addrows">
                Publish Posts In Private(Free)
              </a>
              <a href="javascript:;" className="btn addrows">
                Publish Posts In Public(Free)
              </a>
              <p className="rightWrap">
                <button className="btn btn-primary mkCta ">
                  Delete Posts/Row
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table_post;
