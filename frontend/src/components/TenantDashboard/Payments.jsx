import React from 'react'

const Payments = () => {
  return (
    <>
      <h1 className='font-bold text-[20px]'>Payments</h1>

      <div className='my-6 border-l-4 border-green-700 w-full flex justify-between items-center bg-white drop-shadow rounded-[8px] p-6'>
          
          <div>
            <h3 className='font-medium text-[26px]'>Your Current Balance</h3>
            <h3 className='font-extrabold text-[26px]'>$ 0.00</h3>
          </div>

          <div>
            <button className='bg-green-700 text-white tracking-wider rounded-full px-10 py-2'>Make payment</button>
          </div>
      </div>

      <div className=''>
        <div className="overflow-x-auto h-[400px]">
          <table className="payment-table table table-xs table-pin-rows table-pin-cols">
            <thead className='text-[18px] capitalize py-2'>
              <tr>
                <td>Invoice No.</td> 
                <td>date</td> 
                <td>Amount</td> 
                <td>Note</td> 
              </tr>
            </thead> 
            <tbody>
              <tr>
                <td>1</td> 
                <td>24 march 2024</td> 
                <td>$ 200</td> 
                <td>Maintenance</td> 
              </tr>
              <tr>
                <td>2</td> 
                <td>24 march 2024</td> 
                <td>$ 200</td> 
                <td>Maintenance</td> 
              </tr>
              <tr>
                <td>3</td> 
                <td>24 march 2024</td> 
                <td>$ 200</td> 
                <td>Maintenance</td> 
              </tr>
              <tr>
                <td>4</td> 
                <td>24 march 2024</td> 
                <td>$ 200</td> 
                <td>Maintenance</td> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Payments