import React from 'react'
import Profs from '../components/Profs'
import Tablehours from '../components/Tablehours'
const Table = () => {
  return (
    <div >
        <Profs profType={'Permanant'} /> 
        <Tablehours />
    </div>
  )
}

export default Table