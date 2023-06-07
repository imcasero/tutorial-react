/* eslint-disable react/prop-types */
/**
 * Ejemplo para entender el uso de props.children
 */

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Children props example</h1>
      <h2>Name: {props.name}</h2>
      {/* props.children pintará por defecto
            aquello que se encuentre entre las etiquetas de apertura y cierre 
            del componente de orden superior */}
      {props.children}
    </div>
  );
};

export default Ejemplo4;
