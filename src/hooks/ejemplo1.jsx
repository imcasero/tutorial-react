/**
 * Ejemplo de uso del Hook de useState
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook, además de poder modificarlo.
 */
import { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial para un contador
  const initialValue = 0;

  // Valor inicial para una persona
  const initialPerson = {
    name: "Diego",
    email: "correofalso@diego.com",
  };

  /**
   * Queremos que initialValue y initialPerson sean
   * parte del estado del componente para así poder gestionar su cambio
   * y que este se vea renderizado en la vista del componente.
   *
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */

  const [cont, setCont] = useState(initialValue);
  const [person, setPerson] = useState(initialPerson);
  console.log(person.name);
  /**
   * Función para actualizar el estado privado que contiene el contador.
   */
  function incrementCont() {
    //? funcionParaCambiar(nuevoValor)
    setCont(cont + 1);
  }

  function updatePerson() {
    setPerson({
      name: "Nuevo nombre",
      email: "nuevoemail@diego.com",
    });
  }

  // Llamada a las funciones
  // incrementCont();
  // updatePerson();

  return (
    <div>
      <h1>first hook , with useState()</h1>
      <h2>Cont : {cont}</h2>
      <h2>Person data :</h2>
      <h3>Name : {person.name}</h3>
      <h3>email : {person.email}</h3>
      {/* Bloque de botones para actualizar el estado */}
      <button onClick={incrementCont}>Increment Cont</button>
      <br></br>
      <button onClick={updatePerson}>Update Person</button>
    </div>
  );
};

export default Ejemplo1;
