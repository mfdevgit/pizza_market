import React from 'react'
import BasketProduct from './components/BasketProduct/BasketProduct'
import BasketInfo from './components/BasketInfo/BasketInfo'
import BasketEmpty from './components/BasketEmpty/BasketEmpty'
import useBasket from './hooks/useBasket'
import styles from './styles.module.scss'

export default function Basket() {
    const { overlayRef, basketRef, products, isBasketOpen, closeBasket } = useBasket()

    return (
        isBasketOpen && (
            <>
                <div ref={overlayRef} className={styles.overlay} onClick={closeBasket} />
                <section ref={basketRef} className={styles.basket}>
                    {products.length > 0 ? (
                        <>
                            <div className={styles.basket_items}>
                                {products.map(element => {
                                    if (element.category === 'pizzas') {
                                        const { id, size, dough } = element
                                        return <BasketProduct key={`${id}_${size}_${dough}`} data={element} />
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
