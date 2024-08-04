import React, { useEffect, useState } from 'react'
import { IoBluetoothOutline, IoShieldCheckmark } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { TbPhonePause } from "react-icons/tb";
import { PiNumpadBold, PiSpeakerLowBold } from "react-icons/pi";
import warningIcon from "./assets/ph_warning-fill.svg";
import { FaPhone } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
const CallInterface = () => {
  const [isDeepFake, setIsDeepFake] = useState(false);
    const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
        setIsDeepFake(!isDeepFake);
    },3000)
  },[])
  return (
    <div className='flex flex-col h-full items-center  justify-center p-4 gap-y-4 '>
      {isDeepFake ? (
        <div className="flex flex-row bg-[#D9D9D9] p-4 w-full items-center justify-center rounded-md gap-4 slide-down">
          <img src={warningIcon} alt="Warning Icon" />
          <div className="w-4/5 flex flex-col items-center gap-2">
            <p className="text-[#F40000] font-medium text-2xl">
              Deepfake Detected
            </p>
            <div className="flex flex-row justify-around w-full">
              <button className="bg-[#F40000] rounded-lg px-4 py-1 text-white"
                        onClick={()=>navigate('/')}>
                End Call
              </button>
              <button className="bg-[#737373] rounded-lg px-4 py-1 text-white"
                        onClick={()=>setIsDeepFake(false)}>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-row w-full items-center justify-center">
          <IoShieldCheckmark className="text-green-700 absolute left-10 text-2xl" />
          <div className="text-2xl">Caller ID is safe</div>
        </div>
      )}
      <div className="h-[100px] w-[100px] bg-slate-500 rounded-full m-4 text-center ">
        AVATAR
      </div>
      <div className={isDeepFake ? "text-2xl text-[#F40000]" : "text-2xl"}>
        (02) 1234 5678
      </div>
      <div>00:05 Minutes</div>
      <div className="grid grid-cols-3 w-full gap-2  border-t mt-10 py-4">
          <div className="flex flex-col items-center justify-center w-full">
            <TiMicrophoneOutline className="text-3xl" />
            <div className="text-lg">Mute</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <IoBluetoothOutline className="text-3xl" />
            <div className="text-lg">Bluetooth</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <TbPhonePause className="text-3xl" />
            <div className="text-lg">Hold</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <PiNumpadBold className="text-3xl" />
            <div className="text-lg">Keypad</div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto w-1/2 bg-red-500 rounded-full"
                onClick={()=>navigate('/')}>
            <FaPhone className="text-3xl text-white" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <PiSpeakerLowBold className="text-3xl" />
            <div className="text-lg">Speaker</div>
          </div>
        </div>
      
    </div>
  )
}

export default CallInterface
