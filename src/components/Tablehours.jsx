import React, { useState } from 'react';
import prev from '../assets/prev.png'
import next from '../assets/next.png'


const Tablehours = () => {
    const [editMode, setEditMode] = useState(false);
    const [h, setH] = useState(18);  
    
    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    const handleHoursChange = (e) => {
        setH(e.target.value);
    };

  

    return (
        <div>
            <div className="mt-5 ">
                <div className='flex items-center justify-between mx-4 mb-2'>
                    <div>
                        <div className='flex items-center'>
                           
                            <p>Mois:</p>
                            <button>
                                <img src={prev} alt=""  className='h-[20px] w-[20px] mx-3'/>
                            </button>                            
                            <span className='font-bold text-lg'>{' Janvier'}</span>
                            
                            <button>
                                <img src={next} alt=""  className='h-[20px] w-[20px] mx-3'/>
                            </button> 
                        </div>
                    </div>

                    <div className='icons '>
                        {!editMode && (
                            <button className='bg-col-1  py-2 px-2 mx-2 text-white rounded-md ' onClick={handleEditClick}> 
                                Modifier
                            </button> 
                        )}

                        {editMode && (
                            <button className='bg-col-2 py-2 px-2 mx-2 text-white rounded-md ' onClick={handleEditClick}> 
                                Enregistrer
                            </button> 
                        )}
                        
                        <button className='bg-green-600  py-2 px-2 mx-2 text-white rounded-md '> 
                            Imprimer
                        </button>                    

                        <button className='bg-red-600  py-2 px-2 mx-2 text-white rounded-md '> 
                            Telecharger
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
