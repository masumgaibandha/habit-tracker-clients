import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../components/MyContainer";
import HabitsCard from "../components/HabitsCard";

const PublicHabits = () => {
  const loaded = useLoaderData();
  const initialHabits = loaded?.result || loaded || [];

  const [habits, setHabits] = useState(initialHabits);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setHabits(initialHabits);
  }, [initialHabits]);

  const categories = useMemo(() => {
    const set = new Set();
    habits.forEach((h) => h.category && set.add(h.category));
    return Array.from(set);
  }, [habits]);

  const filteredHabits = habits.filter((habit) => {
    const matchesSearch =
      habit.title?.toLowerCase().includes(search.toLowerCase()) ||
      habit.category?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || habit.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalFollowers = habits.reduce(
    (acc, h) => acc + (h.followers || 0),
    0
  );
  const activeToday = habits.reduce(
    (acc, h) => acc + (h.activeToday || 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#f5f4ff] py-10">
      <MyContainer>

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
            Discover
          </span>

          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            Public Habits
          </h1>
          <p className="text-sm text-gray-600">
            Explore good habits shared by the HabitFlow community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <div className="rounded-2xl p-4 bg-gradient-to-r from-[#6A75FF] to-[#B500F9] text-white">
            <p className="text-xs uppercase tracking-widest mb-1">
              Total Habits
            </p>
            <p className="text-2xl font-bold">{habits.length}</p>
          </div>

          <div className="rounded-2xl p-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
            <p className="text-xs uppercase tracking-widest mb-1">
              Total Followers
            </p>
            <p className="text-2xl font-bold">
              {totalFollowers > 0 ? `${totalFollowers}+` : "N/A"}
            </p>
          </div>

          <div className="rounded-2xl p-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <p className="text-xs uppercase tracking-widest mb-1">
              Active Today
            </p>
            <p className="text-2xl font-bold">
              {activeToday > 0 ? activeToday : "—"}
            </p>
          </div>

          <div className="rounded-2xl p-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
            <p className="text-xs uppercase tracking-widest mb-1">
              Categories
            </p>
            <p className="text-2xl font-bold">
              {categories.length || "—"}
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
          <input
            type="text"
            placeholder="Search habits..."
            className="input w-full bg-white shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select w-full md:w-52 bg-white shadow-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Habits grid */}
        {filteredHabits.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-6 text-center text-sm text-gray-600">
            No public habits found.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredHabits.map((habit) => (
              <HabitsCard key={habit._id} habit={habit} />
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default PublicHabits;
