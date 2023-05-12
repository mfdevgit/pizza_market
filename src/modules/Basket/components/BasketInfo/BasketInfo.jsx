import React from 'react'
import { useSelector } from 'react-redux'
import BasketDiscount from './components/BasketDiscout/BasketDiscount'
import BasketStats from './components/BasketStats/BasketStats'
import styles from './styles.module.scss'

export default function BasketInfo() {
    const { products, price } = useSelector(state => state.basket.total)
    const discount = useSelector(state => state.basket.discount)
    const [minTotalPrice, minFreeShipping] = [800, 1500]

    return (
        <div className={styles.basket_info}>
            <BasketDiscount />
            {price < minTotalPrice && <BasketStats title='Миним. заказ' data={['minTotalPrice', minTotalPrice]} />}
            {price < minFreeShipping && <BasketStats title='Беспл. доставка' data={['minFreeShipping', minFreeShipping]} />}
            <BasketStats title='Товары' data={['totalProducts', products]} />
            <BasketStats title='Итог' data={['totalPrice', price, discount.price]} />
            <button>Оформить заказ</button>
        </div>
    )
}

// ₽
