import React from 'react'

const RowPost = () => {
  
  return (
    <div className='PersonRows'>
      <div className='Rows flex mx-72 mt-14 gap-3'>
        <div className='Row flex flex-col border gap-2 px-10 py-6 rounded shadow-lg bg-white focus:bg-violet-500'>
          <h1 className='Gender text-gray-600'>Female</h1>
          <h1 className='Name text-lg font-semibold'>Mrs teke veetele shantha</h1>
          <h1 className='text-red-500 active:text-white'>shantha@gmail.com</h1>
        </div>
      </div>
    </div>
  )
}

export default RowPost
