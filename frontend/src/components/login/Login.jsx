import React from "react";
import "./login.css";
import Signup from "./signup";
function Login() {
  return (
    <>
      <div className="backdoptrying">
        <div className="sm-wqf style-MAi93" id="style-MAi93">
          <div className="content-gtx">
            <div>
              <div className="drawer-6c4">Login</div>
              <div className="sm-social-kpy">
                <div className="goo-3ji">Login With Google</div>
                <div className="fbbri">Login With Facebook</div>
              </div>
              <div className="box-ntd size-6o5 pad-b31">
                <div className="header-vc8">
                  <div className="title-bkx">
                    <h2>Login Using Email</h2>
                  </div>
                </div>
                <form className="form-hjp">
                  <div className="input-d7q label-kan">
                    <input
                      name="username"
                      placeholder="Email"
                      className="input-13o"
                      type="text"
                      id="use-42d"
                    />
                  </div>
                  <div className="input-d7q label-kan">
                    <input
                      name="password"
                      placeholder="Password"
                      className="input-13o"
                      type="password"
                      id="pas-ekg"
                    />
                  </div>
                  <div className="input-d7q label-kan">
                    <div className="submit-5te">
                      <input
                        className="btn-etp fla-vgc"
                        type="submit"
                        defaultValue="Login"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="box-ntd">
                <div className="item-gt5">
                  <a>Sign Up →</a>
                </div>
                <div className="item-gt5">
                  <a>Forgot Password →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
