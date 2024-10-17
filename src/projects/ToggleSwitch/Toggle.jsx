import { useState } from "react";

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const checkIsOn = `${isOn ? "ON" : "OFF"}`;
  return (
    <>
      <div
        className="flex justify-center items-center h-screen w-screen"
        onClick={handleToggleSwitch}
      >
        <div className="bg-slate-300 px-12 py-6 rounded-full">
          <div>
            <span className="border-2 px-4 py-2 rounded-full">{checkIsOn}</span>
          </div>
        </div>
      </div>
    </>
  );
};
