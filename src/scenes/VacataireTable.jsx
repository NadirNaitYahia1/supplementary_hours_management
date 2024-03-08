import React from 'react'
import Profs from '../components/Profs'
import Tablehours from '../components/Tablehours'

const VacataireTable = () => {
  return (
    <div >
        <Profs profType={'Vacataire'} /> 
        <Tablehours />
    </div>
  )
}

export default VacataireTable