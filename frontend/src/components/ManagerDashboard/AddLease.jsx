import React, { useState } from "react";

const AddLease = () => {
  const testFormValues = {
    documentName: "Document 1",
    startDate: "22 Fab 2024",
    endDate: "22 Jan 2025",
    monthRent: 1200,
  };

  const [formData, setFormData] = useState(testFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Add New Lease</h1>
      <div>
        <div className="grid items-center grid-cols-1 gap-4 text-sm gap-y-2 lg:grid-cols-3 mt-6">
          <div className="text-gray-600">
            {/* <p className="text-lg font-bold">Hello there</p>
              <p>All fields mandatory*</p> */}

            <div>
              <img
                src="/img/house-document-contract-7780840-6184494.webp"
                alt="lease-img"
              />
            </div>
          </div>

          <div className="lg:col-span-2 drop-shadow-md border border-gray-300 p-6">
            <div className="grid grid-cols-1 gap-4 text-sm gap-y-2 md:grid-cols-6">
              <div className="flex flex-col gap-2 md:col-span-6">
                <label htmlFor="" className="font-medium text-[16px]">
                  Select documents
                </label>
                <input type="file" name="document" />
              </div>

              <div className="mt-4 md:col-span-3">
                <label htmlFor="availableStartDate">Start Date</label>
                <input
                  type="date"
                  name="availableStartDate"
                  className="w-full h-10 px-4 mt-1 border rounded bg-gray-50"
                  // ref={moveInDateRef}
                />
              </div>

              <div className="mt-4 md:col-span-3">
                <label htmlFor="availableEndDate">End Date</label>
                <input
                  type="date"
                  name="availableEndDate"
                  className="w-full h-10 px-4 mt-1 border rounded bg-gray-50"
                  // ref={todaysDateRef}
                />
              </div>

              <div className="mt-4 md:col-span-6">
                <label htmlFor="monthRent">Month Rent</label>
                <input
                  type="text"
                  name="monthRent"
                  className="w-full h-10 px-4 mt-1 border rounded bg-gray-50"
                  value={formData.monthRent}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="mt-4 md:col-span-6">
                <label htmlFor="monthRent">Month Rent</label>
                <input
                  type="text"
                  name="monthRent"
                  className="w-full h-10 px-4 mt-1 border rounded bg-gray-50"
                  // value={formData.monthRent}
                  // onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="mt-4 md:col-span-5">
                <div className="inline-flex items-center">
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLease;
