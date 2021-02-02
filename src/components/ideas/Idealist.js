import React, { useEffect } from 'react';



export default function IdeaList(props){

    console.log(props.ideas);

    return (
        (props.ideas.length > 0)?
            ( props.ideas.map((ideain, k ) => {
                return (
                    <div key={k}>
                    { ideain.idea } - 
                    { ideain.date } - 
                    { ideain.user.nick? ideain.user.nick: '' } - 
                    { ideain.tag }
                    </div>
                )})
            )
        :
            (
                <div>
                    <b> 
                        No hay Tareas para listar
                    </b>
                </div>
            )
          
    ) 
}