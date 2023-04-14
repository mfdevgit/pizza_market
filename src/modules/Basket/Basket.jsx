import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import BasketProduct from './components/BasketProduct/BasketProduct'
import BasketInfo from './components/BasketInfo/BasketInfo'
import BasketEmpty from './components/BasketEmpty/BasketEmpty'
import styles from './styles.module.scss'

export default function Basket({ isBasketOpen, setIsBasketOpen }) {
    const products = useSelector(state => state.basket.data)
    const basket = useRef()
    const overlay = useRef()

    const closeBasket = () => {
        overlay.current.classList.remove(styles.open)
        basket.current.classList.remove(styles.open)
        setTimeout(() => {
            setIsBasketOpen(false)
        }, 300)
    }

    useEffect(() => {
        let scrollbar = window.innerWidth - document.documentElement.clientWidth
        if (isBasketOpen) {
            setTimeout(() => {
                overlay.current.classList.add(styles.open)
                basket.current.classList.add(styles.open)
                document.body.style = { marginRight: `${scrollbar}px`, overflowY: 'hidden' }
            }, 0)
        } else if (!isBasketOpen) {
            document.body.style = { marginRight: 'auto', overflowY: 'scroll' }
        }
    }, [isBasketOpen])

    return (
        isBasketOpen && (
            <>
                <div ref={overlay} className={styles.overlay} onClick={closeBasket} />
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
            </>
        )
    )
}
