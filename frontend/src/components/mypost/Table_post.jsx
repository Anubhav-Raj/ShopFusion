import React from "react";
import "./table.css";
function Table_post() {
  return (
    <>
      <div className="snipcss-eBKL4">
        <div className="table-wrap attrTable">
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th data-rel="photos" data-type="InputIcon">
                    Photos
                  </th>
                  <th data-rel="title" data-type="InputText">
                    Ad Title
                  </th>
                  <th data-rel="description" data-type="InputText">
                    Ad Description
                  </th>
                  <th data-rel="zipcode" data-type="InputNumber">
                    Pincode
                  </th>
                  <th data-rel="Price" data-type="InputNumber">
                    Price
                  </th>
                  <th data-rel="No_Negotiate_Price" data-type>
                    I don't want to negotiate
                  </th>
                  <th data-rel="quantity" data-type="InputNumber">
                    Quantity
                  </th>
                  <th>Model</th>
                  <th>Year of Purchase</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr id="tr0">
                  <td>
                    <span
                      className="dsprite camera-icon zero-photo"
                      id="camera0"
                      data-images
                    >
                      <span className="photo-count">0</span>
                    </span>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="title"
                        id="title0"
                        className="form-input"
                        placeholder="Enter title"
                        rel="req:1001,custom:1006"
                      />
                      <span className="err-msg" id="title0_err"></span>
                    </div>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="description"
                        id="description0"
                        className="form-input"
                        placeholder="Enter description"
                        rel="req:1002,custom:1007"
                      />
                      <span className="err-msg" id="description0_err"></span>
                    </div>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode0"
                        className="form-input"
                        placeholder="Enter pincode"
                        rel="req:1004,zip:1009,custom:1113"
                        data-accept="number"
                        maxLength={6}
                      />
                      <span className="err-msg" id="zipcode0_err"></span>
                    </div>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="Price"
                        id="Price0"
                        className="form-input"
                        placeholder="Enter price"
                        rel="req:1003,custom:1119"
                        data-accept="number"
                        maxLength={6}
                      />
                      <span className="err-msg" id="Price0_err"></span>
                    </div>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input
                        type="checkbox"
                        name="No_Negotiate_Price"
                        id="No_Negotiate_Price0"
                        className="form-input common_checkbox"
                        defaultValue={1}
                        defaultChecked
                      />
                      <label htmlFor="No_Negotiate_Price0"></label>
                    </div>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="quantity"
                        id="quantity0"
                        className="form-input"
                        placeholder="Enter quantity"
                        rel="req:1005,custom:1008"
                        data-accept="number"
                        maxLength={2}
                      />
                      <span className="err-msg" id="quantity0_err"></span>
                    </div>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input type="hidden" name="Model" />
                      <input
                        type="text"
                        data-name="Model"
                        className="form-input"
                        data-type="DD"
                        placeholder="Select model"
                        id="Model0"
                        rel="custom:1111"
                      />
                      <i className="sel-arrow-down pull-right"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form-grp">
                      <input type="hidden" name="Purchase_Year" />
                      <input
                        type="text"
                        data-name="Purchase_Year"
                        className="form-input"
                        data-type="DD"
                        placeholder="Select year of purchase"
                        id="Purchase_Year0"
                        rel="custom:1111"
                      />
                      <i className="sel-arrow-down pull-right"></i>
                      <span className="err-msg" id="Purchase_Year0_err"></span>
                      <div
                        id="Purchase_Year0_selectWrap"
                        className="customSelectDD singleType hideCustomselect"
                        
                      >
                      </div>
                    </div>
                  </td>
                  <td className="td-action">
                    <a
                      href="javascript:void(0)"
                      className="action-icon copyRow style-H8Ugn"
                      title="Copy"
                      id="style-H8Ugn"
                    ></a>
                    <span className="action-icon status-icon"></span>
                    <span className="failureErrMsg">
                      Please enter description
                    </span>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row snipcss-JxGSH">
          <div className="container">
            <div className="btn-wrap">
              <a href="javascript:;" className="btn btn-primary ">
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
