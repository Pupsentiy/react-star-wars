import PropTypes from "prop-types"
import React from 'react'
import cn from 'classnames'

import '../index.css'
import styles from './UiButton.module.css';

const UiButton = ({ 
    text, 
    onClick, 
    disabled, 
    theme='dark'
}) => {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={styles.button}
            >
                {text}
            </button>
            
        </>

        
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
}

export default UiButton;