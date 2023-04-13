import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import BasketProduct from './components/BasketProduct/BasketProduct'
import BasketInfo from './components/BasketInfo/BasketInfo'
import BasketEmpty from './components/BasketEmpty/BasketEmpty'

export default function Basket() {
    const products = useSelector(state => state.basket.data)
    const basket = useRef()

    useEffect(() => {
        setTimeout(() => {
            basket.current.classList.toggle(styles.open)
        }, 0)
    }, [])

    return (
        <section ref={basket} className={styles.basket}>
            {products.length > 0 ? (
                <>
                    <div className={styles.basket_items}>
                        {products.map(element => {
                            if (element.category === 'pizzas') {
                                return <BasketProduct key={`${element.id}_${element.size}_${element.dough}`} data={element} />
                            } else {
                                return <BasketProduct key={element.id} data={element} />
                            }
                        })}
                    </div>
                    <BasketInfo />
                </>
            ) : (
                <BasketEmpty />
            )}
        </section>
    )
}
