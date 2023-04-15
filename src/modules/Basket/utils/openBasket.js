import { setIsBasketOpen } from '../../../redux/slices/settings'
import styles from '../styles.module.scss'

export default function openBasket(dispatch) {
    dispatch(setIsBasketOpen(true))
    let scrollbar = window.innerWidth - document.documentElement.clientWidth
    const overlay = document.querySelector(`.${styles.overlay}`)
    const basket = document.querySelector(`.${styles.basket}`)
    if (overlay && basket) {
        overlay.classList.add(styles.open)
        basket.classList.add(styles.open)
        document.body.style.marginRight = `${scrollbar}px`
        document.body.style.overflowY = 'hidden'
    }
}
