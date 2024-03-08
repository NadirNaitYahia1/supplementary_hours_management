import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function MonthCard({ month, weekNumber, isEditing, onIncreaseWeeks, onDecreaseWeeks }) {
  return (
    <div className="w-[200px] border-2 border-black rounded-md px-5 py-3 grid grid-cols-2 gap-4">
      <h3 className="font-semibold">{month}:</h3>
      <div className="flex flex-row items-center gap-2">
        <div
          className={`
          ${
            isEditing && weekNumber > 0
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }
          `}
          onClick={onDecreaseWeeks}
        >
          <FaMinus
            color={
              isEditing && weekNumber > 0 ? "black" : "#74778a"
            }
          />
        </div>
        <p className="font-semibold">{weekNumber}</p>
        <div
          className={`
          ${
            isEditing && weekNumber < 4
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }
          `}
          onClick={onIncreaseWeeks}
        >
          <FaPlus
            color={
              isEditing && weekNumber < 4 ? "black" : "#74778a"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MonthCard;
