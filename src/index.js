import React from "react"; // Import the React libraries
import ReactDOM from "react-dom/client"; // Document of the React is created in here.
import "./index.css"; // css file related to this file.
// import /*Sadeepal*/ App from "./App"; // Import the App.js. In export default, we can use any name to import the component.
import App1 from "./App1";

const root = ReactDOM.createRoot(document.getElementById("app")); // The meaning of document.getElementById("root") is that target the element of id named root in the document. So what happens in here is that ReactDOM pushes the React components which were created in React that to the element which id named root.
// ReactDOM pushes the things(web site or web app) which were created from React that to the HTML document.
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sadeepal /> */}
    <App1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// This is the main file.
// <App /> is a React component. This comes from the file of import App from "./App";
