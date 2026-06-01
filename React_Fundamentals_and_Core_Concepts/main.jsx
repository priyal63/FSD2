import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myapp from "./Myapp.jsx"
import Task from "./Task.jsx"
import Mainapp from './Mainapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mainapp/>
    {/* <Myapp />
    <Task/>  all function you want to display then import hear */}
  </StrictMode>,
)
