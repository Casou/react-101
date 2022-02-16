import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import RandomDish from "./components/RandomDish";
import SingleDish from "./components/SingleDish";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route path={"/menu"}>
                      <Route index element={<Menu />} />
                      <Route path={":id"} element={<SingleDish />} />
                    </Route>
                    <Route path={"/random"} element={<RandomDish />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
