import React, { useState, useEffect } from 'react'

export default function Login(){

    const userLogged = ''

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    function loginPass(user){
        setLoggedIn(true)
        localStorage.setItem("loggedIn",JSON.stringify(loggedIn))
    }

    function loginFail(){
        console.log("Enviar mensaje de error al loguearse");
    }

    function logout(){
        setLoggedIn(false)
        setName("")
        setPass("")
        localStorage.setItem("loggedIn",JSON.stringify(loggedIn))
        localStorage.setItem("userLogged", "")
    }

    function handleName(e){
        setName(e.target.value)
    }

    function handlePass(e){
        setPass(e.target.value)
    }


    function login(event){
        event.preventDefault()
        let userList = JSON.parse(localStorage.userList); //getItem("userList")
        //let name = document.querySelector('#name')
        //let pass = document.querySelector('#pass')
        for (const key in userList) {
            if (Object.hasOwnProperty.call(userList, key)) {
                const element = userList[key];
                console.log(element);
                if((name != "" && name != null)){
                    if((element.nick == name)&& (element.pass == pass)){
                        loginPass(element)
                    }else{
                        loginFail()
                    }
                }
            }
        }
    }

    return (
        <div>
            <div className="flex flexauto">
                
                {(!loggedIn)?
                
                    <form className="flex row" onSubmit={login} >
                        <input id="name" className=" text-semibold outline-none" type="text" placeholder="user" aria-label="user" onChange={handleName} />
                        <input id="pass" className=" text-semibold outline-none" type="password" placeholder="pass" aria-label="password" onChange={handlePass} />
                        <button className="px-4 py-2 mx-2 bg-blue-500 rounded-lg shadow-md border border-blue-700 text-white text-semibold outline-none" type="submit">Login</button>
                    </form>
                :
                    <span><b>{ name } </b>
                    <button className="px-4 py-2 mx-2 bg-blue-500 rounded-lg shadow-md border border-blue-700 text-white text-semibold outline-none" type="submit" onClick={logout}>Logout</button>      
                    </span>
                }      
            </div>
        </div>
    )

}