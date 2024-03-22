import React from 'react'
import ReactDOM from 'react-dom/client'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from "react-router-dom";
// import {CounterApp} from './01-useState/CounterApp'
// import {SimpleFrom} from './02-useEffect/SimpleForm'
// import {Padre} from './07-tarea-memo/Padre'
// import "./08-useReducer/intro-reducer"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {<MainApp />}
    </BrowserRouter>

  </React.StrictMode>,
)
