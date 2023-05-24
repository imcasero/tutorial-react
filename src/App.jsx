// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import TaskListComponent from "./components/container/task_list";
import ContactComponent from "./components/pure/contact";
// eslint-disable-next-line no-unused-vars
import Greeting from "./components/pure/greeting";
// eslint-disable-next-line no-unused-vars
import GreetingF from "./components/pure/greetingF";

function App() {
  return (
    <>
      <div>
        {/* Componente propio */}
        {/* <Greeting name="Diego"></Greeting> */}
        {/* <GreetingF name="Diego"></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactComponent></ContactComponent>
      </div>
    </>
  );
}

export default App;
