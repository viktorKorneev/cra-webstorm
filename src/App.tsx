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
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Rating value={2}/>
            <Accordion title={"Title menu"}/>
            <Accordion title={"Body menu"}/>
            Article 2
            <Rating value={5}/>
            <Rating value={4}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={1}/>
        </div>

    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}



export default App;
