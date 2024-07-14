import PropTypes from 'prop-types';
import './FormButton.css';

const FormButton = ({ type, label, onClick, disabled, variant }) => {
    return (
        <button
            type={type}
            className={`custom-button custom-button--${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

FormButton.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.string.isRequired,
};

FormButton.defaultProps = {
    onClick: null,
    disabled: false
};

export default FormButton;

