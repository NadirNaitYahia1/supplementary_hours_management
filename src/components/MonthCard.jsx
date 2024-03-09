import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function MonthCard({
  month,
  weekNumber,
  isEditing,
  onIncreaseWeeks,
  onDecreaseWeeks,
}) {
  return (
    <div className="w-[200px] border-2 border-gray-600 rounded-md px-5 py-3 grid grid-cols-2 gap-4 hover:border-black ease-in-out duration-300">
      <h3 className="font-semibold text-blue-600">{month}:</h3>
      <div className="flex flex-row items-center gap-2">
        <div
          className={`
          ${
            isEditing && weekNumber > 0
              ? "cursor-pointer"
              : ""
          }
          `}
          onClick={onDecreaseWeeks}
        >
          <FaMinus color={isEditing && weekNumber > 0 ? "black" : "#74778a"} />
        </div>
        <p className="font-semibold">{weekNumber}</p>
        <div
          className={`
          ${
            isEditing && weekNumber < 4
              ? "cursor-pointer"
              : ""
          }
          `}
          onClick={onIncreaseWeeks}
        >
          <FaPlus color={isEditing && weekNumber < 4 ? "black" : "#74778a"} />
        </div>
      </div>
    </div>
  );
}

export default MonthCard;
