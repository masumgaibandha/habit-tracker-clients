import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import { BounceLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if(loading){
    return <div className="h-screen flex justify-center items-center"><BounceLoader color="#15e9d0"/></div>
  }
  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
