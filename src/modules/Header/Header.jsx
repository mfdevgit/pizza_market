import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BasketButton } from '../Basket/index'
import styles from './styles.module.scss'

export default function Header() {
    const location = useLocation()
    const deviceType = useSelector(state => state.settings.deviceType)
    const logotypeRef = useRef()

    const handleLogotypeClick = () => {
        logotypeRef.current.classList.add(styles.clicked)
        setTimeout(() => {
            logotypeRef.current.classList.remove(styles.clicked)
        }, 300)
    }

    return (
        <header className={styles[deviceType]}>
            {deviceType === 'desktop' && (
                <div className={styles.wrapper}>
                    <Link to='/' className={styles.logotype} ref={logotypeRef} onClick={handleLogotypeClick} />

                    <div className={styles.navigation}>
                        <Link to='/pizzas' className={location.pathname === '/pizzas' ? styles.active : undefined}>
                            Пиццы
                        </Link>
                        <Link to='/snacks' className={location.pathname === '/snacks' ? styles.active : undefined}>
                            Закуски
                        </Link>
                        <Link to='/desserts' className={location.pathname === '/desserts' ? styles.active : undefined}>
                            Десерты
                        </Link>
                        <Link to='/drinks' className={location.pathname === '/drinks' ? styles.active : undefined}>
                            Напитки
                        </Link>
                    </div>

                    <div className={styles.subnavigation}>
                        <button>Другое</button>
                        <div>
                            <Link to='/delivery'>Доставка</Link>
                            <Link to='/discounts'>Акции</Link>
                            <Link to='/questions'>F.A.Q.</Link>
                        </div>
                    </div>

                    <BasketButton deviceType='desktop' />
                </div>
            )}
            {deviceType === 'mobile' && <Link to='/' className={styles.logotype} ref={logotypeRef} onClick={handleLogotypeClick} />}
        </header>
    )
}
