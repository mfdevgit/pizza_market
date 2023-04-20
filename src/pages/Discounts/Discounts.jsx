import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './styles.module.scss'

export default function Discounts({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <div className={styles.discounts}>
                <p>Информация об акциях.</p>
            </div>
        </>
    )
}
