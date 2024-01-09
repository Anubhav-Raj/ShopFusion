import React from "react";
import "./signpu.css"
function signup() {
  return (
    <>
      <div className="backdoptrying">
        <div className="sm-e8y style-RaFYo" id="style-RaFYo">
          <div className="content-weg">
            <div>
              <div className="drawer-mlx">Sign Up</div>
              <div className="sm-social-bjz">
                <div className="goo-aod">Login With Google</div>
                <div className="glpvf">Login With Facebook</div>
              </div>
              <div className="box-8ya size-78k pad-t5w">
                <div className="header-omj">
                  <div className="title-9cx">
                    <h2>Sign Up Using Email</h2>
                  </div>
                </div>
                <form className="form-n23">
                  <div className="input-2d1 label-x5e">
                    <input
                      name="name"
                      placeholder="Name"
                      className="input-fgj"
                      type="text"
                      id="nam-nl6"
                    />
                  </div>
                  <div className="input-2d1 label-x5e">
                    <input
                      name="email"
                      placeholder="Email"
                      className="input-fgj"
                      type="text"
                      id="ema-nop"
                    />
                  </div>
                  <div className="input-2d1 label-x5e">
                    <input
                      name="password"
                      placeholder="Password"
                      className="input-fgj"
                      type="password"
                      id="pas-8jl"
                    />
                  </div>
                  <div className="input-2d1 label-x5e">
                    <div className="submit-3nd">
                      <input
                        className="btn-jgf fla-qal"
                        type="submit"
                        defaultValue="Sign Up"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="box-8ya">
                <div className="item-5nq">
                  <a>Login →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default signup;
