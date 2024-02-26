import Axios from "axios";
import React, { useState } from 'react'
import { fileToBase64 } from "../../utils/utils";



const AddPropertyManager = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        licenseNumber: '',
        phoneNumber: '',
        country: '',
        state: '',
        zipcode: '',
        date: '',
        signature: null,
    });
    // const [base64Image, setBase64Image] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(e);
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // setBase64Image(reader.result);
                setFormData({ ...formData, signature: reader.result });
            };
        }
        console.log(formData, "formDataformData")

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        console.log(formDataToSend, "formDataToSend")
        try {
            await Axios.post('http://localhost:5000/property-managers', formData);
            alert('Form submitted successfully!');
            setFormData( {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                licenseNumber: '',
                phoneNumber: '',
                country: '',
                state: '',
                zipcode: '',
                date: '',
                signature: null,
            })
            
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <form className="min-h-screen p-6 bg-gray-100 flex items-center justify-center" onSubmit={(e)=>handleSubmit(e)}>
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h1 className="font-semibold text-xl text-gray-600">RentalSphere</h1>
                    <h2 className="text-gray-500 mb-6">Request Form To Become Property Manager</h2>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="font-bold text-lg">HELLO THERE !!</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label for="FirstName">First Name</label>
                                        <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="firstName" value={formData.firstName} onChange={(e) => handleInputChange(e)} />
                                    </div>
                                    <div className="md:col-span-5">
                                        <label for="LastName">Last Name</label>
                                        <input type="text" name="lastName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.lastName} onChange={(e) => handleInputChange(e)} />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label for="email">Email Address</label>
                                        <input type="text" name="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.email} onChange={(e) => handleInputChange(e)} />
                                    </div>

                                    <div className="md:col-span-3">
                                        <label for="address">Address / Street</label>
                                        <input type="text" name="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.address} onChange={(e) => handleInputChange(e)} />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label for="city">City</label>
                                        <input type="text" name="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.city} onChange={(e) => handleInputChange(e)} />
                                    </div>
                                    <div className="md:col-span-3">
                                        <label for="LicenseNumber">License Number </label>
                                        <input type="text" name="licenseNumber" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.licenseNumber} onChange={(e) => handleInputChange(e)} />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label for="PhoneNumber">Phone Number</label>
                                        <input type="Number" name="phoneNumber" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.phoneNumber} onChange={(e) => handleInputChange(e)} />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label for="country">Country / region</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={formData.country} onChange={(e) => handleInputChange(e)} />
                                            {/* <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button> */}
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label for="state">State / province</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={formData.state} onChange={(e) => handleInputChange(e)} />
                                            {/* <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button> */}
                                        </div>
                                    </div>

                                    <div className="md:col-span-1">
                                        <label for="zipcode">Zipcode</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.zipcode} onChange={(e) => handleInputChange(e)} />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label for="Date">Date</label>
                                        <input type="Date" name="date" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-36 bg-gray-50" value={formData.date} onChange={(e) => handleInputChange(e)} />
                                    </div>

                                    <div className="md:col-span-5">
                                        <div className="inline-flex items-center">
                                            {/* <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" /> */}
                                            <label for="billing_same" className="mt-5">We will connect to you on your progress.</label>

                                        </div>
                                    </div>

                                    {/* <div className="md:col-span-2">
                      <label for="soda">How many soda pops?</label>
                      <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </button>
                        <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                        <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
             */}
                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex items-end">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
            <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
          </a> */}
            </div>
        </form>



    )
}

export default AddPropertyManager