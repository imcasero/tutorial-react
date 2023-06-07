/**
 * Ejemplo Hooks :
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from "react";

/**
 *
 * @returns Comopnente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const myContext = React.createContext(null);
const Component1 = () => {
  //Inicializamos un estado vacio que va a rellenarse con los
  //datos del padre
  const state = useContext(myContext);

  return (
    <div>
      <h1>The token is: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Component2></Component2>
    </div>
  );
};

const Component2 = () => {
  const state = useContext(myContext);
  return (
    <div>
      <h2>Then sesion is: {state.session}</h2>
    </div>
  );
};

export default function ComponentContext() {
  const initialState = {
    token: "1234143",
    session: 1,
  };
  //Creamos el estado de este comopnente
  const [sessionData, setSessionData] = useState(initialState);
  function updateSession() {
    setSessionData({
      token: "ADBCDE",
      session: sessionData.session + 1,
    });
  }
  return (
    <myContext.Provider value={sessionData}>
      {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
      {/* Ademas, si se actualiza, los componentes de aqui, tambien lo actualizan */}
      <h1>useState() and useContext() example</h1>
      <Component1></Component1>
      <button onClick={updateSession}>Update session</button>
    </myContext.Provider>
  );
}
