import React, { useState } from "react";
import { MonthCard } from "../components";
import { FaPen, FaSave } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import Swal from "sweetalert2";

function SetMonthsWeeks() {
  const months = Array.from({ length: 12 }, (_, index) => ({
    month: new Date(0, index).toLocaleString("default", { month: "long" }),
  }));
  const [weekNumbers, setWeekNumbers] = useState(
    Array.from({ length: 12 }, () => 4)
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingHovered, setIsEditingHovered] = useState(false);
  const [isSavingHovered, setIsSavingHovered] = useState(false);
  const [isResetHovered, setIsResetHovered] = useState(false);

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

  const resetWeeks = () => {
    Swal.fire({
      title: "Voulez-vous réinitialiser les semaines par mois ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmer",
      denyButtonText: `Non`,
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sauvegardé!", "", "succées");
      } else if (result.isDenied) {
        Swal.fire("Changements non sauvegardés", "", "info");
      }
    });
  };

  const handleSave = () => {
    if (isEditing) {
      Swal.fire({
        title: "Voulez-vous sauvegarder les changements ?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirmer",
        denyButtonText: `Non`,
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Sauvegardé!", "", "succées");
          setIsEditing(false);
        } else if (result.isDenied) {
          Swal.fire("Changements non sauvegardés", "", "info");
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-[100%]">
        <div>
          <h1 className="text-3xl font-semibold">
            Le nombre de semaines par mois
          </h1>
        </div>
      </div>

      <div className="flex flex-row gap-5 items-center mt-5 justify-between w-[100%]">
        <h2 className="text-lg font-semibold">La version courrante: </h2>
        <div className="flex flex-row gap-5 items-center">
          <button
            className="flex flex-row items-center gap-2 font-semibold  text-gray-700 rounded-lg text-lg hover:text-blue-600 relative"
            onClick={() => setIsEditing(true)}
            onMouseOver={() => setIsEditingHovered(true)}
            onMouseLeave={() => setIsEditingHovered(false)}
          >
            <FaPen />
            {isEditingHovered && (
              <div className="bg-yellow-100 p-1 absolute top-6 right-6 -mt-2 -mr-2 transition-all duration-300 ease-in-out border border-black text-sm text-black font-medium">
                modifier
              </div>
            )}
          </button>
          <button
            className={`flex flex-row items-center gap-2 font-semibold rounded-lg text-lg relative
            ${
              isEditing ? "text-gray-700 hover:text-blue-600" : "text-gray-300"
            }`}
            onClick={handleSave}
            onMouseOver={() => setIsSavingHovered(true)}
            onMouseLeave={() => setIsSavingHovered(false)}
          >
            <FaSave />
            {isSavingHovered && isEditing && (
              <div className="bg-yellow-100 p-1 absolute top-6 right-6 -mt-2 -mr-2 transition-all duration-300 ease-in-out border border-black text-sm text-black font-medium">
                sauvegarder
              </div>
            )}
          </button>
          <button
            className="flex flex-row items-center gap-2 font-semibold  text-gray-700 rounded-lg text-lg hover:text-blue-600 relative"
            onMouseOver={() => setIsResetHovered(true)}
            onMouseLeave={() => setIsResetHovered(false)}
            onClick={resetWeeks}
          >
            <GrPowerReset />
            {isResetHovered && (
              <div className="bg-yellow-100 p-1 absolute top-6 right-6 -mt-2 -mr-2 transition-all duration-300 ease-in-out border border-black text-sm text-black font-medium">
                réinitialiser
              </div>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 w-full mt-[40px] gap-x-10 gap-y-5">
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
    </div>
  );
}

export default SetMonthsWeeks;
