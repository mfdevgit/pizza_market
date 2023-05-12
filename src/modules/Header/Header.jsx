import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BasketButton } from '../Basket/index'
import styles from './styles.module.scss'

export default function Header() {
    const location = useLocation()
    const deviceType = useSelector(state => state.settings.deviceType)
    const logotypeRef = useRef()
    const subNavigationRef = useRef()

    const handleLogotypeClick = () => {
        logotypeRef.current.classList.add(styles.clicked)
        setTimeout(() => {
            logotypeRef.current.classList.remove(styles.clicked)
        }, 300)
    }

    const handleSubNavMouseEnter = () => {
        subNavigationRef.current.classList.remove(styles.closed)
    }
    const handleSubNavMouseLeave = () => {
        subNavigationRef.current.classList.add(styles.closed)
    }
    const handleSubNavLinkClick = () => {
        subNavigationRef.current.classList.add(styles.closed)
    }

    return (
        <header className={styles[deviceType]}>
            {deviceType === 'desktop' && (
                <div className={styles.wrapper}>
                    <Link
                        to='/'
                        className={styles.logotype}
                        ref={logotypeRef}
                        onClick={handleLogotypeClick}
                    />

                    <div className={styles.navigation}>
                        <Link
                            to='/pizzas'
                            className={location.pathname === '/pizzas' ? styles.active : undefined}
                        >
                            Пиццы
                        </Link>
                        <Link
                            to='/snacks'
                            className={location.pathname === '/snacks' ? styles.active : undefined}
                        >
                            Закуски
                        </Link>
                        <Link
                            to='/desserts'
                            className={location.pathname === '/desserts' ? styles.active : undefined}
                        >
                            Десерты
                        </Link>
                        <Link
                            to='/drinks'
                            className={location.pathname === '/drinks' ? styles.active : undefined}
                        >
                            Напитки
                        </Link>
                    </div>

                    <div
                        className={styles.subnavigation}
                        onMouseEnter={handleSubNavMouseEnter}
                        onMouseLeave={handleSubNavMouseLeave}
                    >
                        <button>Другое</button>
                        <div
                            ref={subNavigationRef}
                            className={styles.closed}
                        >
                            <Link
                                to='/delivery'
                                className={location.pathname === '/delivery' ? styles.active : undefined}
                                onClick={handleSubNavLinkClick}
                            >
                                Доставка
                            </Link>
                            <Link
                                to='/discounts'
                                className={location.pathname === '/discounts' ? styles.active : undefined}
                                onClick={handleSubNavLinkClick}
                            >
                                Акции
                            </Link>
                            <Link
                                to='/questions'
                                className={location.pathname === '/questions' ? styles.active : undefined}
                                onClick={handleSubNavLinkClick}
                            >
                                F.A.Q.
                            </Link>
                        </div>
                    </div>

                    <BasketButton deviceType='desktop' />
                </div>
            )}
            {deviceType === 'mobile' && (
                <Link
                    to='/'
                    className={styles.logotype}
                    ref={logotypeRef}
                    onClick={handleLogotypeClick}
                />
            )}
        </header>
    )
}
