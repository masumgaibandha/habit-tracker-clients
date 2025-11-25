import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const AddHabit = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      title: form.title.value,
      category: form.category.value,
      userPhoto: form.userPhoto.value,
      userName: user?.displayName,
      userEmail: user?.email,
      description: form.description.value,
      frequency: form.frequency.value,
      reminderTime: form.reminderTime.value,
      isPublic: form.isPublic.checked,
    };
    fetch("https://habit-tracker-server-eta.vercel.app/habits", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data?.insertedId ||
          data?._id ||
          data?.acknowledged ||
          data?.success
        ) {
          toast.success("Habit added successfully!");
          form.reset();
        } else {
          toast.error("Failed to add habit.");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* LEFT TEXT SIDE */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Create a New Habit</h1>
          <p className="py-6">
            Build powerful routines by adding habits you want to track daily,
            weekly, or whenever it matters most to you.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center pt-3">
            Create a New Habit
          </h1>
          <p className="text-center">
            Fill in the details below to start tracking your new habit.
          </p>

          <div className="card-body">
            <form onSubmit={handleSubmit} className="relative">
              <fieldset className="px-2 md:px-5 space-y-3">
                {/* Habit Title */}
                <div>
                  <label className="label">Habit Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. Morning Meditation"
                    className="w-full bg-gray-100 p-2 rounded"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="label">Description</label>
                  <textarea
                    name="description"
                    className="w-full bg-gray-100 p-2 rounded min-h-28"
                    placeholder="Describe your habit and why it's important for you..."
                    required
                  ></textarea>
                </div>

                {/* Category */}
                <div>
                  <label className="label">Category</label>
                  <select
                    name="category"
                    className="w-full bg-gray-100 p-2 rounded"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Morning">Morning</option>
                    <option value="Work">Work</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Evening">Evening</option>
                    <option value="Study">Study</option>
                  </select>
                </div>

                {/* Frequency */}
                <div>
                  <label className="label">Frequency</label>
                  <select
                    name="frequency"
                    className="w-full bg-gray-100 p-2 rounded"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select Frequency
                    </option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                {/* Reminder Time */}
                <div>
                  <label className="label">Reminder Time</label>
                  <input
                    type="time"
                    name="reminderTime"
                    className="w-full bg-gray-100 p-2 rounded"
                    required
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="label">Image URL</label>
                  <input
                    type="url"
                    name="userPhoto"
                    placeholder="Paste image URL"
                    className="w-full bg-gray-100 p-2 rounded"
                    required
                  />
                </div>

                {/* User Name */}
                <div>
                  <label className="label">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    className="w-full bg-gray-100 p-2 rounded"
                    value={user?.displayName || ""}
                    readOnly
                  />
                </div>

                {/* User Email */}
                <div>
                  <label className="label">User Email</label>
                  <input
                    type="email"
                    name="userEmail"
                    className="w-full bg-gray-100 p-2 rounded"
                    value={user?.email || ""}
                    readOnly
                  />
                </div>

                {/* isPublic */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    id="isPublic"
                    type="checkbox"
                    name="isPublic"
                    defaultChecked
                  />
                  <label htmlFor="isPublic" className="text-sm">
                    Make this habit public
                  </label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="my-btn mt-4 h-10 px-6 rounded cursor-pointer text-white w-full"
                >
                  Add Habit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
