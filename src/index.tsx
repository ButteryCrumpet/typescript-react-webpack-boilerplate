import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./components/app";
import Counter from "./components/counter";
import BorderWrapper from "./components/border-wrapper";

ReactDOM.render(
    <App msg="Hi" />,
    document.getElementById("app")
)
const mountPoint = document.getElementById("app2");
if (mountPoint) {    
    ReactDOM.render(
        <BorderWrapper inner={mountPoint.innerHTML} />,
        mountPoint
    )
}

const elements = document.querySelectorAll(".counter");
Array.prototype.forEach.call(elements, (element: HTMLElement, i: number) => {
    ReactDOM.render(
        <Counter />,
        element
    );
})
