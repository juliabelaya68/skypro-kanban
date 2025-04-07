import PropTypes from 'prop-types';
const Button =({text})=> {
   
    return <button className="button">{text}</button>;
};

Button.propTypes = {
    text: PropTypes.bool.isRequired,
  };
export default Button;