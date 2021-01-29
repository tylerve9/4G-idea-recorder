import React, { useEffect, useState } from 'react'


export default function Day(props) {


    const [ideaCounter, setIdeaCounter ] = useState(0);
    //(props.day)? 'bg-green-500' : ''
    //{`(props.today)?'bg-green-200':'';` }
    function handleClick() {
        setIdeaCounter(ideaCounter+1)
    }
    return (
        <div className="w-36 h-36 border border-gray-900 p-1 m-0 text-right " onClick={handleClick}>
            Dia { props.day } 
            <p className="text-center pt-10">
                { (ideaCounter !== 0)? ideaCounter : '' }
                { (ideaCounter !== 0)? ' Idea' : '' }
            </p>
        </div>
    )
}
