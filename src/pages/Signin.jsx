import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Signin = () => {
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
          <h1 className="text-2xl font-bold text-center pt-3">Sign Up</h1>
          <div className="card-body">
            <form>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="pt-2">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="my-btn mt-4">Sign in</button>
              </fieldset>
            </form>

            <p className="text-center">OR</p>
            <button className="btn bg-base-100">
              <FcGoogle size={20} />
              Sign in with Google
            </button>
            <p className="text-center pt-2">
              Don't have an account? Please{" "}
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
