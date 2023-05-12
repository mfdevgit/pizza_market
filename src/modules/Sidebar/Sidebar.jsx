import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Credits from '../../components/Credits/Credits'
import { setIsSidebarOpen } from '../../redux/slices/settings'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'

export default function Sidebar() {
    const location = useLocation()
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(state => state.settings.isSidebarOpen)

    const handleCloseSidebar = () => {
        dispatch(setIsSidebarOpen(!isSidebarOpen))
    }

    return (
        <>
            <div className={isSidebarOpen ? styles.overlay : `${styles.overlay} ${styles.closed}`} onClick={handleCloseSidebar} />
            <div className={isSidebarOpen ? styles.sidebar : `${styles.sidebar} ${styles.closed}`}>
                <div className={styles.navigation}>
                    <Link to='/pizzas' className={location.pathname === '/pizzas' ? styles.active : undefined} onClick={handleCloseSidebar}>
                        <img src='/images/categories/pizza.png' alt='картинка' />
                        <span>Пиццы</span>
                    </Link>
                    <Link to='/snacks' className={location.pathname === '/snacks' ? styles.active : undefined} onClick={handleCloseSidebar}>
                        <img src='/images/categories/snack.png' alt='картинка' />
                        <span>Закуски</span>
                    </Link>
                    <Link to='/desserts' className={location.pathname === '/desserts' ? styles.active : undefined} onClick={handleCloseSidebar}>
                        <img src='/images/categories/dessert.png' alt='картинка' />
                        <span>Десерты</span>
                    </Link>
                    <Link to='/drinks' className={location.pathname === '/drinks' ? styles.active : undefined} onClick={handleCloseSidebar}>
                        <img src='/images/categories/drink.png' alt='картинка' />
                        <span>Напитки</span>
                    </Link>
                </div>
                <div className={styles.subnavigation}>
                    <Link to='/delivery' className={location.pathname === '/delivery' ? styles.active : undefined} onClick={handleCloseSidebar}>
                        Доставка
                    </Link>
                    <Link to='/discounts' className={location.pathname === '/discounts' ? styles.active : undefined} onClick={handleCloseSidebar}>
                        Акции
                    </Link>
                    <Link to='/questions' className={location.pathname === '/questions' ? styles.active : undefined} onClick={handleCloseSidebar}>
                        F.A.Q.
                    </Link>
                </div>
                <Credits deviceType='mobile' />
            </div>
        </>
    )
}
