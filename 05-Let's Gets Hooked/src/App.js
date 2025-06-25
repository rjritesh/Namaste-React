import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
