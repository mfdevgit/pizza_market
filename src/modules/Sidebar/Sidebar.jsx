import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Credits from '../../components/Credits/Credits'
import useSidebar from './hooks/useSidebar'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import closeSidebar from './utils/closeSidebar'

export default function Sidebar() {
    const dispatch = useDispatch()
    const location = useLocation()
    const { overlayRef, sidebarRef, isSidebarOpen, handleSidebarClose } = useSidebar()

    const handleLinkClick = e => {
        const element = e.currentTarget
        if (element) {
            element.classList.add(styles.clicked)
            setTimeout(() => {
                closeSidebar(dispatch)
            }, 150)
        }
    }

    return isSidebarOpen ? (
        <>
            <div ref={overlayRef} className={styles.overlay} onClick={handleSidebarClose} />
            <div ref={sidebarRef} className={styles.sidebar}>
                <div className={styles.navigation}>
                    <Link to='/pizzas' className={location.pathname === '/pizzas' && styles.active} onClick={handleLinkClick}>
                        <img src='/images/categories/pizza.png' alt='картинка' />
                        <span>Пиццы</span>
                    </Link>
                    <Link to='/snacks' className={location.pathname === '/snacks' && styles.active} onClick={handleLinkClick}>
                        <img src='/images/categories/snack.png' alt='картинка' />
                        <span>Закуски</span>
                    </Link>
                    <Link to='/desserts' className={location.pathname === '/desserts' && styles.active} onClick={handleLinkClick}>
                        <img src='/images/categories/dessert.png' alt='картинка' />
                        <span>Десерты</span>
                    </Link>
                    <Link to='/drinks' className={location.pathname === '/drinks' && styles.active} onClick={handleLinkClick}>
                        <img src='/images/categories/drink.png' alt='картинка' />
                        <span>Напитки</span>
                    </Link>
                </div>
                <div className={styles.subnavigation}>
                    <Link to='/delivery' className={location.pathname === '/delivery' && styles.active} onClick={handleLinkClick}>
                        Доставка
                    </Link>
                    <Link to='/discounts' className={location.pathname === '/discounts' && styles.active} onClick={handleLinkClick}>
                        Акции
                    </Link>
                    <Link to='/questions' className={location.pathname === '/questions' && styles.active} onClick={handleLinkClick}>
                        F.A.Q.
                    </Link>
                </div>
                <Credits deviceType='mobile' />
            </div>
        </>
    ) : null
}
