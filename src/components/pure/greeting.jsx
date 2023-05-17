import { Component } from "react";
import PropTypes from "prop-types";
// COMPONENTE MODO CLASE
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 22,
    };
  }

  render() {
    return (
      <div>
        <h1>Hola, este es mi primer componente de clase! {this.props.name}</h1>
        <h2>Tu edad es: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>¡Feliz cumpleaños!</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
