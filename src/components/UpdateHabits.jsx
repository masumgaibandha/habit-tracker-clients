import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateHabits = () => {
  const data = useLoaderData();
  const habit = data?.result || {};
  const navigate = useNavigate();

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
  } = habit;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedHabit = {
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      frequency: form.frequency.value,
      userPhoto: form.userPhoto.value,
      userName, 
      userEmail, 
      isPublic: form.isPublic.checked,
    };

    fetch(`http://localhost:3000/habits/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Habit updated successfully!");
          navigate("/myhabits");
        } else {
          toast.error("Failed to update habit");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* LEFT INFO */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Update Habit</h1>
          <p className="py-6">
            Modify your habit details. Your progress remains safe.
          </p>
        </div>

        {/* FORM */}
        <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
          <h1 className="text-2xl font-bold text-center pt-3">Update Habit</h1>

          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <fieldset className="space-y-3">
                {/* Title */}
                <div>
                  <label className="label">Habit Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    required
                    className="input w-full bg-gray-100"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="label">Description</label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    required
                    className="textarea w-full bg-gray-100"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="label">Category</label>
                  <select
                    name="category"
                    defaultValue={category}
                    required
                    className="select w-full bg-gray-100"
                  >
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
                    defaultValue={frequency}
                    required
                    className="select w-full bg-gray-100"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                {/* Image */}
                <div>
                  <label className="label">Image URL</label>
                  <input
                    type="url"
                    name="userPhoto"
                    defaultValue={userPhoto}
                    required
                    className="input w-full bg-gray-100"
                  />
                </div>

                {/* User Name (read only) */}
                <div>
                  <label className="label">User Name</label>
                  <input
                    type="text"
                    value={userName}
                    readOnly
                    className="input w-full bg-gray-100"
                  />
                </div>

                {/* User Email (read only) */}
                <div>
                  <label className="label">User Email</label>
                  <input
                    type="email"
                    value={userEmail}
                    readOnly
                    className="input w-full bg-gray-100"
                  />
                </div>

                {/* Public toggle */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="isPublic"
                    defaultChecked={isPublic}
                  />
                  <label className="text-sm">Make this habit public</label>
                </div>

                {/* Submit */}
                <button className="my-btn mt-3 h-10 w-full cursor-pointer">
                  Save Changes
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateHabits;
