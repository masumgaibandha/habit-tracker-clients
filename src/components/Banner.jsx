import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="">
      <div className="">
        <div className="carousel w-full rounded-2xl overflow-hidden">
          {/* SLIDE 1 */}
          <div
            id="slide1"
            className="carousel-item relative w-full bg-gradient-to-r from-[#f5f7ff] to-[#e9f7ff]"
          >
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12 py-10 w-full">
              {/* text */}
              <div className="flex-1 pl-30">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Build Better Habits
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Turn daily actions into
                  <span className="text-[#6A75FF]"> lifelong habits</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-md">
                  Create, track, and celebrate your habits with a simple and
                  clean interface designed to keep you motivated every day.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/signup" className="my-btn h-10 w-40 text-center pt-2">
                    Get Started Free
                  </Link>
                  <Link
                    to="/publichabits"
                    className="text-sm text-gray-700 hover:text-[#6A75FF] font-medium"
                  >
                    Browse public habits →
                  </Link>
                </div>
              </div>
              {/* image */}
              <div className="flex-1 flex justify-center">
                <img
                  src="https://i.ibb.co/9H5SX6v2/banner22.jpg"
                  alt="Habit tracking illustration"
                  className="w-150 mr-40 mt-15 rounded-2xl"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-ghost">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-ghost">
                ❯
              </a>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div
            id="slide2"
            className="carousel-item relative w-full bg-gradient-to-r from-[#fef6ff] to-[#f2f3ff]"
          >
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12 py-10 w-full">
              <div className="flex-1 pl-30">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Stay Consistent
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Visualize your streaks
                  <span className="text-[#B500F9]"> & progress</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-md">
                  See streaks, completion rates, and progress over time so you
                  never lose track of what matters most to you.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/addhabit" className="my-btn h-10 w-42 text-center pt-2">
                    Add Your First Habit
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
               <img
                  src="https://i.ibb.co/7NKyjSQW/banner4-1.jpg"
                  alt="Habit tracking illustration"
                  className="w-150 mr-40 mt-15 rounded-2xl"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-ghost">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-ghost">
                ❯
              </a>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div
            id="slide3"
            className="carousel-item relative w-full bg-gradient-to-r from-[#f4fbff] to-[#fdfbff]"
          >
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12 py-10 w-full">
              <div className="flex-1 pl-30">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Simple & Minimal
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  A clean space for your
                  <span className="text-[#6A75FF]"> daily rituals</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-md">
                  No distractions. Just your habits, organized in a beautiful,
                  minimal dashboard that feels good to use.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/signin" className="my-btn h-10 w-40 text-center pt-2">
                    Continue Tracking
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://i.ibb.co/VY8W7fRc/banner3-1.jpg"
                  alt="Minimal dashboard illustration"
                  className="w-150 mr-40 mt-15 rounded-2xl"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-ghost">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-ghost">
                ❯
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
