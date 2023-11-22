import PropTypes from "prop-types";

function Input({ handleClick, handleChange }) {
  return (
    <div className="header">
      <h1>Todo-List</h1>
      <div className="giris">
        <input id="input" type="text" onChange={handleChange} />
        <button onClick={handleClick}>Ekle</button>
      </div>
    </div>
  );
}

Input.propTypes = {
  handleClick: PropTypes.node,
  handleChange: PropTypes.node,
};

export default Input;
