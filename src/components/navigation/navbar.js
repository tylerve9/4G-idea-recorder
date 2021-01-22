import React from 'react'
import logo from '../../logo.svg';

export default function Navbar(){
    return(
        <nav className="flex justify-center items-center">
          <img src={logo} className="App-logo " alt="logo" />
          <svg class="w-6 h-6 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
          <div class="flex">
            <div class="text-center p-4 m-2"><button className="px-4 py-2 mx-2 bg-blue-500 rounded-lg shadow-md border border-blue-700 text-white text-semibold outline-none">
              Calendario
              </button>
              </div>
            <div class="text-center p-4 m-2"><button className="px-4 py-2 mx-2 bg-blue-500 rounded-lg shadow-md border border-blue-700 text-white text-semibold outline-none">
              Ideas
              </button>
              </div>
              <div class="text-center p-4 m-2"><button className="px-4 py-2 mx-2 bg-blue-500 rounded-lg shadow-md border border-blue-700 text-white text-semibold outline-none">
              Notas Libres
              </button>
              </div>
              <div class="text-center p-4 m-2"><button className="px-4 py-2 mx-2 bg-blue-500 rounded-lg shadow-md border border-blue-700 text-white text-semibold outline-none">
              Pomodoro
              </button>
              </div>
          </div>
        </nav>
    )
}