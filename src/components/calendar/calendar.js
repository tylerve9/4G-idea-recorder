import React, { useState, useEffect } from 'react'
import Day from './day'


export default function Calendar(){


    const year = new Date().getFullYear();
    const month = new Date().getMonth(); // month: { month } <br />
    //const day = new Date().getDay(); //=5
    const miobjeto = new Date().toJSON();
    const monthJanInit = new Date(2021,1,1);
    const today = new Date().getDate();
    

    function mostrarFecha(){
        console.log(year);
        console.log(miobjeto);
        console.log(month);
        //console.log(day);
        
    }

    let days = []
    const [finalDays, setFinalDays] = useState([])

    function generateDays(){
        
        for (let i=1; i<=31; i++){
            if(i != today ){
                days.push({day: i, today:false}) 
            }else{
                days.push({day: i, today:true}) 
            }
        }
        setFinalDays(days)
        console.log(days)
        
    }

    useEffect(() => {
        generateDays()
        //setFinalDays(days)
      }, [])

    
    return (
        <div className="my-10">
          <div className="grid grid-cols-7 gap-2">
            <div className="">Domingo</div>
            <div className="...">Lunes</div>
            <div className="...">Martes</div>
            <div className="...">Miercoles</div>
            <div className="...">Jueves</div>
            <div className="...">Viernes</div>
            <div className="...">Sabado</div>

            <div className="..."></div>
            <div className="..."></div>
            <div className="..."></div>
            <div className="..."></div>
            <div className="..."></div>
            
            { finalDays.map((day,i) => {
                return (
                    <div className="m-2 p-0" key={"casilla-"+i}>
                        <Day key={day.day} day={day.day}  today={day.today} />
                    </div>
                )
                })
            }
            

            
         </div>

          
        </div>
    )
}