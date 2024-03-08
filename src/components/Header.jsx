import React from 'react'
import logo from '../assets/estin.png'

const Header = () => {
  return (
    <div> 
        <div className="title-1 ">
            <p  >الجمهوريــة الجزائريــة الديمقراطيــة الشعبيــة</p>
            <p>Republique Algérienne Démocratique et Populaire</p>
        </div>
        


        <div className="flex justify-between items-center  ">
           <div className="title-2 w-[30%]">
                <p>Ministère de l'Enseignement Supérieur et de la Recherche Scientifique</p>
                <p>École supérieure en Sciences et Technologies de l'Informatique et du Numérique -Bejaia-</p>
            </div>
           
            <div className="logo-1 h-[10%] w-[15%]">
                <img src={logo} alt="logo" />
            </div>
            
            <div className="title-2 w-[30%]">
                <p>وزارة التعليم العالي والبحث العلمي</p>
                <p>المدرسة العليا في علوم وتكنولوجيات الاعلام الالي والرقمنة -بجاية</p>
            </div>


        </div>
    </div>
    )
}

export default Header