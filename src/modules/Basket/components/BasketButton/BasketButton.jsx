import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openBasket } from '../../index'
import styles from './styles.module.scss'

export default function BasketButton({ deviceType }) {
    const { products, price, discount } = useSelector(state => state.basket.total)
    const dispatch = useDispatch()
    const handleBasketBtnClick = () => {
        openBasket(dispatch)
    }

    const hasProducts = products > 0
    const isDesktop = deviceType === 'desktop'
    const hasDiscount = discount.status === 'loaded'

    return (
        <button className={`${styles.basket_btn} ${styles[deviceType]}`} onClick={handleBasketBtnClick}>
            <div>
                {hasProducts && <span>{products}</span>}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                    <path d='m45.06,17.03h-6.04l-5.68-8.95c.27-.45.43-.97.43-1.53,0-1.67-1.35-3.02-3.02-3.02s-3.02,1.35-3.02,3.02,1.35,3.02,3.02,3.02c.09,0,.18-.02.28-.03l4.75,7.48H14.22l4.75-7.48c.09,0,.18.03.28.03,1.67,0,3.02-1.35,3.02-3.02s-1.35-3.02-3.02-3.02-3.02,1.35-3.02,3.02c0,.56.16,1.08.43,1.53l-5.68,8.95h-6.04c-1.35,0-2.44,1.09-2.44,2.44v1.14c0,1.02.63,1.9,1.53,2.26l2.07,17.71c.39,3.35,3.23,5.88,6.61,5.88h24.58c3.38,0,6.22-2.53,6.61-5.88l2.07-17.71c.9-.36,1.53-1.24,1.53-2.26v-1.14c0-1.35-1.09-2.44-2.44-2.44ZM12.65,40.33s-.08,0-.13,0c-.64,0-1.17-.48-1.24-1.12l-1.2-11.83c-.07-.68.43-1.29,1.11-1.36.04,0,.08,0,.13,0,.64,0,1.17.48,1.24,1.12l1.2,11.83c.07.68-.43,1.29-1.11,1.36Zm6.17,0h-.06c-.66,0-1.21-.52-1.24-1.18l-.6-11.83c-.03-.68.49-1.27,1.18-1.3h0c.72,0,1.27.52,1.3,1.18l.6,11.83c.03.68-.49,1.27-1.18,1.3Zm6.18.1c-.69,0-1.24-.56-1.24-1.24v-11.92c0-.69.56-1.24,1.24-1.24s1.24.56,1.24,1.24v11.92c0,.69-.56,1.24-1.24,1.24Zm7.48-1.27c-.03.66-.58,1.18-1.24,1.18h-.06c-.68-.04-1.21-.62-1.18-1.3l.6-11.83c.03-.66.58-1.18,1.24-1.18.39.02.7.16.92.41.22.25.34.56.32.9l-.6,11.83Zm6.23.06c-.06.64-.6,1.12-1.24,1.12,0,0-.08,0-.12,0-.68-.07-1.18-.68-1.11-1.36l1.2-11.83c.06-.64.6-1.12,1.24-1.12.04,0,.08,0,.13,0,.68.07,1.18.68,1.11,1.36l-1.2,11.83Z' />
                </svg>
                {hasProducts && isDesktop && <span>{hasDiscount ? discount.price : price} ₽</span>}
            </div>
        </button>
    )
}
