import React from "react";
import ReactDOM from "react-dom/client";

// React Element => JS Object => HTMLElement(render)
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
);

// JSX - HTML/XML like syntax
const jsxHeading = <h1>Namaste React using JSX🚀</h1>;

// JSX => React.createElement (Babel) => React Element => HTML Element (render)

const Title = () => <h1>Namaste React using JSX</h1>;
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h2>Namaste React Functional Component</h2>
    </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeadingComponent />);