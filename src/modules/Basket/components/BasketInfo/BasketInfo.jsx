import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BasketDiscount from './components/BasketDiscout/BasketDiscount'
import BasketStats from './components/BasketStats/BasketStats'
import styles from './styles.module.scss'

export default function BasketInfo() {
    const { products, price, discount } = useSelector(state => state.basket.total)
    const { name, description, tech } = discount.data

    return (
        <div className={styles.basket_info}>
            <BasketDiscount />
            {discount.status === 'loaded' ? (
                <>
                    <BasketStats title='Товары' data={products} />
                    <BasketStats title='Скидка' data={`${tech.ratio}%`} />
                    <BasketStats title='Сумма' data={[price, discount.price]} />
                </>
            ) : (
                <>
                    <BasketStats title='Товары' data={products} />
                    <BasketStats title='Товары' data={`${price} ₽`} />
                </>
            )}
            <button>Оформить заказ</button>
        </div>
    )
}
