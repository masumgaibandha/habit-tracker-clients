import { useEffect, useState } from "react";
import { Link } from "react-router"; 
import MyContainer from "./MyContainer";
import { BounceLoader } from "react-spinners";

const FeaturedHabits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/habits")
      .then((res) => res.json())
      .then((data) => {
        const publicHabits = data.filter((h) => h.isPublic);
        setHabits(publicHabits);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-10 flex justify-center">
        <BounceLoader color="#6A75FF" />
      </div>
    );
  }

  if (!habits.length) {
    return (
      <section className="py-12 bg-base-100">
        <MyContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-[#6A75FF]">Habits</span>
            </h2>
            <p className="text-gray-600 mt-2">
              No public habits found right now. Check back later!
            </p>
          </div>
        </MyContainer>
      </section>
    );
  }

  return (
    <section className="py-12 bg-base-100">
      <MyContainer>
        {/* Section heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-[#6A75FF]">Habits</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Explore some of the most popular public habits to get started and
            stay motivated every day.
          </p>
        </div>

        {/* Grid of habit cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {habits.map((habit) => (
            <div
              key={habit._id}
              className="card bg-base-100 shadow-sm rounded-xl border border-gray-100 flex flex-col h-full"
            >
              <div className="card-body flex flex-col">
                {/* Title + streak */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">
                      {habit.title || "Untitled Habit"}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {habit.category || "General"} • {habit.frequency || "Daily"}
                    </p>
                  </div>
                  <span className="badge badge-outline text-xs">
                    Streak: {habit.currentStreak || 0} 🔥
                  </span>
                </div>

                  <p className="text-sm text-gray-600 flex-1 line-clamp-3">
                  {habit.description ||
                    "No description provided for this habit yet."}
                </p>

                {/* Creator info */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-9 rounded-full">
                      <img
                        src={
                          habit.userPhoto ||
                          "https://i.ibb.co/8LRrxWQR/Masum2.png"
                        }
                        alt={habit.userName || "User"}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {habit.userName || "Anonymous User"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {habit.userEmail || "No email provided"}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Started: {habit.startDate || "N/A"}
                  </p>
                  <Link
                    to={`/habits/${habit._id}`}
                    className="text-sm font-medium text-[#6A75FF] hover:text-[#B500F9] transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default FeaturedHabits;
