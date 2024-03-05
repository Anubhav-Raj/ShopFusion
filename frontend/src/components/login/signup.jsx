import React, { useState, useEffect } from "react";
import "./signpu.css";
import { useDispatch } from "react-redux";
import {
  getUser,
  useLoginMutation,
  useSignupMutation,
} from "../../redux/API/user";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { userExist, userNotExist } from "../../redux/user.slice";
import toast from "react-hot-toast";
function Signup({onClose }) {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const [isVisible, setIsVisible] = useState(true);

  // const handleCloseClick = () => {
  //   setIsVisible((pre) => !pre);
  // };

  // useEffect(() => {
  //   return () => {
  //     setIsVisible(true);
  //   };
  // }, []);

  const handleEmailSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      // Create a new user with email and password

      const res = await signup({
        name: name,
        email: email,
        password: password,
        method: "byEmail",
      });
      if ("data" in res) {
        toast.success(res.data.message);
        onClose();
        // localStorage.setItem("ZoneHub", res.data.token);
      } else {
        toast.error(res.error.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return isVisible ? (
    <>
      <div className="backdoptrying">
        <div className="sm-e8y style-RaFYo" id="style-RaFYo">
          <div className="content-weg">
            <div>
              <div className="drawer-mlx">
                Sign Up
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                >
                  <span className="icon-cross"></span>
                  <span className="visually-hidden">Close</span>
                </button>
              </div>
              <div className="sm-social-bjz">
                <div className="goo-aod">Login With Google</div>
              </div>
              <div className="box-8ya size-78k pad-t5w">
                <div className="header-omj">
                  <div className="title-9cx">
                    <h2>Sign Up Using Email</h2>
                  </div>
                </div>
                <form className="form-n23" onSubmit={handleEmailSignup}>
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
  ) : null;
}

export default Signup;
