import React from 'react'
import styles from './styles.module.scss'

export default function BasketStats({ title, data }) {
    let formattedData
    switch (data[0]) {
        case 'totalProducts':
            formattedData = data[1]
            break
        case 'totalPrice':
            if (data[2] === undefined) {
                formattedData = data[1] + ' ₽'
            } else {
                formattedData = [`${data[1]} ₽`, `${data[2]} ₽`]
            }
            break
        case 'minTotalPrice':
            formattedData = data[1] + ' ₽'
            break
        case 'minFreeShipping':
            formattedData = data[1] + ' ₽'
            break
    }
    return (
        <div className={styles.basket_stats}>
            <strong>{title}</strong>
            {Array.isArray(formattedData) ? (
                <>
                    <span className={styles.new}>{formattedData[1]}</span>
                    <span className={styles.old}>{formattedData[0]}</span>
                </>
            ) : (
                <span>{formattedData}</span>
            )}
        </div>
    )
}
