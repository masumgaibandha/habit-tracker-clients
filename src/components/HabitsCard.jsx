import React from "react";
import { Link } from "react-router";

const HabitsCard = ({ habit }) => {
  const {
    _id,
    title,
    description,
    category,
    frequency,
    userName,
    userEmail,
    userPhoto,
    currentStreak,
    bestStreak,
    startDate,
  } = habit;

  const shortDescription =
    description?.length > 90 ? description.slice(0, 90) + "..." : description;

  return (
    <div className="card bg-base-100 shadow-sm rounded-xl border border-gray-200 h-full flex flex-col">
      <div className="card-body flex flex-col">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {category} • {frequency}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="badge badge-outline text-xs">
              🔥 {currentStreak || 0} days
            </span>
            <span className="text-[11px] text-gray-500">
              Best: {bestStreak || 0}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 flex-1">{shortDescription}</p>

        {/* Creator */}
        <div className="mt-4 flex items-center gap-3">
          <div className="avatar">
            <div className="w-9 rounded-full">
              <img
                src={userPhoto || "https://i.ibb.co/8LRrxWQR/Masum2.png"}
                alt={userName}
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-gray-500">{userEmail}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-500">Started: {startDate || "N/A"}</p>

          <Link
            to={`/habits/${_id}`}
            className="my-btn h-9 px-4 text-sm flex items-center justify-center cursor-pointer"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HabitsCard;
