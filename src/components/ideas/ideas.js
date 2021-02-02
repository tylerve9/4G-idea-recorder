import React, { useState, useEffect } from 'react';
import IdeaList from './Idealist'


export default function Ideas(){


    const [ideas, setIdeas] = useState([])
    const [idea, setIdea] = useState('')
    const [user, setUser] = useState({})
    const [date, setDate] = useState('')
    const [tag, setTag] = useState('')
    //const [listado, setListado] = useState([])


    function loadUser(){
        let userLogged = JSON.parse(localStorage.getItem("userLogged"))
        setUser(userLogged)
    }
    
    function handleIdea(e){
        setIdea(e.target.value)
    }

    function handleTag(e){
        setTag(e.target.value)
    }

    function handleDate(e){
        setDate(e.target.value)
    }

    function saveIdea(event){
        event.preventDefault()
        loadUser()
        console.log(user);
        let thisIdea = {
            idea: idea,
            date: date,
            user: 'Miguel',
            tag: tag
        }
        setIdeas([...ideas, thisIdea])
    }

    useEffect( () => {

        function saveList(){
            localStorage.setItem("ideasList", JSON.stringify(ideas))
        }
        saveList()
    },[ideas])


    return (
        <div>
            <div className="registroIdeas" >
                <form onSubmit={ saveIdea } >
                    <div >
                        <label htmlFor="idea">Idea</label>
                        <input className="m-3 p-2  outline-none" type="text" name="idea" placeholder="Idea" onChange={handleIdea}
                        value={idea} />
                        
                    </div>
                    <div >
                        <label htmlFor="date">Fecha</label>
                        <input className="m-3 p-2  outline-none" type="datetime-local" name="date" placeholder="Idea" onChange={handleDate}
                        value={date}  />

                    </div>
                    <div >
                        <label htmlFor="tag">Etiqueta</label>
                        <input className="m-3 p-2  outline-none" type="text" name="tag" placeholder="Etiqueta" onChange={handleTag}
                        value={tag}  />

                    </div>
                    <div>
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            </div>
            
            <IdeaList ideas={ideas} />
    </div>
    )
}