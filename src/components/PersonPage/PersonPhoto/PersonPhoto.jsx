import PropTypes from 'prop-types'
import React from 'react'
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personPhoto, personName }) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
            </div>
        </>
    )
}

PersonPhoto.propTypes = {
    PersonPhoto: PropTypes.string,   
    PersonName: PropTypes.string,   
}

export default PersonPhoto;