import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/navigation/navbar';
//import Navbar from './components/navigation/navbar';
//import Registrosideas from './components/registrosideas'
import Calendar from './components/calendar/calendar'
import IdeaList from './components/ideas/Idealist';

function App() {

  const ideasList = []
  const userLogged = {}

  const usersList = [{
      nick: "Miguel",
      pass: "admin1"
    },{
      nick: "Karina",
      pass: "admin2"
    }
  ]
  
//componentDidMount() {
  useEffect(() => {
    loadData()
  }, []);
  
//}

function loadData(){
  localStorage.setItem("ideasList", JSON.stringify(ideasList))
  localStorage.setItem("userList", JSON.stringify(usersList))
  localStorage.setItem("userLogged", JSON.stringify(userLogged))

}
//<Registrosideas /> 
//<Calendario />
//<div className="w-48 h-20 bg-red-900 text-white text-bold rounded-2xl shadow-lg mt-20 items-center">
//</div>
///<p className="justify-center py-4">Contenido de los componentes</p>

  return (
    <div className="App">
      <header className="h-20 w-full bg-purple-900 rounded-b-xl shadow-xl">
        <Navbar /> 
      
        
      </header>

      
      <div className="flex">
        <div className="w-60  border border-black ">Menu lateral</div>
        <div className="w-4 flex-auto flex h-screen border border-r-black justify-center">

          
          <div>
            <Calendar />
          </div>
          
         
        </div>
        
      </div>
      <div className="flex">
            <IdeaList />
      </div>
    </div>
  );
}

export default App;
