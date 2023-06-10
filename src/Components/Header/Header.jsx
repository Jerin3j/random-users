import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <div className='flex px-12 pt-8 justify-between'>
        <div className='companyName'>
          <h1 className='font-medium text-4xl'>Site Name</h1>
        </div>
        <div className='Navs flex underline decoration-red-600 decoration-2 underline-offset-[6px] gap-6 text-lg'>
          <h1 className='translate-y-3'>Product</h1>
          <h1 className='translate-y-3'>Download</h1>
          <h1 className='translate-y-3'>Pricing</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Header
