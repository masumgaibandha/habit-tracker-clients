import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          to="/"
          className="my-btn h-10 px-6 inline-flex items-center justify-center cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
