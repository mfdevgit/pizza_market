import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import BasketProduct from '../../components/BasketProduct/BasketProduct'

export default function Basket() {
    const products = useSelector(state => state.basket.items)
    const basket = useRef()

    useEffect(() => {
        setTimeout(() => {
            basket.current.classList.toggle(styles.open)
        }, 0)
    }, [])

    return (
        <section ref={basket} className={styles.basket}>
            {products.length ? (
                products.map(element => {
                    return (
                        <BasketProduct
                            id={element.id}
                            title={element.title}
                            description={element.description}
                            image={element.image}
                            price={element.price}
                        />
                    )
                })
            ) : (
                <p className={styles.empty}>Корзина пуста. Добавьте пиццу, закуски, десерты или напитки, и мы доставим заказ в ближайшее время.</p>
            )}
        </section>
    )
}
