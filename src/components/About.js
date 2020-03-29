import React from "react";
import RandomColor from "../hoc/RandomColor";

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum incidunt nihil nostrum quibusdam. Expedita facere id incidunt totam. At et facere facilis id iure omnis placeat quasi ratione sequi totam!</p>
        </div>
    )
};

export default RandomColor(About);