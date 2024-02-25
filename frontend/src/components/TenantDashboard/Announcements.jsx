import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Announcements = () => {

    const [announcementsData, setAnnouncementsData] = useState([
        {
          "id": "d6e3",
          "announcementMessage": "New announcements 1",
          "announcementdate": "18/02/2024"
        },
        {
            "id": "d6e4",
            "announcementMessage": "New announcements 2",
            "announcementdate": "06/02/2024"
        },
        {
            "id": "d6e6",
            "announcementMessage": "New announcements 3",
            "announcementdate": "10/01/2024"
        },
        {
          "id": "d6e7",
          "announcementMessage": "New announcements 4",
          "announcementdate": "10/01/2024"
        }
      ])

    const navigate = useNavigate()
  return (
    <>

    <div className='flex justify-between items-center '>
        <h1 className='font-bold text-[22px]'>Announcements</h1>
    </div>
    
    {announcementsData && announcementsData.map((data,index)=>(

        <>
        {/* <div className="collapse bg-gray-200 my-4 drop-shadow-lg rounded-[8px]">
            <input type="checkbox" /> 
            <div className="collapse-title text-[16px] font-semibold">
                Click me to show/hide content
            </div>
            <div className="collapse-content bg-white"> 
                <p className='text-[16px] mt-4'>hello</p>
            </div>
        </div> */}

            <div className='bg-white drop-shadow-md rounded-[8px] p-4 my-4'>
                <div className='flex justify-between items-center'>
                    <p className='text-[20px]'>{data.announcementMessage}</p>
                    <div className='bg-gray-200 rounded-full px-8 py-2'>
                    {data.announcementdate}
                    </div>
                </div>
            </div>
        </>
    ))}

    </>
  )
}

export default Announcements