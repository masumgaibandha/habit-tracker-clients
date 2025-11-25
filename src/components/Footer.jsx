import React from "react";
import { Link } from "react-router";
import MyContainer from "./MyContainer";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t mt-10">
      <MyContainer className="px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/yF5QRccH/logo.jpg"
                alt="HabitFlow Logo"
                className="w-10 rounded-xl"
              />
              <span className="text-xl font-bold">HabitFlow</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-md">
              HabitFlow helps you turn small, daily actions into powerful
              routines. Track your progress, build streaks, and grow a lifestyle
              you’re proud of.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link to="/" className="hover:text-primary cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/publichabits"
                  className="hover:text-primary cursor-pointer"
                >
                  Browse Public Habits
                </Link>
              </li>
              <li>
                <Link
                  to="/addhabit"
                  className="hover:text-primary cursor-pointer"
                >
                  Add Habit
                </Link>
              </li>
              <li>
                <Link
                  to="/myhabits"
                  className="hover:text-primary cursor-pointer"
                >
                  My Habits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Contact & Legal
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Email:{" "}
              <a
                href="mailto:support@habitflow.app"
                className="text-primary hover:underline cursor-pointer"
              >
                support@habitflow.app
              </a>
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Location: Dhaka, Bangladesh
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <button className="hover:text-primary cursor-pointer">
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button className="hover:text-primary cursor-pointer">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} HabitFlow. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">Follow us</span>
            <div className="flex items-center gap-3">
              {/* X (Twitter) */}
              <a
                href="#"
                aria-label="Follow on X"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white hover:border-black transition cursor-pointer"
              >
                X
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition cursor-pointer"
              >
                f
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold hover:bg-pink-500 hover:text-white hover:border-pink-500 transition cursor-pointer"
              >
                IG
              </a>
              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition cursor-pointer"
              >
                GH
              </a>
            </div>
          </div>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
