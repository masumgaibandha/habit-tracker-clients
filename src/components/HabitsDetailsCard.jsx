import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import MyContainer from "../components/MyContainer";

const HabitsDetailsCard = () => {
  const data = useLoaderData();
  const habit = data?.result || {};

  const {
    _id,
    title,
    description,
    category,
    frequency,
    userName,
    userEmail,
    userPhoto,
    isPublic,
    startDate,
    currentStreak,
    bestStreak,
  } = habit;

  const handleMarkComplete = () => {
    if (!_id) {
      toast.error("Habit not found");
      return;
    }

    fetch(`http://localhost:3000/habits/${_id}/complete`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Marked as complete for today");
        } else {
          toast.error(result.message || "Already completed today");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

 
  if (!title && !description) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <p className="text-sm text-gray-600">
          Habit details could not be loaded.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <MyContainer className="max-w-3xl">
        <div className="card bg-base-100 shadow-xl rounded-2xl p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                Habit Details
              </p>
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <p className="text-sm text-gray-500 mt-1">
                {category} • {frequency}
              </p>
            </div>

            {/* Creator info */}
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    src={userPhoto || "https://i.ibb.co/8LRrxWQR/Masum2.png"}
                    alt={userName}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">{userName}</p>
                <p className="text-xs text-gray-500">{userEmail}</p>
                <p className="text-[11px] mt-1">
                  Visibility:{" "}
                  <span className="font-semibold">
                    {isPublic ? "Public" : "Private"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="border-t border-gray-100 my-4" />

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Description</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 rounded-xl bg-base-200">
                <p className="text-gray-500 text-xs uppercase">Category</p>
                <p className="font-semibold mt-1">{category}</p>
              </div>
              <div className="p-3 rounded-xl bg-base-200">
                <p className="text-gray-500 text-xs uppercase">Frequency</p>
                <p className="font-semibold mt-1">{frequency}</p>
              </div>
              <div className="p-3 rounded-xl bg-base-200">
                <p className="text-gray-500 text-xs uppercase">Start Date</p>
                <p className="font-semibold mt-1">{startDate || "Not set"}</p>
              </div>
            </div>

            {(currentStreak !== undefined || bestStreak !== undefined) && (
              <div className="p-4 rounded-xl bg-base-200">
                <p className="text-gray-500 text-xs uppercase mb-2">Progress</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span>🔥 Current streak: {currentStreak || 0} days</span>
                  <span>🏆 Best streak: {bestStreak || 0} days</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap justify-end">
            <button
              type="button"
              onClick={handleMarkComplete}
              className="my-btn h-10 px-6 cursor-pointer"
            >
              Mark Complete
            </button>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default HabitsDetailsCard;
