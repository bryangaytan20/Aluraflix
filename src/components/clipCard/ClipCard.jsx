import PropTypes from 'prop-types';
import './ClipCard.css';
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";

const ClipCard = ({ datos, primaryColor, onClick, onDelete, onEdit }) => {
    const { title, photo } = datos;

    const handleClick = () => {
        onClick();
        const bannerElement = document.getElementById('banner');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete();
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit(datos);
    };

    return (
        <div className="card" style={{ '--primary-color': primaryColor, cursor: 'pointer' }}>
            <figure className="card__header">
                <img
                    src={photo}
                    alt={title}
                    className="card__image"
                    onClick={handleClick}
                />
                <figcaption className="card__icons">
                    <div className="card__icon-wrapper card-icon-delete" onClick={handleDelete}>
                        <RiDeleteBin2Line className="card__icon" />
                        <span className="card__icon-text">BORRAR</span>
                    </div>
                    <div className="card__icon-wrapper card-icon-edit" onClick={handleEdit}>
                        <RiEdit2Line className="card__icon" />
                        <span className="card__icon-text">EDIT</span>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

ClipCard.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    datos: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ClipCard;
