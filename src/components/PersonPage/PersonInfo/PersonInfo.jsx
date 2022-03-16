import PropTypes from 'prop-types'
import React from 'react'
import styles from './PersonInfo.module.css';

const PersonInfo = ({personInfo}) => {
    return (
        <>
            <div>
                <ul>
                    {personInfo.map(({ title, data }) => (
                        data && (
                            <li key={title}>
                                <span>{title} : {data}</span>
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