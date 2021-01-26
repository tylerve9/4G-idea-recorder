import React from 'react'


export default function calendar(){


    const year = new Date().getFullYear();
    const month = new Date().getMonth(); // month: { month } <br />
    const day = new Date().getDay();
    const miobjeto = new Date().toJSON();
    

    function mostrarFecha(){
        console.log(year);
        console.log(miobjeto);
        console.log(month);
        console.log(day);
        
    }

    return (
        <div className="my-10" onClick={mostrarFecha}>
          <div className="grid grid-cols-7 gap-20">
            <div className="">Domingo</div>
            <div className="...">Lunes</div>
            <div className="...">Martes</div>
            <div className="">Miercoles</div>
            <div className="...">Jueves</div>
            <div className="...">Vienres</div>
            <div className="...">Sabado</div>
            <div className="col-span-7">
            miobjeto: { miobjeto } 
            

            </div>
         </div>

          
        </div>
    )
}