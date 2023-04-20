import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './styles.module.scss'

export default function Career({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <div className={styles.career}>
                <p>Информация о работе в компании.</p>
            </div>
        </>
    )
}
