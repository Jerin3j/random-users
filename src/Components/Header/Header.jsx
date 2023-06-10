import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <div className='flex px-10 pt-4'>
        <div className='companyName'>
          <h1 className='font-medium text-lg'>Site Name</h1>
        </div>
        <div className='Navs flex underline decoration-red-600 gap-2'>
          <h1>Product</h1>
          <h1>Download</h1>
          <h1>Pricing</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Header
