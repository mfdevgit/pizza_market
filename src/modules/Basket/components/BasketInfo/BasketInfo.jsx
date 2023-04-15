import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

export default function BasketInfo() {
    const { products, price } = useSelector(state => state.basket.total)

    return (
        <div className={styles.basket_info}>
            <p>
                <strong>Товаров</strong>
                <span>{products}</span>
            </p>
            <p>
                {' '}
                <strong>Сумма</strong>
                <span>{price} ₽</span>
            </p>
            <button>Оформить заказ</button>
        </div>
    )
}
