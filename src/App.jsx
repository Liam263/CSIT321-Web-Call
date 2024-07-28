import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IoBluetoothOutline, IoShieldCheckmark } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { TbPhonePause } from "react-icons/tb";
import { FiGrid } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { PiNumpadBold, PiSpeakerHifiBold, PiSpeakerLowBold } from "react-icons/pi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-y-4">
      <div className="relative flex flex-row w-full items-center justify-center">
        <IoShieldCheckmark className="text-green-700 absolute left-10 text-2xl" />
        <div className="text-2xl">Caller ID is safe</div>
      </div>
      <div className="h-[100px] w-[100px] bg-slate-500 rounded-full m-4 text-center ">AVATAR</div>
      <div className="text-2xl">(02) 1234 5678</div>
      <div>00:05 Minutes</div>
      <div className="border w-full my-4"/>
      <div className="grid grid-cols-3 w-full gap-2 ">
          <div className="flex flex-col items-center justify-center w-full">
            <TiMicrophoneOutline className="text-3xl"/>
            <div className="text-lg">Mute</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <IoBluetoothOutline className="text-3xl"/>
            <div className="text-lg">Bluetooth</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <TbPhonePause className="text-3xl"/>
            <div className="text-lg">Hold</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <PiNumpadBold className="text-3xl"/>
            <div className="text-lg">Keypad</div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto w-1/2 bg-red-500 rounded-full">
            <FaPhone className="text-3xl text-white"/>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <PiSpeakerLowBold className="text-3xl"/>
            <div className="text-lg">Speaker</div>
          </div>
      </div>
    </div>
  );
}

export default App;
