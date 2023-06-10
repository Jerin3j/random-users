import React from 'react'

const IconPost = () => {
  return (
    <div className='iconPost'>
      <div className='PersonDetails flex border rounded-2xl px-16 py-20 mx-72 mt-24 gap-14 shadow-[0px_0px_40px_rgba(128,128,128,0.342)]' >
        <div className='PersonImg'>
          <img className='rounded-full  h-32 w-30' src='https://pps.whatsapp.net/v/t61.24694-24/315771450_879577659736890_931498316500561809_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTOs8h8jmQhPe_Fz-d7mk0ErWRV3cS7h1K3hBeki1DVZw&oe=6491FC37' alt='Person Image'/>
        </div>
        <div className='personDetails flex flex-col w-[70%] gap-2'>
          <h1 className='Name text-7xl underline decoration-4 font-bold text-red-500'>Mr Jerin 3j</h1>
          <h1 className='Address text-xl'>If you need to use a one-off box-shadow value that doesn’t make sense to include in your theme, use square brackets to</h1>
          <h1 className='Gender text-gray-500 text-xl'>Male</h1>
        </div>
      </div>
    </div>
  )
}

export default IconPost
