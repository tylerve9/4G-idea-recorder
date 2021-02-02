import React, { useEffect, useState } from 'react'
import FreeNoteList from './freenoteslist'

export default function FreeNoteForm(){

    const [note, setNote] = useState('')
    var listaInicial = []

    
    const [list, setList] = useState(listaInicial)
    

    function handleNote(event) {
        setNote(event.target.value)
    }

    function saveList() {
        localStorage.setItem("freenotesList", JSON.stringify(list))
    }

    useEffect(
        () => { saveList() }
        , [list]
    )


    function handleForm(event) {
        event.preventDefault()
        if (note.length === 0) {
            return;
        }
        setList([...list, note])
        setNote('')
    }

    return(
        <div>
            <h2 >Notas Libres</h2>
            <FreeNoteList list={list} />
            <br />
            <form onSubmit={handleForm}>
                <label htmlFor="freenote">Freenote</label> 
                <input className="m-3 p-2 border border-purple-500 rounded-md outline-none" name="freenote" type="text" placeholder="Free Note" value={note} onChange={handleNote} />
                <button type="submit" className="m-3 p-2 border border-purple-500 bg-purple-100 rounded-md outline-none" >Guardar</button>
            </form>

        </div>
    )

}
