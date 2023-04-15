import { setIsSidebarOpen } from '../../../redux/slices/settings'
import styles from '../styles.module.scss'

export default function closeSidebar(dispatch) {
    const overlay = document.querySelector(`.${styles.overlay}.${styles.open}`)
    const sidebar = document.querySelector(`.${styles.sidebar}.${styles.open}`)
    if (overlay && sidebar) {
        overlay.classList.remove(styles.open)
        sidebar.classList.remove(styles.open)
        setTimeout(() => {
            dispatch(setIsSidebarOpen(false))
        }, 300)
    }
}
