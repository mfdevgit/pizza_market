import { setIsBasketOpen } from '../../../redux/slices/settings'
import styles from '../styles.module.scss'

export default function openBasket(dispatch) {
    dispatch(setIsBasketOpen(true))
    let scrollbar = window.innerWidth - document.documentElement.clientWidth
    const overlay = document.querySelector(`.${styles.overlay}`)
    const basket = document.querySelector(`.${styles.basket}`)
    const app = document.querySelector('.app')
    if (overlay && basket) {
        overlay.classList.add(styles.open)
        basket.classList.add(styles.open)
        app.style.marginRight = `${scrollbar}px`
        app.style.overflowY = 'auto'
    }
}
