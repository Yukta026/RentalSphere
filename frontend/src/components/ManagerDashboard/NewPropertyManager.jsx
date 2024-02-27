import Axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth.jsx";

const NewPropertyManager = () => {
  const { auth } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    propertyDescription: "",
    monthlyRent: "",
    numBathrooms: "",
    numBedrooms: "",
    propertyAddress: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    licenseNumber: "",
    phoneNumber: "",
    date: "",
    availableMoveInDate: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const updatedImages = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          updatedImages.push(reader.result);
          if (updatedImages.length === files.length) {
            setFormData({ ...formData, images: updatedImages });
          }
        };
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auth && auth.email) {
      setFormData({ ...formData, email: auth.email });
      console.log(formData);
    }

    // try {
    //   await Axios.post(
    //     "http://localhost:8000/property-managers",
    //     formDataToSend
    //   );
    //   alert("Form submitted successfully!");
    //   setFormData({
    //     email: "",
    //     propertyDescription: "",
    //     monthlyRent: "",
    //     numBathrooms: "",
    //     numBedrooms: "",
    //     propertyAddress: "",
    //     city: "",
    //     country: "",
    //     state: "",
    //     zipCode: "",
    //     licenseNumber: "",
    //     phoneNumber: "",
    //     date: "",
    //     availableMoveInDate: "",
    //     images: [],
    //   });
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <form
      className="min-h-screen p-6 bg-gray-100 flex items-center justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="container max-w-screen-lg mx-auto flex flex-col">
        <h1 className="font-semibold text-xl text-gray-600">RentalSphere</h1>
        <h2 className="text-gray-500 mb-6">
          Request Form To Become a Property Manager
        </h2>

        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-bold text-lg">Hello there</p>
              <p>Please fill out all the fields</p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="mt-4 md:col-span-5">
                  <label htmlFor="propertyDescription">
                    Property Description
                  </label>
                  <textarea
                    name="propertyDescription"
                    className="h-24 border mt-1 rounded px-2 w-full bg-gray-50 resize-none pt-2"
                    value={formData.propertyDescription}
                    maxLength={80}
                    onChange={(e) => handleInputChange(e)}
                  ></textarea>
                </div>
                <div className="mt-4 md:col-span-2">
                  <label htmlFor="monthlyRent">Monthly Rent</label>
                  <input
                    type="text"
                    name="monthlyRent"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.monthlyRent}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="mt-4 md:col-span-1">
                  <label htmlFor="bathrooms">No. of Bathrooms</label>
                  <input
                    type="text"
                    name="bathrooms"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.numBathrooms}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                <div className="mt-4 md:col-span-1">
                  <label htmlFor="bedrooms">No. of Bedrooms</label>
                  <input
                    type="text"
                    name="bedrooms"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.numBedrooms}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="mt-4 md:col-span-3">
                  <label htmlFor="address">Address/Street</label>
                  <input
                    type="text"
                    name="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.propertyAddress}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                <div className="mt-4 md:col-span-2">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.city}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="mt-4 md:col-span-2">
                  <label htmlFor="country">Country/Region</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country"
                      placeholder="Country"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={formData.country}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="mt-4 md:col-span-2">
                  <label htmlFor="state">State/Province</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      placeholder="State"
                      type="text"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={formData.state}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="mt-4 md:col-span-1">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="mt-4 md:col-span-3">
                  <label htmlFor="LicenseNumber">Identification Number</label>
                  <input
                    type="text"
                    name="licenseNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.licenseNumber}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                <div className="mt-4 md:col-span-2">
                  <label htmlFor="PhoneNumber">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                {/* <div className="mt-4 md:col-span-1">
                  <label htmlFor="Date">Date</label>
                  <input
                    type="Date"
                    name="date"
                    id="zipcode"
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-36 bg-gray-50"
                    value={formData.date}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div> */}

                {/* New fields */}

                <div className="mt-4 md:col-span-2">
                  <label htmlFor="moveInDate">Move In Date</label>
                  <input
                    type="date"
                    name="moveInDate"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={formData.availableMoveInDate}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                <div className="mt-4 md:col-span-5 flex flex-col">
                  <label htmlFor="images" className="">
                    Upload Images (up to 4)
                  </label>
                  <input
                    type="file"
                    name="images"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    className="mt-4"
                  />
                </div>

                {/* <div className="mt-4 md:col-span-5">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      className="form-checkbox"
                    />
                    <label htmlFor="billing_same" className="mt-5">
                      I accept the Terms & Conditions
                    </label>
                  </div>
                </div> */}

                {/* Display uploaded images as thumbnails */}
                <div className="md:col-span-5 mt-4">
                  {formData.images.length > 0 && (
                    <div className="flex flex-wrap -mx-2">
                      {formData.images.map((image, index) => (
                        <div key={index} className="w-1/4 px-2 mb-4">
                          <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 md:col-span-5">
                  <div className="inline-flex items-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
        {/* </div> */}

        {/* <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
            <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
          </a> */}
      </div>
    </form>
  );
};

export default NewPropertyManager;