import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const [propertyManager, setPropertyManager] = useState([])
    useEffect(() => {
        loadPropertyManager()
    }, [])

    const loadPropertyManager = async () => {
        const result = await Axios.get("http://localhost:5000/property-managers")
        const filteredPropertyManagers = result.data.filter(user => !user.hasOwnProperty('verified'));
        console.log(filteredPropertyManagers, "filteredPropertyManagers")
        setPropertyManager(filteredPropertyManagers);
        // setPropertyManager(result.data)
    }

    const handleApprove = async (id) => {
        try {
            await Axios.patch(`http://localhost:5000/property-managers/${id}`, { verified: true });
            alert('Form submitted successfully!');
            loadPropertyManager()
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleCancel = async (id) => {
        try {
            await Axios.patch(`http://localhost:5000/property-managers/${id}`, { verified: false });
            alert('Form submitted successfully!');
            loadPropertyManager()
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    const viewDetails = async (id) => {
        navigate(`/admin/${id}`);
    }

    return (
        <>
           <div className='container py-6 flex justify-between items-center'>
            <p className='text-2xl font-bold mb-4'>AdminDashboard</p>
            <div className='bg-slate-500 text-white py-2 px-4 cursor-pointer text-md ' onClick={()=>navigate("/listed-property-manager")}>Approved Property manager</div>
        </div>
        
        <div className="container mx-auto">
        <h1 className="text-xl font-bold mb-4">Property Manager Requests</h1>
        <table className="table-auto">
            <thead>
            <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Date</th>
            </tr>
            </thead>
            <tbody>
            {propertyManager?.map(user => (
                <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.firstName}</td>
                <td className="border px-4 py-2">{user.lastName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phoneNumber}</td>
                <td className="border px-4 py-2">{user.date}</td>
                <td className="border px-4 py-2 gap-4">
                {/* Approve and Cancel links */}
                    <button onClick={() => viewDetails(user.id)} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</button>
                </td>
                <td className="border px-4 py-2 gap-4">
                {/* Approve and Cancel links */}
                    <button onClick={() => handleApprove(user.id)} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Approve</button>
                    <button onClick={() => handleCancel(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>


        </>
    )
}

export default AdminDashboard