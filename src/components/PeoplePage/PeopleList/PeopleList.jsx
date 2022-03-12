import React from 'react'
import styles from './PeopleList.module.css'
import PropTypes from 'prop-types'

const PeopleList = ({ people }) => {
    return (
        <>
            <ul className={styles.list__container}>
                {people.map(({ id, name, img }) =>
                    <li key={id} className={styles.list__item}>
                        <a href="#">
                            <img src={img} alt={name} className={styles.person__foto} />
                            <p>{name}</p>
                        </a>
                    </li>
                )}
            </ul>
        </>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;