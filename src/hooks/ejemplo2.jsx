/**
 * Ejemplo de usos:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // Vamos a crear dos contadores distintos cada uno en un estado diferente
  const [cont1, setCont1] = useState(0);
  const [cont2, setCont2] = useState(0);

  // Vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)
  const myRef = useRef();

  function increment1() {
    setCont1(cont1 + 1);
  }

  function increment2() {
    setCont2(cont2 + 1);
  }

  /**
   * Trabajando con useEffect
   */

  /**
   * ?Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que hay un cambio en el estado del componente
   * se ejecuta aquello que esté dentro del useEffect()
   */
  // useEffect(() => {
  //   console.log("Change the state of the component");
  //   console.log("Showing reference to DOM element");
  //   console.log(myRef);
  // });
  /**
   * ?Caso 2: Ejecutar solo en algunos casos
   * en este caso solo cuando cambie contador 1,
   * es decir que se ejecuta el useEffect solo
   * cuando cont 1 cambie
   */
  // useEffect(() => {
  //   console.log("Change the state of the cont1");
  //   console.log("Showing reference to DOM element");
  //   console.log(myRef);
  // }, [cont1]);

  /**
   * ?Caso 3: Ejecutar solo en algunos casos
   * en este caso solo cuando cambie contador 1
   * o contador 2
   * es decir que se ejecuta el useEffect solo
   * cuando cont 1 o cont 2 cambie
   */
  useEffect(() => {
    console.log("Change the state of the cont1 or cont2");
    console.log("Showing reference to DOM element");
    console.log(myRef);
  }, [cont1, cont2]); //Esto viene a ser una lista

  return (
    <div>
      <h1>Example of useState(), useRef(), useEffect()</h1>
      <h2>Cont 1: {cont1}</h2>
      <h2>Cont 2: {cont2}</h2>
      {/* Ejemplo referenciado */}
      <h4 ref={myRef}>Example of reference element</h4>
      {/* Botones para cambiar los contadores*/}
      <button onClick={increment1}>Increment Cont1</button>
      <br></br>
      <button onClick={increment2}>Increment Cont2</button>
    </div>
  );
};

export default Ejemplo2;
