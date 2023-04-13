import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

export default function BasketInfo() {
    const totalPrice = useSelector(state => state.basket.total.price)
    const totalProducts = useSelector(state => state.basket.total.products)

    return (
        <div className={styles.basket_info}>
            <p>
                <strong>Товаров</strong>
                <span>{totalProducts}</span>
            </p>
            <p>
                {' '}
                <strong>Сумма</strong>
                <span>{totalPrice} ₽</span>
            </p>
            <button>Оформить заказ</button>
        </div>
    )
}
