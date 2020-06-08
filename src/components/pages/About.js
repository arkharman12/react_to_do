import React from 'react';

function About() {
    return (
        <React.Fragment>
            <h1 style={aboutStyle}>About</h1>
            <p>This is the TodoList app v1.0.0 made with React.js</p>
        </React.Fragment>   
    )
}

const aboutStyle = {
    fontFamily: "Monaco, sans-serif"
}

export default About;

