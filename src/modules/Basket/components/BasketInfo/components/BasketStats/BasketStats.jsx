import React from 'react'
import styles from './styles.module.scss'

export default function BasketStats({ title, data }) {
    return (
        <div className={styles.basket_stats}>
            <strong>{title}</strong>
            {Array.isArray(data) ? (
                <>
                    <span>{data[0]}</span>
                    <span className={styles.old}>{data[1]}</span>
                </>
            ) : (
                <span>{data}</span>
            )}
        </div>
    )
}
