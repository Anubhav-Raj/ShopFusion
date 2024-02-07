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
import { getUser, useLoginMutation } from "../../redux/API/user.js";

function Login() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      setIsVisible(true);
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      const res = await login({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        password: "none",
        role: "user",
      });
      console.log(res);
      if ("data" in res) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        const data = await getUser(user.uid);
        data.token = res.data.token;
        dispatch(userExist(data));
      } else {
        toast.error(res.error.data.message);
        dispatch(userNotExist());
      }

      setIsVisible(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

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

      if ("data" in res) {
        toast.success(res.data.message);
        // localStorage.setItem("token", res.data.token);
        // const data = await getUser(user.uid);
        // data.token = res.data.token;
        // dispatch(userExist(data));
      } else {
        toast.error(res.error.data.message);
        // dispatch(userNotExist());
      }

      setIsVisible(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return isVisible ? (
    <>
      <div className="backdoptrying">
        <div className="sm-wqf style-MAi93" id="style-MAi93">
          <div className="content-gtx">
            <div>
              <div className="drawer-6c4">
                Login
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseClick}
                >
                  <span className="icon-cross"></span>
                  <span className="visually-hidden">Close</span>
                </button>
              </div>

              <div className="sm-social-kpy">
                <div className="goo-3ji" onClick={signInWithGoogle}>
                  Login With Google
                </div>
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
