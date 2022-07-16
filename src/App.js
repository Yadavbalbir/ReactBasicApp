import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Startup from "./pages/startup/Startup";

function App() {
  return (
    <BrowserRouter> 
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/startups" element={<List/>}/>
        <Route path="/startups/:id" element={<Startup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

