import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { userContext } from '../../Context/Context';

const RowPost = () => {
  const [users, setUsers] = useState([])
  const {setUserDetails} = useContext(userContext)
  useEffect(()=>{
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20').then(response=>{
      console.log(response.data.results);
      setUsers(response.data.results);
    }).catch(function(err){
      console.log(err)
    })
  }, [])
  return (
      <div className='PersonRows'>
      <div className='Rows flex flex-col md:flex-row ml-3 mr-3 md:mx-48 mt-20 gap-6 md:gap-[19px] flex-wrap'>
       {users.map((user)=>(
         <button onClick={()=>{setUserDetails(user)}} className='Row flex flex-col border gap-2 px-10 py-6 rounded-lg md:w-[24%] bg-white ring ring-transparent focus:ring-fuchsia-600 shadow-lg cursor-pointer'>
          <h1 className='Gender text-gray-600 bg-white capitalize'>{user.gender+" · "+user.nat}</h1>
          <h1 className='Name text-lg font-semibold bg-white truncate'>{user.name.title+" "+user.name.first+" "+user.name.last}</h1>
          <h1 className='text-red-500 focus:text-white bg-white truncate'>{user.email}</h1>
        </button>
    ))}
      </div>
    </div>
  )
}

export default RowPost
