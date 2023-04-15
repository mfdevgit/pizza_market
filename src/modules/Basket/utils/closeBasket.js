import { setIsBasketOpen } from '../../../redux/slices/settings'
import styles from '../styles.module.scss'

export default function closeBasket(dispatch) {
    const overlay = document.querySelector(`.${styles.overlay}.${styles.open}`)
    const basket = document.querySelector(`.${styles.basket}.${styles.open}`)
    if (overlay && basket) {
        overlay.classList.remove(styles.open)
        basket.classList.remove(styles.open)
        document.body.style.marginRight = '0'
        document.body.style.overflowY = 'scroll'
        setTimeout(() => {
            dispatch(setIsBasketOpen(false))
        }, 300)
    }
}
