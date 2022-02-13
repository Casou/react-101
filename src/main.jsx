import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import RandomDish from "./components/RandomDish";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route path={"/menu"} element={<Menu />} />
                    <Route path={"/random"} element={<RandomDish />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
