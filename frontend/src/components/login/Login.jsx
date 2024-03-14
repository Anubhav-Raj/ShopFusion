import React, { useState, useEffect } from "react";
import "./login.css";
import Signup from "./signup";
import { auth } from "../../firebase.js";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userExist, userNotExist } from "../../redux/user.slice";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  getUser,
  useLoginMutation,
  useUserByIDMutation,
} from "../../redux/API/user.js";
import { loginSuccess } from "../../redux/API/user_slice/login.slice.js";
import { getGoogleUrl } from "../../utils/getGoogleUrl.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/API/user2.js";
import { Button } from "antd";
function Login({ onClose }) {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [isVisible, setIsVisible] = useState(true);

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const res = await login({
        email: email,
        password: password,
        method: "byEmail",
      });
      console.log(res);
      if ("data" in res) {
        localStorage.setItem("ZoneHub", res.data.token);
        dispatch(loginSuccess(res.data));
        toast.success(res.data.message);
        onClose();
      } else {
        toast.error(res.error.data.message);
      }

      setIsVisible(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 👇 API Login Mutation
  const [loginUser, { isLoading, isError, error, isSuccess }] =
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
      if (Array.isArray(error.data.error)) {
        error.data.error.forEach((el) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error(error.data.message, {
          position: "top-right",
        });
      }
    }
  }, [isLoading, isSuccess, isError, error, navigate, from]);

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [isSubmitSuccessful, reset]);

  const onSubmitHandler = (values) => {
    // 👇 Executing the loginUser Mutation
    loginUser(values);
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
                <form className="form-hjp" onSubmit={handleEmailLogin}>
                  <div className="input-d7q label-kan">
                    <input
                      name="email"
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
  ) : null;
}

export default Login;
