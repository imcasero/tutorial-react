import PropTypes from "prop-types";

const ButtonComponent = ({ isConnected, handleClick }) => {
  const buttonContent = isConnected ? "Connected" : "Disconnected";

  return <button onClick={handleClick}>{buttonContent}</button>;
};

ButtonComponent.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
