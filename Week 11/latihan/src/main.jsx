import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BasicEventHandling from "./BasicEventHandling.jsx";
import ControlledInput from "./ControlledInput.jsx";
import EventPropagation from "./EventPropagation.jsx";
import All from "./All.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <All />
  </React.StrictMode>,
)
