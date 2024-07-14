import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./NavLink.module.css";

const HeaderLink = ({ url, children }) => (
    <NavLink
        to={url}
        className={({ isActive }) => 
            `${styles.link} ${isActive ? styles.activeLink : ''}`
        }
    >
        {children}
    </NavLink>
);

HeaderLink.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default HeaderLink;
