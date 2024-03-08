import React, { useState } from "react";
import { MonthCard } from "../components";
import { FaPen, FaCheck } from "react-icons/fa";

function SetMonthsWeeks() {
  const months = Array.from({ length: 12 }, (_, index) => ({
    month: new Date(0, index).toLocaleString("default", { month: "long" }),
  }));
  const [weekNumbers, setWeekNumbers] = useState(
    Array.from({ length: 12 }, () => 4)
  );
  const [isEditing, setIsEditing] = useState(false);

  const increaseWeeks = (index) => {
    if (weekNumbers[index] < 4 && isEditing) {
      setWeekNumbers((prevWeekNumbers) => {
        const newWeekNumbers = [...prevWeekNumbers];
        newWeekNumbers[index]++;
        return newWeekNumbers;
      });
    }
  };

  const decreaseWeeks = (index) => {
    if (weekNumbers[index] > 0 && isEditing) {
      setWeekNumbers((prevWeekNumbers) => {
        const newWeekNumbers = [...prevWeekNumbers];
        newWeekNumbers[index]--;
        return newWeekNumbers;
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-5 w-[100%]">
        <div>
          <h1 className="text-3xl font-bold">Le nombre de semaines par mois</h1>
        </div>
      </div>

      <div className="grid grid-cols-6 w-full mt-[100px] gap-x-10 gap-y-5">
        {months.map((month, index) => (
          <MonthCard
            key={index}
            month={month.month}
            weekNumber={weekNumbers[index]}
            isEditing={isEditing}
            onIncreaseWeeks={() => increaseWeeks(index)}
            onDecreaseWeeks={() => decreaseWeeks(index)}
          />
        ))}
      </div>
      <div className="self-end flex flex-row gap-5 items-center mt-5">
          <button
            className="flex flex-row items-center gap-2 font-semibold bg-orange-700 text-white px-5 py-1 rounded-lg"
            onClick={() => setIsEditing(true)}
          >
            Modifier <FaPen />
          </button>
          <button
            className={`flex flex-row items-center gap-2 
            font-semibold text-white px-5 py-1 rounded-lg
            ${
              isEditing
                ? "bg-green-700 cursor-pointer"
                : "bg-gray-400 cursor-default"
            }
            `}
          >
            Valider <FaCheck />
          </button>
        </div>
    </div>
  );
}

export default SetMonthsWeeks;
