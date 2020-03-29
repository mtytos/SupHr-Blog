import React from "react";

const RandomColor = (WrappedComponent) => {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colors[Math.floor(Math.random() * 6)];
    const styleName = randomColor + '-text';

    return (props) => {
        return (
            <div className={styleName}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

};

export default RandomColor;