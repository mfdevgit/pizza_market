import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './styles.module.scss'

export default function Delivery({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <div className={styles.delivery}>
                <p>Информация о доставке и условиях заказа.</p>
            </div>
        </>
    )
}
