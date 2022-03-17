import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'

import { getPeopleImage } from "@services/getPeopleData"
import { getApiResource } from '@utils/network'
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';


const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonFoto] = useState(null)


    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair color', data: res.hair_color },
                    { title: 'Scin color', data: res.scin_color },
                    { title: 'Eye color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },

                ]);

                setPersonName(res.name)
                setPersonFoto(getPeopleImage(id))

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })();
    }, [])



    return (
        <>
            <PersonLinkBack/>
            
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                </div>

            </div>
        </>
    )
}

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);  