import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { samplePaymentData } from "../../Utils/SampleData";


export default function RentManage() {

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">
        Rent Management
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

        <h6 className='block pb-2 text-gray-12 text-[18px] font-semibold mt-8'>Payment</h6>


      <div className="flex gap-10">

        <div className='w-[60%] mt-4'>
          <div className="w-full">
            <table className='table-auto w-full h-full'>
              <thead className='text-left text-gray-4 uppercase text-[14px] tracking-wider'>
                <tr className='border-b-2 border-gray py-10'>
                  <th className='pb-5 px-3'>Invoice ID</th>
                  <th className='pb-5 px-3'>Amount</th>
                  <th className='pb-5 px-3'>Date</th>
                  <th className='pb-5 px-3'>Note</th>
                </tr>
              </thead>
              <tbody className='text-black font-gilroy-medium'>
                {samplePaymentData.map((data, index) => (
                  <tr key={index} className='border-b-2 border-gray py-10'>
                    <td className='py-4 px-3'>{data.invoiceNo}</td>
                    <td className='py-4 px-3'>$ {data.amount}</td>
                    <td className='py-4 px-3 '>{data.paymentDate}</td>
                    <td className='py-4 px-3 '>{data.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-[40%]">
          <div className="bg-white drop-shadow-md border border-gray-300 text-center py-10">
            <h6 className="font-semibold text-[16px] text-gray-600">Current balance</h6>
            <p className="font-bold text-[30px]">$ 2850.00</p>
          </div>

          <div className="bg-white drop-shadow-md border mt-6 border-gray-300 p-4">
            <h6 className="font-semibold text-[20px] text-gray-600">Lease Information</h6>

            <p className="mt-4 text-[18px]">Account number</p>
            <p className="text-[14px]">FDF525252FF</p>

            <p className="mt-4 text-[18px]">Address</p>
            <p className="text-[14px]">7 street line road<br /> Boston MA 202020 <br /> United State </p>

            <div className="flex gap-10 items-center">
              <div>
                <p className="mt-4 text-[18px]">Start date</p>
                <p className="text-[14px]">April 2023</p>
              </div>

              <div>
                <p className="mt-4 text-[18px]">End date</p>
                <p className="text-[14px]">March 2024</p>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <div>
                <p className="mt-4 text-[18px]">Rent</p>
                <p className="text-[14px]">$ 1000</p>
              </div>

              <div>
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
