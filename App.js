import React from "react";
import ReactDOM from "react-dom/client";


const TitleComponent = () => {
    <h1 tabIndex={5}> React </h1>
}


const HeaderComponent = () => {
    (
        <div>
            <TitleComponent />
            <h1 id="heading" tabIndex={5}> Namaste React using Javascript</h1>
        </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);