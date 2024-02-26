import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const RequestDetails = () => {
  const navigate = useNavigate()
  let { id } = useParams();

    const [propertyManagerReq, setPropertyManagerReq] = useState([])
    useEffect(() => {
      loadPropertyManagerReq()
    }, [])

    const loadPropertyManagerReq = async () => {
        const result = await Axios.get(`http://localhost:5000/property-managers/${id}`)
        setPropertyManagerReq(result.data);
    }

    const handleApprove = async (id) => {
      try {
          await Axios.patch(`http://localhost:5000/property-managers/${id}`, {verified: true});
          alert('Form submitted successfully!');
          navigate('/admin')
      } catch (error) {
          console.error('Error submitting form:', error);
      }
  };
  
  const handleCancel = async (id) => {
      try {
          await Axios.patch(`http://localhost:5000/property-managers/${id}`, {verified: false});
          alert('Form submitted successfully!');
          navigate('/admin')
      } catch (error) {
          console.error('Error submitting form:', error);
      }
  }
  return (
    <>
   <div className='grid grid-cols-1 rounded-md'>
   <div className="flex flex-col items-center">
        <div className="mb-4">id : {propertyManagerReq?.id}</div>
        <div className="mb-4">First name : {propertyManagerReq?.firstName}</div>
        <div className="mb-4">Last Name : {propertyManagerReq?.lastName}</div>
        <div className="mb-4">Email : {propertyManagerReq?.email}</div>
        <div className="mb-4">Phone Number : {propertyManagerReq?.phoneNumber}</div>
        <div className="mb-4">City : {propertyManagerReq?.city}</div>
        <div className="mb-4">Image : 
            {propertyManagerReq?.signature && <img className="h-48 w-48 mb-4" src={propertyManagerReq?.signature} alt="" />}
        </div>

        <div className="flex">
            <button onClick={() => handleApprove(propertyManagerReq?.id)} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Approve</button>
            <button onClick={() => handleCancel(propertyManagerReq?.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
        </div>
    </div>
   </div>

    </>
  )
}

export default RequestDetails