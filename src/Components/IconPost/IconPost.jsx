import React, { useContext } from 'react'
import Context, { userContext } from '../../Context/Context';

const IconPost = () => {
  const {userDetails} = useContext(userContext)
  return (
    <div className='iconPost'>
      <div className='PersonDetails flex border rounded-2xl px-8 md:px-16 py-10 md:py-20 mx-2 md:mx-72 mt-24 gap-7 md:gap-14 shadow-[0px_0px_40px_rgba(128,128,128,0.342)] bg-white' >
        <div className='PersonImg self-center md:self-auto bg-white'>
          <img className='rounded-full h-20 w-20 md:h-32 md:w-32' src={userDetails?.picture.large || 'https://randomuser.me/api/portraits/women/8.jpg'} alt='PersonImage'/>
        </div>
        <div className='personDetails flex flex-col w-[70%] gap-2 bg-white'>
          <h1 className='Name text-2xl md:text-7xl underline decoration-4 underline-offset-[9px] mb-2 font-bold text-red-500 bg-white font-'>{userDetails ? `${userDetails.name.title} ${userDetails.name.first} ${userDetails.name.last}` : 'Mrs Mira Bekić'}</h1>
          <h1 className='Address md:text-xl bg-white'>{userDetails ? ( 
          <span className='bg-white'>
            <b className='text-violet-500 bg-white'>{userDetails.location.street.number || '9345'}</b>, {userDetails.location.city}, {userDetails.location.state}, <b className='bg-white'>{userDetails.location.country || 'Netherlands'}</b>, {userDetails.location.postcode}, {userDetails.location.timezone.offset}, {userDetails.location.timezone.description}
            </span>
            ) : '9388, Hollandsche Rading, Noord-Holland, Netherlands, 8813 LN, -8:00, Pacific Time (US & Canada)'}
            </h1>
          <h1 className='Gender text-gray-500 text-base md:text-xl capitalize bg-white'>{userDetails?.gender || 'female'}</h1>
        </div>
      </div>
    </div>
  )
}

export default IconPost
