import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const AddViolationLog = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const testFormValues = {
        title: "title lorem",
        description: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        monetary: "200",
        personalComment: "Lorem Ipsum is simply",
        damageIntensity: "Moderate"
      };

    const [formData, setFormData] = useState(testFormValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <div>
        <h1 className="text-2xl font-bold">Violation Log</h1>
        <div>
            
            <div className="grid items-center grid-cols-1 gap-4 text-sm gap-y-2 lg:grid-cols-3 mt-6">
            <div className="text-gray-600">
              {/* <p className="text-lg font-bold">Hello there</p>
              <p>All fields mandatory*</p> */}

              <div>
                <img src="/img/exclamation-mark-yellow-triangle-symbol-isolated-white-background-3d-rendering-illustration_276199-111.avif" alt="violation-img" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 text-sm gap-y-2 md:grid-cols-6">


                  <div className="mt-4 md:col-span-6 drop-shadow-md font-semibold">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full h-10 px-4 mt-1 border rounded bg-gray-50"
                        // ref={moveInDateRef}
                    />
                  </div>

                  <div className="mt-4 md:col-span-6 drop-shadow-md font-semibold ">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        className="w-full h-10 px-4 mt-1 border rounded bg-gray-50"
                        // ref={moveInDateRef}
                    />
                  </div>

                  <div className="mt-4 md:col-span-6 font-semibold">
                    <label htmlFor="personalComment">Personal Comment </label>
                    <input
                        type="text"
                        name="personalComment"
                        className="w-full h-10 px-4 mt-1 border drop-shadow-md rounded bg-gray-50"
                        // value={formData.personalComment}
                        // onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="mt-4 md:col-span-3 font-semibold">
                    <label htmlFor="monetary">Monetary </label>
                    <input
                        type="number"
                        name="monetary"
                        className="w-full h-10 px-4 mt-1 border drop-shadow-md  rounded bg-gray-50"
                        // value={formData.monetary}
                        // onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className='mt-4 md:col-span-3 relative drop-shadow-md font-semibold '>
                    <label htmlFor="damageIntensity ">Damage Intensity :</label>
                    <select name="damageIntensity"
                        aria-placeholder='Please Select a webhook type'
                        className="cursor-pointer appearance-none w-full h-10 px-4 mt-1 border rounded bg-gray-50 focus:outline-none "
                        onClick={(e) => setSelectedOption(e.target.value)}
                    >
                    
                        <option className='bg-yellow-300 text-black font-semibold outline-none' value="bad">Minor </option>
                        <option className='bg-orange-400 text-black font-semibold outline-none' value="very bad">Moderate</option>
                        <option className='bg-red-500  text-black font-semibold outline-none' value="worst"> Severe</option>

                    </select>
                    <span className='absolute top-[60%] right-[2%]'><IoIosArrowDown className="text-[#8D98AA] text-[20px]" /></span>
                
                  </div>

                

                <div className="mt-4 md:col-span-5">
                  <div className="inline-flex items-center">
                    <button
                      className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
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
  )
}

export default AddViolationLog