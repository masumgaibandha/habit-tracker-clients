import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import MyContainer from "../components/MyContainer";
import HabitsCard from "../components/HabitsCard";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://habit-tracker-server-eta.vercel.app/my-habits?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHabits(data.result || data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load habits");
      });
  }, [user]);

  const filteredHabits =
    filter === "All"
      ? habits
      : habits.filter((habit) => habit.frequency === filter);

  const handleDelete = (id) => {
    if (!confirm("Are you sure?")) return;

    fetch(`https://habit-tracker-server-eta.vercel.app/habits/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setHabits((prev) => prev.filter((h) => h._id !== id));
          toast.success("Habit deleted");
        }
      });
  };

  const handleMarkComplete = (id) => {
    fetch(`https://habit-tracker-server-eta.vercel.app/habits/${id}/complete`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setHabits((prev) =>
            prev.map((h) => (h._id === id ? { ...h, completedToday: true } : h))
          );
          toast.success("Marked as complete for today");
        } else {
          toast.error(result.message || "Already completed today");
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="min-h-screen bg-[#f5f4ff] py-10">
      <MyContainer>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">My Habits</h1>
            <p className="text-sm text-gray-600">
              Track your progress and stay consistent.
            </p>
          </div>
          <Link to="/addhabit" className="my-btn h-10 px-4 text-sm pt-2">
            + Add New Habit
          </Link>
        </div>

        {loading ? (
          <div className="py-10 flex justify-center">
            <BounceLoader color="#6A75FF" />
          </div>
        ) : filteredHabits.length === 0 ? (
          <div className="bg-white rounded-xl p-6 text-center text-sm">
            No habits found.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredHabits.map((habit) => (
              <div
                key={habit._id}
                className="bg-white rounded-xl p-3 border shadow-sm flex flex-col"
              >
                {/* CARD CONTENT */}
                <HabitsCard habit={habit} />

                {/* BUTTONS NOW INSIDE CARD BOX */}
                <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-xs">
                  {/* Mark Complete */}
                  <button
                    onClick={() => handleMarkComplete(habit._id)}
                    disabled={habit.completedToday}
                    className={`px-3 py-1 rounded-full font-medium cursor-pointer
      ${
        habit.completedToday
          ? "bg-emerald-100 text-emerald-700"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }
    `}
                  >
                    {habit.completedToday ? "Completed" : "Mark Complete"}
                  </button>

                  <div className="flex gap-2">
                    {/* Edit */}
                    <Link
                      to={`/update-habit/${habit._id}`}
                      className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200
      text-slate-700 font-medium cursor-pointer"
                    >
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(habit._id)}
                      className="px-3 py-1 rounded-full bg-red-100 hover:bg-red-200
      text-red-600 font-medium cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {/* END BUTTONS */}
              </div>
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default MyHabits;
