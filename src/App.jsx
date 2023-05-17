// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";

function App() {
  return (
    <>
      <div>
        {/* Componente propio */}
        {/* <Greeting name="Diego"></Greeting> */}
        <GreetingF name="Diego"></GreetingF>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Hola react!</h2>
    </>
  );
}

export default App;
