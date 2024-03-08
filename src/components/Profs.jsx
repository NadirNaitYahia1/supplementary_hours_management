import React from 'react'
import edit from '../assets/icon-edit.png'
import validate from '../assets/validate.png'
import { useState } from 'react'
const Profs = (props) => {
    
    const [editMode, setEditMode] = useState(true   );
    
    const handleEditClick = () => {
        setEditMode(!editMode);
    };


    return (
    <div>
        <div className='flex items-center'>
            <p className=' w-[20%]'>Ref N:  {<input  placeholder='  ....... ' className={editMode ?'w-[20%] border text-center':'w-[20%] border bg-gray-200 text-center' }></input>} ESTIN/2023</p>
            <div className="items-center">
                {editMode && (
                    <button className='ms-2' onClick={handleEditClick}>
                        <img src={edit} alt="edit" className='h-[40px] w-[25px] '/>
                    </button>
                )}
                
               {!editMode &&(
                    <button className='ms-2' onClick={handleEditClick}>
                        <img src={validate} alt="validate" className='h-[40px] w-[25px] ' />
                    </button>
               )}
            </div>
        </div>
       
        <div className='mt-3'>
            <h1>
                Etat de service des heures complementaires <br/> Enseignants {props.profType}
            </h1>
        </div>
    </div>
    )
}

export default Profs






 






 