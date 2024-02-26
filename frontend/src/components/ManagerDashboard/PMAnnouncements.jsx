import React, { useState } from "react";
import { sampleAnnouncements } from "../../Utils/SampleData.jsx";

const PMAnnouncements = () => {
  const [announcements, setAnnouncements] = useState(sampleAnnouncements);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  const handleCreateAnnouncement = (newAnnouncement) => {
    const id = announcements.length + 1;
    const date = new Date().toISOString().slice(0, 10);
    const announcement = { ...newAnnouncement, id, date };
    setAnnouncements([announcement, ...announcements]);
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <div className="flex justify-between mb-10 items-center p-4">
        <h1 className="text-2xl font-bold">Property Manager Announcements</h1>
        <button
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Create Announcement
        </button>
      </div>

      <div className="divide-y divide-gray-200 p-10">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="py-4">
            <h2 className="text-lg font-semibold">{announcement.title}</h2>
            <p className="text-sm text-gray-600">{announcement.content}</p>
            <p className="text-xs text-gray-400">{announcement.date}</p>
          </div>
        ))}
      </div>

      <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-6">Create New Announcement</h3>

          <div className="modal-action flex flex-col justify-center ">
            <form method="dialog" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-4"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="input input-bordered input-primary w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-4"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  className="input input-bordered input-primary w-full h-40"
                  rows="4"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Announcement
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PMAnnouncements;
