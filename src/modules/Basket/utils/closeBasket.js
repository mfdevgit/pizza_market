import { setIsBasketOpen } from '../../../redux/slices/settings'
import styles from '../styles.module.scss'

export default function closeBasket(dispatch) {
    const overlay = document.querySelector(`.${styles.overlay}.${styles.open}`)
    const basket = document.querySelector(`.${styles.basket}.${styles.open}`)
    const app = document.querySelector('.app')
    if (overlay && basket) {
        overlay.classList.remove(styles.open)
        basket.classList.remove(styles.open)
        app.style.marginRight = '0'
        app.style.overflowY = 'auto'
        setTimeout(() => {
            dispatch(setIsBasketOpen(false))
        }, 300)
    }
}
