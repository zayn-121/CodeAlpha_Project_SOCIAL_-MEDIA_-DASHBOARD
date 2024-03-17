import React from "react";
import  ReactDOM  from "react-dom/client";
import Head from "./Head";
import Body from "./Body";


const App = () =>{
    return(
        <>
            <Head />
            <Body />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)