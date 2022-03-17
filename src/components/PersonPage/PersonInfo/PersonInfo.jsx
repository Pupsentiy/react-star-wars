import PropTypes from 'prop-types'
import React from 'react'
import styles from './PersonInfo.module.css';

const PersonInfo = ({personInfo}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {personInfo.map(({ title, data }) => (
                        data && (
                            <li className={styles.list__item} key={title}>
                                <span className={styles.item__title}>{title} : {data}</span>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </>
    )
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array,
}

export default PersonInfo;