import React from "react";

interface SwitchProps {
  isYearly: boolean;
  toggleSwitch: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isYearly, toggleSwitch }) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-8">
      <span
        className={`text-base font-medium ${
          !isYearly ? "text-white" : "text-neutral-2"
        }`}
      >
        Monthly
      </span>

      <div
        onClick={toggleSwitch}
        className={`w-[64px] h-[34px] rounded-full p-[3px] cursor-pointer transition-colors duration-200 ease-in-out ${
          isYearly ? "bg-[#0051FF]" : "bg-[#1A1F37]"
        }`}
      >
        <div
          className={`w-7 h-7 bg-white rounded-full shadow-md transform duration-200 ease-in-out ${
            isYearly ? "translate-x-[27px]" : "translate-x-0"
          }`}
        />
      </div>

      <span
        className={`text-base font-medium ${
          isYearly ? "text-white" : "text-neutral-2"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default Switch;
