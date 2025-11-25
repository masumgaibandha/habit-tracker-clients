import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);

  const {
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    user,
    setUser,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Sign in successful");
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Please input valid credentials");
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
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="py-2 text-sm text-gray-600">
            Sign in to keep tracking your habits, maintain your streaks, and
            stay consistent every day.
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
                  className="input"
                  placeholder="Email"
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
                  className="my-btn mt-4 cursor-pointer h-9 w-full"
                >
                  Sign In
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
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:text-blue-800 font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
