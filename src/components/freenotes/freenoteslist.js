import React from 'react'
import FreeNote from './freenote'

export default function FreeNoteList(props){

    //console.log(props);
    return (
        <div>
            <ul>
            {props.list.map((item,i) => (
                <li key={"note-"+i}><FreeNote id={i} freenote={ item } /></li>
            ))}
            </ul>
        </div>
    )
}