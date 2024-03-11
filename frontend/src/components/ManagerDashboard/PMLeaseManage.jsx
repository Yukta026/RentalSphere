import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { sampleDocumentData, samplePaymentData } from "../../Utils/SampleData";
import { MdFileDownload, MdOutlineDelete } from "react-icons/md";

export default function PMLeaseManage() {

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
    <h1 className="text-2xl font-bold mb-10">
      Lease Management
    </h1>

   
      <div className='relative'>
        <label className='block pb-2 text-gray-12 text-[18px] font-semibold' htmlFor="type">Property :</label>
        <select name="type"
            aria-placeholder='Please Select a webhook type'
            className="cursor-pointer mt-2 appearance-none bg-gray w-full text-[16px] rounded-[4px] border-2 px-4 h-[52px] pr-8 focus:outline-none "
            onClick={(e) => setSelectedOption(e.target.value)}
        >
        
            <option className='bg-white text-black outline-none' value="Property 1">Property 1</option>
            <option className='bg-white text-black outline-none' value="Property 2">Property 2</option>

        </select>
        <span className='absolute top-[60%] right-[2%]'><IoIosArrowDown className="text-[#8D98AA] text-[20px]" /></span>
    
      </div>

      <h6 className='block pb-2 text-gray-12 text-[18px] font-semibold mt-8'>Documents</h6>


    <div className="flex gap-10">

      <div className='w-[60%] mt-4'>
        <div className="w-full">
        <table className='table-auto w-full h-full'>
          <thead className='text-left text-gray-4 uppercase text-[14px] tracking-wider'>
            <tr className='border-b-2 border-gray py-10'>
              <th className='pb-5 px-3'>
                ID
              </th>
              <th className='pb-5 px-3'>Document name</th>
              <th className='pb-5 px-3'>Created date</th>
              <th className='pb-5 px-3 text-center'>
                {/* <MdFileDownload  className="text-green-900 text-center text-[20px]"/> */}
                Download
              </th>
              <th className='pb-5 px-3 text-center'>
                Delete
                  {/* <MdOutlineDelete className="text-red-600 text-center text-[20px]"/> */}
              </th>
            </tr>
          </thead>
          <tbody className='text-black font-gilroy-medium'>
            {sampleDocumentData.map((data, index) => (
               <tr key={index} className='border-b-2 border-gray py-10'>
                <td className='py-4 px-3'>
                   {data.id}
                </td>
                
                
                <td className='py-4 px-3'>{data.documentName}</td>
                <td className='py-4 px-3'>{data.createdDate}</td>
                <td className='py-4 px-3 '>
                  <a className="flex justify-center" href={data.documentLink} target="_blank" download="">
                    <MdFileDownload  className="text-green-900 text-center text-[20px]"/></a>
                </td>
                <td className='relative py-4 px-3 flex justify-center'>
                  <MdOutlineDelete className="text-red-600 text-[20px]"/>
                </td>
              </tr>
            ))}
             
          </tbody>
        </table>
        </div>
      </div>

      <div className="w-[40%]">

        <div className="bg-white drop-shadow-md border border-gray-300 p-4">
          <h6 className="font-semibold text-[20px] text-gray-600">Lease Information</h6>

          <div className="flex gap-4 items-center">
            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">First name</p>
              <p className="text-[14px]">John</p>
            </div>

            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Last name </p>
              <p className="text-[14px]">Doe</p>
            </div>
          </div>

          <div className="w-full border-gray border-b pb-4">
            <p className="mt-4 text-[18px]">DOB</p>
            <p className="text-[14px]">25 January 1991</p>
          </div>

          <div className="flex gap-4 flex-wrap items-center border-gray border-b pb-4">
            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Email</p>
              <p className="text-[14px]">john.doe@gmail.com</p>
            </div>

            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Contact number</p>
              <p className="text-[14px]">+1 123 456 7890</p>
            </div>

            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">License number</p>
              <p className="text-[14px]">FDF525252FF</p>
            </div>
          </div>

          <div className="flex gap-4 ">
            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Address</p>
              <p className="text-[14px]"> 7 street line road <br /> Boston MA 202020 <br /> United State </p>
            </div>

            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Occupants</p>
              <p className="text-[14px]">2</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Start date</p>
              <p className="text-[14px]">April 2023</p>
            </div>

            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">End date</p>
              <p className="text-[14px]">March 2024</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Rent</p>
              <p className="text-[14px]">$ 1000</p>
            </div>

            <div className="w-[40%]">
              <p className="mt-4 text-[18px]">Maintenance </p>
              <p className="text-[14px]">$ 200</p>
            </div>
          </div>

          <div>
            <p className="mt-4 text-[18px]">Deposite </p>
            <p className="text-[14px]">$ 1000</p>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}
