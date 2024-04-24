import React, { useState, useEffect } from "react";
import "./login.css";
import toast from "react-hot-toast";
import { getGoogleUrl } from "../../utils/getGoogleUrl.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/API/user2.js";
function Login({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  // 👇 API Login Mutation
  const [loginUser, { isLoading, isError, error, isSuccess, data }] =
    useLoginUserMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const from = ((location.state || {}).from || {}).pathname || "/";
  useEffect(() => {
    if (isSuccess) {
      toast.success("You successfully logged in");
      navigate(from);
    }
    if (isError) {
      toast.error(error.data.message);
    }
  }, [isLoading]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Email Required");
      return;
    }
    if (!password) {
      toast.error("Password Required");
      return;
    }
    const values = {
      email,
      password,
    };

    loginUser(values);
    reset();
  };

  return isVisible ? (
    <>
      <div className="backdoptrying">
        <div className="sm-wqf style-MAi93" id="style-MAi93">
          <div className="content-gtx">
            <div>
              <div className="drawer-6c4">
                Login
                <button type="button" className="btn-close" onClick={onClose}>
                  <span className="icon-cross"></span>
                  <span className="visually-hidden">Close</span>
                </button>
              </div>

              <div className="sm-social-kpy">
                <a className="goo-3ji" href={getGoogleUrl(from)}>
                  Login With Google
                </a>
              </div>

              <div className="box-ntd size-6o5 pad-b31">
                <div className="header-vc8">
                  <div className="title-bkx">
                    <h2>Login Using Email</h2>
                  </div>
                </div>
                <form className="form-hjp" onSubmit={(e) => onSubmitHandler(e)}>
                  <div className="input-d7q label-kan">
                    <input
                      name="email"
                      placeholder="Email"
                      className="input-13o"
                      type="text"
                      id="use-42d"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-d7q label-kan">
                    <input
                      name="password"
                      placeholder="Password"
                      className="input-13o"
                      type="password"
                      id="pas-ekg"
                      onChange={(e) => setPassword(e.target.value)}
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
                  <Link onClick={onClose} to={"/forgot_password"}>Forgot Password →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default Login;
