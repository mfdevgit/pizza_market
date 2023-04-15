import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../../modules/Sidebar/index'
import styles from './styles.module.scss'

export default function Categories({ deviceType }) {
    const location = useLocation()
    const dispatch = useDispatch()
    const handleLinkClick = () => {
        closeSidebar(dispatch)
    }

    return (
        <nav className={`${styles.categories} ${styles[deviceType]}`}>
            <Link to='/pizzas' className={location.pathname === '/pizzas' ? styles.active : undefined} onClick={handleLinkClick}>
                {deviceType === 'mobile' && <img src='/images/icons/pizza.png' alt='картинка' />}
                <span>Пиццы</span>
            </Link>
            <Link to='/snacks' className={location.pathname === '/snacks' ? styles.active : undefined} onClick={handleLinkClick}>
                {deviceType === 'mobile' && <img src='/images/icons/snack.png' alt='картинка' />}
                <span>Закуски</span>
            </Link>
            <Link to='/desserts' className={location.pathname === '/desserts' ? styles.active : undefined} onClick={handleLinkClick}>
                {deviceType === 'mobile' && <img src='/images/icons/dessert.png' alt='картинка' />}
                <span>Десерты</span>
            </Link>
            <Link to='/drinks' className={location.pathname === '/drinks' ? styles.active : undefined} onClick={handleLinkClick}>
                {deviceType === 'mobile' && <img src='/images/icons/drink.png' alt='картинка' />}
                <span>Напитки</span>
            </Link>
        </nav>
    )
}
