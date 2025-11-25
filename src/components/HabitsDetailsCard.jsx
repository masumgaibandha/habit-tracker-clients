import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import MyContainer from "../components/MyContainer";

const HabitsDetailsCard = () => {
  const data = useLoaderData();
  const initialHabit = data?.result || data || {};

  const [habit, setHabit] = useState(initialHabit);
  const [completionHistory, setCompletionHistory] = useState(
    initialHabit.completionHistory || []
  );

  useEffect(() => {
    setHabit(initialHabit);
    setCompletionHistory(initialHabit.completionHistory || []);
  }, [initialHabit]);

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

  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const completedToday = completionHistory.includes(todayStr);

  const { completedLast30, progressPercent } = useMemo(() => {
    if (!completionHistory.length) {
      return { completedLast30: 0, progressPercent: 0 };
    }

    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 29);

    const count = completionHistory.filter((iso) => {
      const d = new Date(iso);
      return !isNaN(d) && d >= thirtyDaysAgo && d <= today;
    }).length;

    return {
      completedLast30: count,
      progressPercent: Math.round((count / 30) * 100),
    };
  }, [completionHistory]);

  const handleMarkComplete = () => {
    if (!_id) {
      toast.error("Habit not found");
      return;
    }

    if (completedToday) {
      toast.error("Already completed for today");
      return;
    }

    fetch(
      `https://habit-tracker-server-eta.vercel.app/habits/${_id}/complete`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const updated = result.updatedHabit;

          setCompletionHistory(updated.completionHistory);
          setHabit((prev) => ({
            ...prev,
            currentStreak: updated.currentStreak,
            bestStreak: updated.bestStreak,
            completionHistory: updated.completionHistory,
          }));

          toast.success("Marked as complete!");
        } else {
          toast.error(result.message || "Already completed today");
        }
      })
      .catch(() => toast.error("Something went wrong"));
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
        <div className="card bg-base-100 shadow-xl rounded-2xl p-6 md:p-8 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Habit Details
              </p>
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <p className="text-sm text-gray-500 mt-1">
                {category} • {frequency}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    src={userPhoto || "https://i.ibb.co/8LRrxWQR/Masum2.png"}
                    alt={userName || title}
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

          {userPhoto && (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={userPhoto}
                alt={title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          )}

          <div className="border-t border-gray-100" />

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 rounded-xl bg-base-200">
                <p className="text-gray-500 text-xs uppercase">Category</p>
                <p className="font-semibold">{category}</p>
              </div>
              <div className="p-3 rounded-xl bg-base-200">
                <p className="text-gray-500 text-xs uppercase">Frequency</p>
                <p className="font-semibold">{frequency}</p>
              </div>
              <div className="p-3 rounded-xl bg-base-200">
                <p className="text-gray-500 text-xs uppercase">Start Date</p>
                <p className="font-semibold">{startDate || "Not set"}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-base-200 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-xs uppercase">
                  Progress (last 30 days)
                </p>
                <span className="text-xs font-semibold">
                  {completedLast30}/30 days • {progressPercent}%
                </span>
              </div>

              <progress
                className="progress progress-primary w-full"
                value={progressPercent}
                max="100"
              />

              <div className="flex flex-wrap gap-4 text-sm">
                <span>🔥 Current streak: {currentStreak || 0} days</span>
                <span>🏆 Best streak: {bestStreak || 0} days</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleMarkComplete}
              disabled={completedToday}
              className={`my-btn h-10 px-6 ${
                completedToday
                  ? "opacity-70 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              {completedToday ? "Completed Today" : "Mark Complete"}
            </button>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default HabitsDetailsCard;
