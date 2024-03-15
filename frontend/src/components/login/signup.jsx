import React, { useState, useEffect } from "react";
import "./signpu.css";
import { useRegisterUserMutation } from "../../redux/API/user2";
import toast from "react-hot-toast";
import Loader from "../loader";

function Signup({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false); // State to control registration process

  // Calling the Register Mutation
  const [registerUser, { isLoading, isSuccess, error, isError, data }] =
    useRegisterUserMutation();

  const handleEmailSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password length must be at least 6 characters.");
      return;
    }

    // Set isRegistering to true to disable the button
    setIsRegistering(true);

    // Create a new user with email and password
    registerUser({
      name: name,
      email: email,
      password: password,
      method: "byEmail",
    });
  };

  useEffect(() => {
    if (isRegistering) {
      <Loader />;
    }
    if (isSuccess) {
      toast.success("Registered successfully Verify Your Mail!");

      setIsRegistering(false); // Reset isRegistering state after successful registration
      return;
    }
    if (isError) {
      toast.error("Registration failed!");
      setIsRegistering(false); // Reset isRegistering state if there's an error during registration
      return;
    }
  }, [isSuccess, isError, isRegistering]);

  return isVisible ? (
    <div className="backdoptrying">
      <div className="sm-e8y style-RaFYo" id="style-RaFYo">
        <div className="content-weg">
          <div>
            <div className="drawer-mlx">
              Sign Up
              <button type="button" className="btn-close" onClick={onClose}>
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
                    disabled={isRegistering} // Disable input during registration
                  />
                </div>
                <div className="input-2d1 label-x5e">
                  <input
                    name="email"
                    placeholder="Email"
                    className="input-fgj"
                    type="text"
                    id="ema-nop"
                    disabled={isRegistering} // Disable input during registration
                  />
                </div>
                <div className="input-2d1 label-x5e">
                  <input
                    name="password"
                    placeholder="Password"
                    className="input-fgj"
                    type="password"
                    id="pas-8jl"
                    disabled={isRegistering} // Disable input during registration
                  />
                </div>
                <div className="input-2d1 label-x5e">
                  <div className="submit-3nd">
                    {isLoading ? (
                      <button className="btn-jgf fla-qal" type="submit">
                        {" "}
                        Loding......{" "}
                      </button>
                    ) : (
                      <input
                        className="btn-jgf fla-qal"
                        type="submit"
                        value={isRegistering ? "Signing Up..." : "Sign Up"}
                      />
                    )}
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
  ) : null;
}

export default Signup;
