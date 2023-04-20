import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './styles.module.scss'

export default function Questions({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <div className={styles.questions}>
                <p>Вопрос-ответ.</p>
            </div>
        </>
    )
}
