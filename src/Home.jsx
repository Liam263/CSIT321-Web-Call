import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center h-full justify-center p-4 gap-y-4 ">
      <div className="h-[100px] w-[100px] bg-slate-500 rounded-full m-4 text-center ">
        AVATAR
      </div>
      <div className= "text-2xl">
        (02) 1234 5678
      </div>
      <div className="flex flex-row justify-around w-full  mt-20 py-4">
        <div className="  p-4 bg-green-500 rounded-full"
              onClick={()=>{navigate('/call')}}>
          <FaPhone className="text-3xl text-white" />
        </div>
        <div className="  p-4 bg-red-500 rounded-full">
          <FaPhone className="text-3xl text-white" />
        </div>
      </div>

    </div>
  )
}

export default Home
