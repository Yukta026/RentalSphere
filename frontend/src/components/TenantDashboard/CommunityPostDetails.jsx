import React from 'react'
import { useNavigate, useParams, Link} from 'react-router-dom';
import { sampleCommunityData } from '../../Utils/SampleData';

const CommunityPostDetails = () => {

    const { id } = useParams()

    const navigate = useNavigate();

    const data = sampleCommunityData.find((obj) => obj.id == id)
    console.log(data, "data")

  return (
   <>
    <div className='flex gap-10 '>
        <div className='w-[40%]'>
            <img className='object-cover' src={data.image} />
        </div>

        <div>
            <div>
                <h2 className='font-bold text-[22px]'>{data.name}</h2>
                <p>{data.description}</p>
            </div>

            <div>
                <h2 className='text-[20px] mt-6'>Addres</h2>
                <p>{data.address}</p>
            </div>

            <div className='flex gap-10'>
                <div>
                    <h2 className='text-[20px] mt-6'>Contact</h2>
                    <p>{data.contactNumber}</p>
                </div>
                <div>
                    <h2 className='text-[20px] mt-6'>Email</h2>
                    <p>{data.email}</p>
                </div>

            </div>
            <div>
                <h2 className='text-[20px] mt-6'>Price</h2>
                <p className='font-bold text-[22px]'>$ {data.price}</p>
            </div>
            
            <Link className="mt-6 card bg-green-700 text-white py-2 text-center font-semibold capitalize rounded-md" to={`mailto:test@gmail.com`}>
                Send Enquiry
            </Link>
        </div>

        
    </div>
   </>
  )
}

export default CommunityPostDetails