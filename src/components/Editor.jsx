import React, { useState } from "react";
import './Editor.css';

const Editor = (props) => {
    // Use useState hook for state management
    const [value, setValue] = useState('');

    // Define the handleChange function
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="all">
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={handleChange} value={value} />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{value}</div>
                </div>                
            </div>
        </div>
    );
};

export default Editor;