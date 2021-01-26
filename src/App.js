
import './App.css';
import Navbar from './components/navigation/navbar';
import Calendar from './components/calendar/calendar'

function App() {
  return (
    <div className="App">
      <header className="h-20 w-full bg-purple-900 rounded-b-xl shadow-xl">
        <Navbar />
        
      </header>

      
      <div className="flex">
        <div className="w-20 h-auto border border-black ">Menu lateral</div>
        <div className="w-4 flex-auto flex h-screen border border-r-black justify-center">

          <div className="w-48 h-20 bg-red-900 text-white text-bold rounded-2xl shadow-lg mt-20 items-center">
            <p className="justify-center py-4">Contenido de los componentes</p>
          </div>
          <div>
            <Calendar />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
