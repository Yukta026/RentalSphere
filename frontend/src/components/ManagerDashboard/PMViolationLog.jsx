import { Link } from "react-router-dom";
import { sampleViolationLogData } from "../../Utils/SampleData";
import { Tooltip } from "react-tooltip";

export default function PMViolationLog() {

  const statusClassMapping = {
    Minor: 'text-black bg-yellow-300 font-semibold',
    Moderate: 'text-white bg-orange-400 font-semibold',
    Severe: 'text-white bg-red-500 font-semibold',
  };


  return (
    <div>
      <div className="flex justify-between mb-10 items-center p-4">
        <h1 className="text-2xl font-bold">Violation Log</h1>
        <Link
          to="/managerdashboard/add-violationlog"
          className="btn bg-red-500 hover:bg-red-700 text-white font-extrabold py-2 px-4 rounded"
        >
          Post Violation
        </Link>
      </div>

      <div className='mt-4'>
        <div className="w-full">
          <table className='table-auto w-full h-full'>
            <thead className='text-left text-gray-4 uppercase text-[14px] tracking-wider'>
              <tr className='border-b-2 border-gray py-10'>
                <th className='pb-5 px-3'>Title</th>
                <th className='pb-5 px-3'>Description</th>
                <th className='pb-5 px-3 text-center'>Personal Comment </th>
                <th className='pb-5 px-3 text-center'>Monetary </th>
                <th className='pb-5 px-3 text-center'>Damage Intensity</th>
              </tr>
            </thead>
            <tbody className='text-black font-gilroy-medium'>
              {sampleViolationLogData.map((data, index) => (
                <tr key={index} className={` border-b-8  border-white py-10`}>
                  <td className={`py-4 px-3 `}>{data.title}</td>
                  <td className={`py-4 px-3 `} >
                    {data.description.length > 30 ? (
                      <p data-tooltip-id={`my-tooltip-${index}`} data-tooltip-content={data.description}>
                        {data.description.slice(0, 30)}...
                        <Tooltip id={`my-tooltip-${index}`} potation="center" style={{ width: '300px' }}/>
                      </p>
                    ) : (
                      data.description
                    )}
                  </td>
                  <td className={`py-4 px-3  text-center`}>
                    {data.personalComment.length > 30 ? (
                        <p data-tooltip-id={`my-tooltip-${index}`} data-tooltip-content={data.personalComment}>
                          {data.personalComment.slice(0, 30)}...
                          <Tooltip id={`my-tooltip-${index}`} potation="center" style={{ width: '300px' }}/>
                        </p>
                      ) : (
                        data.personalComment
                      )}
                  </td>
                  <td className={`py-4 px-3  text-center`}>$ {data.monetary}</td>
                  <td className={`text-center capitalize`}>
                      <p className={`${statusClassMapping[data.damageIntensity]} py-2 rounded-md`}>{data.damageIntensity}</p>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
        
      </div>
      
    </div>
  );
}
