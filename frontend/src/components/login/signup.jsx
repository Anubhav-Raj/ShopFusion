import React from "react";
import "./signpu.css";
import { useDispatch } from "react-redux";
import { getUser, useLoginMutation } from "../../redux/API/user";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { userExist, userNotExist } from "../../redux/user.slice";
import toast from "react-hot-toast";
function Signup() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const res = await login({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: "user",
        _id: user.uid,
      });

      if ("data" in res) {
        toast.success(res.data.message);
        const data = await getUser(user.uid);
        dispatch(userExist(data));
      } else {
        toast.error(res.error.data.message);
        dispatch(userNotExist());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signUpWithEmailPassword = async (email, password, name) => {
    try {
      // Create a new user with email and password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Additional logic after successful signup
      const res = await login({
        name: name,
        email: user.email,
        photo: user.photoURL,
        role: "user",
        _id: user.uid,
      });

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
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Validate form inputs (add your validation logic here)

    // Call the signup function
    signUpWithEmailPassword(email, password, name);
  };

  return (
    <>
      <div className="backdoptrying">
        <div className="sm-e8y style-RaFYo" id="style-RaFYo">
          <div className="content-weg">
            <div>
              <div className="drawer-mlx">Sign Up</div>
              <div className="sm-social-bjz">
                <div className="goo-aod" onClick={signInWithGoogle}>
                  Login With Google
                </div>
                <div className="glpvf">Login With Facebook</div>
              </div>
              <div className="box-8ya size-78k pad-t5w">
                <div className="header-omj">
                  <div className="title-9cx">
                    <h2>Sign Up Using Email</h2>
                  </div>
                </div>
                <form className="form-n23" onSubmit={handleFormSubmit}>
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
                      type="email"
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

export default Signup;
