import React from 'react';
import PropTypes from 'proptypes';
import './button.css';

const Button = props => {
    return (
        <button className="button"
                required={props.required}
                onClick={props.onClick}
                style={props.style}>
            {props.icon ?
                <img src={props.icon}
                     alt=""
                     aria-hidden
                     className="button__icon" /> : null}
            {props.children}
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.string,
    required: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
}

export default Button;