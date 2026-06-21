import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function hello() {
    debugger
    alert("Hello IT-KAMASUTRA")
}

// hello();

function App() {
    return (
        <div>
            <AppTitle/>
            Article 1
            <Rating value={2}/>
            <Accordion/>
            Article 2
            <Rating value={5}/>
            <Rating value={4}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={1}/>
        </div>

    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <div>This is App component</div>
}



export default App;
