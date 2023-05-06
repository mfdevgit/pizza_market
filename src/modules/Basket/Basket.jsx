import React from 'react'
import BasketProduct from './components/BasketProduct/BasketProduct'
import BasketInfo from './components/BasketInfo/BasketInfo'
import BasketEmpty from './components/BasketEmpty/BasketEmpty'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsBasketOpen } from '../../redux/slices/settings'

export default function Basket() {
    const products = useSelector(state => state.basket.data)
    const isBasketOpen = useSelector(state => state.settings.isBasketOpen)
    const dispatch = useDispatch()
    const handleCloseBasket = () => {
        dispatch(setIsBasketOpen(!isBasketOpen))
    }

    return (
        <>
            <div className={isBasketOpen ? styles.overlay : `${styles.overlay} ${styles.closed}`} onClick={handleCloseBasket} />
            <section className={isBasketOpen ? styles.basket : `${styles.basket} ${styles.closed}`}>
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
}
