import React, { useState } from 'react';
import prev from '../assets/prev.png';
import next from '../assets/next.png';
import { FaPen, FaSave, FaPrint, FaDownload } from "react-icons/fa";
const Tablehours = () => {
    const [editMode, setEditMode] = useState(false);
    const [h, setH] = useState(18);  
    const [isSavingHovered, setIsSavingHovered] = useState(false);
    const [isEditingHovered, setIsEditingHovered] = useState(false);
    
    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    const handleHoursChange = (e) => {
        setH(e.target.value);
    };

    return (
        <div>
            <div className="mt-5">
                <div className='flex items-center justify-between mx-4 mb-2'>
                    <div>
                        <div className='flex items-center'>
                            <p>Mois:</p>
                            <button>
                                <img src={prev} alt="" className='h-[20px] w-[20px] mx-3' />
                            </button>                            
                            <span className='font-bold text-lg'>{' Janvier'}</span>
                            <button>
                                <img src={next} alt="" className='h-[20px] w-[20px] mx-3' />
                            </button> 
                        </div>
                    </div>

                    <div className='icons '>
                        {!editMode && (
                            <button  
                                className="font-semibold text-gray-700 rounded-lg text-lg hover:text-blue-600 relative"
                                onClick={handleEditClick} 
                                onMouseOver={() => setIsEditingHovered(true)}
                                onMouseLeave={() => setIsEditingHovered(false)}
                            >
                                <FaPen />
                                {isEditingHovered && (
                                    <div className="bg-yellow-100 p-1 absolute top-4 right-7 -mt-2 -mr-2 transition-all duration-300 ease-in-out border border-black text-sm text-black font-medium">
                                        modifier
                                    </div>
                                )}
                            </button>
                        )}
                        {editMode && ( 
                            <button
                                className={`font-semibold rounded-lg text-lg relative
                                ${editMode ? "text-gray-700 hover:text-blue-600" : "text-gray-300"}`}
                                onClick={handleEditClick}
                                onMouseOver={() => setIsSavingHovered(true)}
                                onMouseLeave={() => setIsSavingHovered(false)}
                            >
                                <FaSave />
                                {isSavingHovered && editMode && (
                                    <div className="bg-yellow-100 p-1 absolute top-4 right-7 -mt-2 -mr-2 transition-all duration-300 ease-in-out border border-black text-sm text-black font-medium">
                                        sauvegarder
                                    </div>
                                )}
                            </button>
                        )}
                        <button className='mx-2'  > 
                            <FaPrint />
                        </button>                    
                        <button > 
                            <FaDownload />  
                        </button>                    
                    </div>
                </div>

                <table className="w-full border">
                    <thead className='text-col-3'>
                        <tr>
                            <th>N°</th>
                            <th>Nom & prénom</th>
                            <th>Grade</th>
                            <th>Module Enseigné</th>
                            <th>Volume horaire autorisé</th>
                            <th>Nombre de semaines</th>
                            <th>Nombre d'heures Mensuelles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center' >
                            <td>1</td>
                            <td>John Doe</td>
                            <td>Professeur</td>
                            <td>Mathématiques</td>
                            <td>120 heures</td>
                            <td>14 semaines</td>
                            <td>
                                {editMode ? ( 
                                    <input type="text" value={h} onChange={handleHoursChange} className='text-center bg-gray-200' />
                                ) : (
                                    <span onClick={handleEditClick} className='cursor-pointer'>{h} heures</span> 
                                )}
                            </td>
                        </tr>
                        <tr className='text-center' >
                            <td>1</td>
                            <td>John Doe</td>
                            <td>Professeur</td>
                            <td>Mathématiques</td>
                            <td>120 heures</td>
                            <td>14 semaines</td>
                            <td>
                                {editMode ? ( 
                                    <input type="text" value={h} onChange={handleHoursChange} className='text-center bg-gray-200' />
                                ) : (
                                    <span onClick={handleEditClick} className='cursor-pointer'>{h} heures</span> 
                                )}
                            </td>
                        </tr>
                        <tr className='text-center' >
                            <td>1</td>
                            <td>John Doe</td>
                            <td>Professeur</td>
                            <td>Mathématiques</td>
                            <td>120 heures</td>
                            <td>14 semaines</td>
                            <td>
                                {editMode ? ( 
                                    <input type="text" value={h} onChange={handleHoursChange} className='text-center bg-gray-200' />
                                ) : (
                                    <span onClick={handleEditClick} className='cursor-pointer'>{h} heures</span> 
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tablehours;
