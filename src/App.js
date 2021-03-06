import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/navigation/navbar';
//import Registrosideas from './components/registrosideas'
//import Calendar from './components/calendar/calendar'
import Ideas from './components/ideas/ideas';
import FreeNoteForm from './components/freenotes/freenoteform';

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
    function loadData(){
      localStorage.setItem("ideasList", JSON.stringify(ideasList))
      localStorage.setItem("userList", JSON.stringify(usersList))
      localStorage.setItem("userLogged", JSON.stringify(userLogged))
    
    }
    loadData()
  }, []);
  
//}


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
        <div className="w-80  border border-black ">Menu lateral
          <FreeNoteForm />
        </div>
        <div className="w-auto flex-auto flex h-screen border border-r-black justify-center">

          
          <div>
            {<Ideas />}
            {/* <Calendar /> */}
          </div>
          
         
        </div>
        
      </div>
      <div className="flex">
            {/* {<IdeaList />} */}
      </div>
    </div>
  );
}

export default App;
