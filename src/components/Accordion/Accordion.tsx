import React from 'react';

function Accordion(props: any) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBodY/>
    </div>
}

function AccordionTitle(props: any) {
    console.log("Accordion rendering")
    return <h3>{props.title}</h3>
}

function AccordionBodY() {
    console.log("Accordion rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;