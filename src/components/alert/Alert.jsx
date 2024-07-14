import { useState } from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
import { BsCheckCircle } from "react-icons/bs";

const Alert = ({ message, onClose, color }) => {
    const [visible, setVisible] = useState(true);

    const handleDismiss = () => {
        setVisible(false);
        onClose();
    };

    return (
        <div className={`alert-box ${visible ? 'visible' : 'hidden'}`} style={{ backgroundColor: color }}>
            <div className="alert-content">
                <BsCheckCircle className='alert-icon' />
                <p className="alert-message">{message}</p>
                <button className="dismiss-button" onClick={handleDismiss}>X</button>
            </div>
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string
};

Alert.defaultProps = {
    color: 'var(--color-white)' 
};

export default Alert;

