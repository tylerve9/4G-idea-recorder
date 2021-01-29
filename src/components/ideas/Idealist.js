import React, { useEffect } from 'react';



export default function IdeaList(){


    const [ideas, setIdeas] = React.useState([]);
    const [idea, setIdea] = React.useState('');
    const [user, setUser] = React.useState('');
    const [date, setDate] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [listado, setListado] = React.useState('');
    //const [ideas, setIdeas] = React.useState([]);


    function handleIdea(e){
        setIdea(e.target.value)
    }

    function handleTag(e){
        setTag(e.target.value)
    }

    function handleDate(e){
        setDate(e.target.value)
    }

    function loadUser(){
        let userLogged = JSON.parse(localStorage.getItem("userLogged"))
        setUser(userLogged)
    }

    function loadList(){
        let listStorage = JSON.parse(localStorage.getItem("ideasList"))
        setIdeas(listStorage)
    }
    function saveList(){
        localStorage.setItem("ideasList", JSON.stringify(ideas))
    }

    function saveIdea(event){
        event.preventDefault()
        let thisIdea = {
            idea: idea,
            date: date,
            user: user,
            tag: tag
        }
        setIdeas([...ideas, thisIdea])
    }

    useEffect( () => {
        loadList()
        loadUser()
    },[])

    useEffect( () => {
        saveList()
        showIdeas()
        //listaIdeasHtml()
    },[ideas])

    function showIdeas(){
        let lista = ''
        if(ideas.length > 0){
            lista = ( ideas.map((ideain, k ) => {
                return (
                    <div>
                    { ideain.idea } - 
                    { ideain.date } - 
                    { ideain.user } - 
                    { ideain.tag }
                    </div>
                )})
            )
        }else{
            lista = (
                <div>
                    <b> 
                        No hay Tareas para listar
                    </b>
                </div>
            )
        }   
        setListado(lista) 
        return listado        
    }

    return (
        <div>
            <div className="registroIdeas" >
                <form onSubmit={()=>{ saveIdea() }} >
                    <div >
                        <label htmlFor="idea">Idea</label>
                        <input type="text" name="idea" placeholder="Idea" onChange={handleIdea} />
                        
                    </div>
                    <div >
                        <label htmlFor="date">Fecha</label>
                        <input type="date" name="date" placeholder="Idea" onChange={handleDate}  />

                    </div>
                    <div >
                        <label htmlFor="tag">Etiqueta</label>
                        <input type="text" name="tag" placeholder="Etiqueta" onChange={handleTag}  />

                    </div>
                    <div>
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            (
            return (
                <>
                    {showIdeas}
                </>
             ) 
             ) 
                
            </div>
    </div>
    )
}