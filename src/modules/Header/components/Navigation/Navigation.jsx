import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Navigation({ device }) {
    const location = useLocation()

    return device === 'mobile' ? (
        <button className={styles.navigation_btn}>меню</button>
    ) : (
        <ul className={styles.navigation}>
            <li>
                <Link to='/pizzas' className={location.pathname === '/pizzas' ? styles.active : undefined}>
                    Пиццы
                </Link>
            </li>
            <li>
                <Link to='/snacks' className={location.pathname === '/snacks' ? styles.active : undefined}>
                    Закуски
                </Link>
            </li>
            <li>
                <Link to='/desserts' className={location.pathname === '/desserts' ? styles.active : undefined}>
                    Десерты
                </Link>
            </li>
            <li>
                <Link to='/drinks' className={location.pathname === '/drinks' ? styles.active : undefined}>
                    Напитки
                </Link>
            </li>
        </ul>
    )
}
