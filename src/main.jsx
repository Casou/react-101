import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import RandomDish from "./components/RandomDish";
import SingleDish from "./components/SingleDish";

ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
