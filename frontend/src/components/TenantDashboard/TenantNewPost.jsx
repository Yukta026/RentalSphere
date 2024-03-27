import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../Utils/sampleDataHarsh.jsx";

const initialFormValues = {
  title: "",
  description: "",
  price: "",
};

const TenantNewPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormValues);

  const handleFileUpload = (e) => {
    setFiles([...files, e.target.files[0]]);

    // const selectedFiles = e.target.files;
    // const newFiles = [];

    // for (let i = 0; i < selectedFiles.length; i++) {
    //   newFiles.push(selectedFiles[i]);
    // }

    // setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      className="bg-white drop-shadow-md rounded-[8px] p-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h3 className="font-semibold text-[22px]">Create new post</h3>
      <div className="flex flex-col gap-2 mt-6">
        <label htmlFor="title" className="font-medium text-[16px]">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange(e)}
          placeholder="title"
          name="title"
          className="input input-bordered w-full "
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="description" className="font-medium text-[16px]">
          Description
        </label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => handleInputChange(e)}
          placeholder="Description"
          name="description"
          className="input input-bordered w-full "
        />
      </div>
      {/* 
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="contactNumber" className="font-medium text-[16px]">
            Contact Number
          </label>
          <input
            type="number"
            value={formData.contactNumber}
            onChange={(e) => handleInputChange(e)}
            placeholder="Contact Number"
            name="contactNumber"
            className="input appearance-none input-bordered w-full "
          />
        </div> */}

      {/* <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="contactNumber" className="font-medium text-[16px]">
            Email
          </label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
            name="email"
            className="input appearance-none input-bordered w-full "
          />
        </div> */}

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="price" className="font-medium text-[16px]">
          Price
        </label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => handleInputChange(e)}
          placeholder="Price"
          name="price"
          className="input input-bordered w-full "
        />
      </div>

      {/* <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="" className="font-medium text-[16px]">
            Address
          </label>
          <textarea
            className="textarea textarea-bordered"
            value={formData.address}
            onChange={(e) => handleInputChange(e)}
            name="address"
            placeholder="Address"
          ></textarea>
        </div> */}

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="image" className="font-medium text-[16px]">
          Select image
        </label>
        <input type="file" name="image" onChange={(e) => handleFileUpload(e)} />
      </div>

      <button
        type="submit"
        className="bg-green-700 text-white tracking-wider rounded-full  mt-6 px-10 py-2"
      >
        Publish new post
      </button>
    </form>
  );
};

export default TenantNewPost;
