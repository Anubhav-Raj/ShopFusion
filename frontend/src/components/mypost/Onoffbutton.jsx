import React from "react";
import "./onoffbutton.css";
function Onoffbutton() {
  return (
    <>
      <div id="app-cover">
        <div className="row">
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div
                className="button"
                id="button-1"
              >
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onoffbutton;
