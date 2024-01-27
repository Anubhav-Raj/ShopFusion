import React, { useState } from "react";
import "./table.css";
import Trashicon from "./trash-can.png";
import Editicon from "./edit.png";
import CustomCheckbox from "./Costum_checkbox";
import Onoffbutton from "./Onoffbutton";
import AddMobile from "../../pages/mypost/Mobile/AddMobile";

function Table_post() {
  const [rows, setRows] = useState([]);

  return (
    <>
      <div className="snipcss-eBKL4">
        <div className="table-wrap attrTable">
          <AddMobile />
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
                    <td>{row.status}</td>
                    <td>{row.sellerType}</td>
                    <td>
                      <div className="form-grp">
                        {row.sellerName}
                        <span className="err-msg"></span>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">
                        {row.gstId}
                        <span className="err-msg"></span>
                      </div>
                    </td>
                    <td>
                      <div className="form-grp">{row.itemBrandName}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.itemModelName}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.color}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.adTitle}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.adDescription}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.condition}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.yearOfPurchase}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.availableQuantity}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.minimumOrderQuantity}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.price}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.paymentMethod}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.serviceMode}</div>
                    </td>
                    <td>
                      <div className="form-grp">{row.phoneNumber}</div>
                    </td>
                    <td>
                      <Onoffbutton checked={row.showPhoneNumber} />
                    </td>
                    <td>
                      <div className="form-grp">{row.emailId}</div>
                    </td>
                    <td>
                      <Onoffbutton checked={row.showEmail} />
                    </td>
                    <td>
                      <div className="form-grp">{row.address}</div>
                    </td>
                    <td>
                      <div className="form-grp">
                        <div className="form-grp">
                          <label
                            className="camera-icon"
                            htmlFor="cameraInput"
                          ></label>
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
              <a href="javascript:;" className="btn btn-primary ">
                + Add More
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