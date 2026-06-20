import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
    debugger
    alert("Hello IT-KAMASUTRA")
}

// hello();

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>

    )
        ;
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is App component</>
}

function Rating() {
    console.log("Rating rendering");
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log("Star rendering")
    return <div>star</div>
}

function Accordion() {
    console.log("Accordion rendering")
    return <div>
        <h3>Меню</h3>
    </div>
}

export default App;
