import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);

  const {
    createUserWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    updateProfileFunc,
    setLoading,
    setUser,
    signOutFunc, 
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

   
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include uppercase, lowercase, and a number"
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
               signOutFunc()
              .then(() => {
                setLoading(false);
                setUser(null);
                toast.success("Sign up successful. Please sign in.");
                navigate("/signin");
              })
              .catch((err) => {
                setLoading(false);
                toast.error(err.message);
              });
          })
          .catch((e) => {
            setLoading(false);
            toast.error(e.message);
          });
      })
      .catch(() => {
        setLoading(false);
        toast.error("User already registered or invalid data");
      });
  };

  const handleSigninWithGoogle = (e) => {
    e.preventDefault();

    signInWithGoogleFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Google sign in successful");
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Invalid credentials");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-4xl font-bold">Create your HabitFlow account</h1>
          <p className="py-4 text-sm text-gray-600">
            Set up your profile and start tracking the small actions that lead
            to big changes. Your habits, your progress, all in one place.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center pt-3">Sign Up</h1>
          <div className="card-body">
            <form onSubmit={handleSignUp} className="relative">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Input photo URL"
                  className="input"
                  required
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input w-full pr-9"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  >
                    {show ? <FaEye size={16} /> : <IoEyeOff size={16} />}
                  </span>
                </div>

                <button
                  type="submit"
                  className="my-btn mt-4 h-9 cursor-pointer w-full"
                >
                  Sign Up
                </button>
              </fieldset>
            </form>

            <p className="text-center text-sm mt-3">OR</p>
            <button
              onClick={handleSigninWithGoogle}
              className="btn bg-base-100 w-full mt-1"
            >
              <FcGoogle size={20} />
              Sign in with Google
            </button>

            <p className="text-center pt-2 text-sm">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-primary hover:text-blue-800 font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
