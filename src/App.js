import './App.css';

import Notebook from "./Component/Notebook/Notebook";
import Car from "./Component/Car/Car";
import Cat from "./Component/Cat/Cat";
import Dog from "./Component/Dog/Dog";
import Girl from "./Component/Girl/Girl";


import {NavLink, Outlet, Route, Routes} from "react-router-dom";


const Layout = () => (
    <div className="Layout">
        <NavLink to="car">
            <button className="Car">Car</button>
        </NavLink>
        <NavLink to="cat">
            <button className="Car">Cat</button>
        </NavLink>
        <NavLink to="dog">
            <button className="Car">Dog</button>
        </NavLink>
        <NavLink to="girl">
            <button className="Car">Girl</button>
        </NavLink>
        <NavLink to="notebook">
            <button className="Car">Notebook</button>
        </NavLink>
        <Outlet/>
    </div>
)

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/car" element={<Car/>}/>
                                      <Route path="cat" element={<Cat/>}/>
                    <Route path="dog" element={<Dog/>}/>
                    <Route path="girl" element={<Girl/>}/>
                    <Route path="notebook" element={<Notebook/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
