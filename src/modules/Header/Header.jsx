import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navigation from './components/Navigation/Navigation'
import styles from './styles.module.scss'
import { BasketButton } from '../Basket/index'

export default function Header({ setIsBasketOpen }) {
    const device = useSelector(state => state.settings.device)
    const logotype = useRef()

    const handleLogotypeClick = () => {
        logotype.current.classList.add(styles.clicked)
        setTimeout(() => {
            logotype.current.classList.remove(styles.clicked)
        }, 300)
    }

    return (
        <header className={styles[device]}>
            {device === 'desktop' && (
                <div className={styles.wrapper}>
                    <Link to='/' className={styles.logotype} ref={logotype} onClick={handleLogotypeClick} />
                    <Navigation device='desktop' />
                    <BasketButton setIsBasketOpen={setIsBasketOpen} />
                </div>
            )}
            {device === 'mobile' && (
                <div className={styles.wrapper}>
                    <Link to='/' className={styles.logotype} ref={logotype} onClick={handleLogotypeClick} />
                </div>
            )}
        </header>
    )
}
