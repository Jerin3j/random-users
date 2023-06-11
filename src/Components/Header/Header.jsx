import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <div className='flex px-5 md:px-12 pt-8  justify-between'>
        <div className='companyName'>
          <h1 className='font-medium text-2xl md:text-4xl'>Site Name</h1>
        </div>
        <div className='Navs flex underline decoration-red-600 decoration-2 underline-offset-[6px] gap-2 md:gap-6 text-sm md:text-lg translate-y-1 md:translate-y-3'>
          <h1 className=''>Product</h1>
          <h1 className=''>Download</h1>
          <h1 className=''>Pricing</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Header
