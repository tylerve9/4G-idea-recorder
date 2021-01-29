import React from 'react';



export default function IdeaList(){


    const [ideas, setIdeas] = React.useState([]);
    const [idea, setIdea] = React.useState([]);
    const [user, setUser] = React.useState([]);
    const [date, setDate] = React.useState(new Date());
    const [ideas, setIdeas] = React.useState([]);


    function loadList(){
        let listStorage = JSON.parse(localStorage.getItem("ideasList"))
        setIdeas(listStorage)
    }

    function save(){

    }


    return (
        <div>


        </div>
    )
}