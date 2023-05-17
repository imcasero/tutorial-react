import { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  const [age, setAge] = useState(22);

  const birthday = () => {
    setAge(age + 1); // este método actualiza la edad
  };

  return (
    <div>
      <h1>Hola, este es mi primer componente funcional! {props.name}</h1>
      <h2>Tu edad es: {age}</h2>
      <div>
        <button onClick={birthday}>¡Feliz cumpleaños!</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
