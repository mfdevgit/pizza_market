import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BasketButton } from '../Basket/index'
import Categories from '../../components/Categories/Categories'
import styles from './styles.module.scss'

export default function Header() {
    const deviceType = useSelector(state => state.settings.deviceType)
    const logotypeLink = useRef()

    const handleLogotypeClick = () => {
        logotypeLink.current.classList.add(styles.clicked)
        setTimeout(() => {
            logotypeLink.current.classList.remove(styles.clicked)
        }, 300)
    }

    return (
        <header className={styles[deviceType]}>
            {deviceType === 'desktop' && (
                <div className={styles.wrapper}>
                    <Link to='/' className={styles.logotype} ref={logotypeLink} onClick={handleLogotypeClick} />
                    <Categories deviceType='desktop' />
                    <BasketButton deviceType='desktop' />
                </div>
            )}
            {deviceType === 'mobile' && <Link to='/' className={styles.logotype} ref={logotypeLink} onClick={handleLogotypeClick} />}
        </header>
    )
}
