import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);

  const { 
    signInWithEmailAndPasswordFunc, 
    signInWithGoogleFunc, 
    signOutFunc, 
    sendPasswordResetEmailFunc,
    user, setUser,
  } =
    useContext(AuthContext);

  const emailRef = useRef(null);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Signin clicked", { email, password });

    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // will be delete
        if (!res.user?.emailVerified) {
          toast.error("Your email is not verified");
          return;
        }
        // above will be delete
        setUser(res.user);
        toast.success("Sign in successful");
      })
      .catch((error) => {
        toast.error("Please input valid credential");
      });
  };

  const handleSigninWithGoogle = (e) => {
    e.preventDefault();
    console.log("clicked in Google");
    // signInWithPopup(auth, googleProvider)
    signInWithGoogleFunc()
      .then((res) => {
        setUser(res.user);
        toast.success("Google sign in successful");
      })
      .catch((error) => {
        toast.error("Invalid credential");
      });
  };
  console.log(user);

  
  const handleForgotPassword = (e) => {
    const email = emailRef.current.value;
    console.log(email);
    // sendPasswordResetEmail(auth, email)
    sendPasswordResetEmailFunc(email)
      .then((res) => {
        toast.success("Reset url sent to your email");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center pt-3">Sign In</h1>
          <div className="card-body">
            
              <form onSubmit={handleSignin} className="relative">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-6 top-28 cursor-pointer"
                  >
                    {show ? <FaEye size={15} /> : <IoEyeOff size={15} />}
                  </span>
                  <div className="pt-2">
                    <button
                      onClick={handleForgotPassword}
                      type="button"
                      className="link link-hover"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <button
                    type="submit"
                    className=" my-btn mt-2 cursor-pointer h-8 "
                  >
                    Sign in
                  </button>
                </fieldset>
              </form>
            

            <p className="text-center">OR</p>
            <button
              onClick={handleSigninWithGoogle}
              className="btn bg-base-100"
            >
              <FcGoogle size={20} />
              Sign in with Google
            </button>
            <p className="text-center pt-2">
              Didn't have an account? Please{" "}
              <Link
                to={"/signup"}
                className="text-primary hover:text-blue-800 font-semibold"
              >
                Sign up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
