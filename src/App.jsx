// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import ContactListComponent from "./components/container/contact_list";
// eslint-disable-next-line no-unused-vars
import TaskListComponent from "./components/container/task_list";
// eslint-disable-next-line no-unused-vars
import Greeting from "./components/pure/greeting";
// eslint-disable-next-line no-unused-vars
import GreetingF from "./components/pure/greetingF";
// eslint-disable-next-line no-unused-vars
import Ejemplo1 from "./hooks/ejemplo1";
// eslint-disable-next-line no-unused-vars
import Ejemplo2 from "./hooks/ejemplo2";
// eslint-disable-next-line no-unused-vars
import ComponentContext from "./hooks/ejemplo3";
import Ejemplo4 from "./hooks/ejemplo4";

function App() {
  return (
    <>
      <div>
        {/* Componente propio */}
        {/* <Greeting name="Diego"></Greeting> */}
        {/* <GreetingF name="Diego"></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <ComponentContext></ComponentContext> */}
        <Ejemplo4 name="Diego">
          {/* Todo lo que hay aqui dentro, es tratado como porps.children */}
          <h3>props.children content</h3>
        </Ejemplo4>
      </div>
    </>
  );
}

export default App;
