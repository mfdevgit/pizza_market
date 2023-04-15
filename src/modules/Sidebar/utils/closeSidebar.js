import { setIsSidebarOpen } from '../../../redux/slices/settings'
import styles from '../styles.module.scss'

export default function closeSidebar(dispatch) {
    const overlay = document.querySelector(`.${styles.overlay}.${styles.open}`)
    const sidebar = document.querySelector(`.${styles.sidebar}.${styles.open}`)
    const app = document.querySelector('.app')
    if (overlay && sidebar) {
        overlay.classList.remove(styles.open)
        sidebar.classList.remove(styles.open)
        app.style.marginRight = '0'
        app.style.overflowY = 'auto'
        setTimeout(() => {
            dispatch(setIsSidebarOpen(false))
        }, 300)
    }
}
