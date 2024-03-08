import React from 'react'
import { useState } from 'react'
import  PermanantTable from './PermanantTable.jsx'
import  VacataireTable from './VacataireTable.jsx'
import Header from '../components/Header'

const Seretary = () => {

  const [ens, setEns] = useState(false)
  return (
    <div>
        <div className="flex items-center mb-3">
            <p>Enseignants:  </p>
            
            <button className={!ens? "border bg-col-1 rounded-md p-2 text-white mx-2 ":"border-solid border-2 border-col-1 rounded-md p-2 mx-2 " } onClick={() => setEns(false)}>
                Permanant
            </button>
            
            <button className={ens? "border bg-col-1 rounded-md p-2 text-white mx-2 ":"border-solid border-2 border-col-1 rounded-md p-2  mx-2" } onClick={() => setEns(true)}>
            Vacataire
            </button>
 
        </div>

    
        <div className='mx-auto w-[90%]   border'>
            <Header/> 
            {
                false === ens ? <PermanantTable /> : <VacataireTable />
            }
        </div>
    </div>


    )
}

export default Seretary