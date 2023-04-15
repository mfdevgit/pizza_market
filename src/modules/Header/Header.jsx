import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BasketButton } from '../Basket/index'
import { SidebarButton } from '../Sidebar/index'
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
                    <BasketButton deviceType={deviceType} />
                </div>
            )}
            {deviceType === 'mobile' && (
                <>
                    <Link to='/' className={styles.logotype} ref={logotypeLink} onClick={handleLogotypeClick} />
                    <div className={styles.navigation_fixed}>
                        <SidebarButton />
                        <BasketButton deviceType={deviceType} />
                    </div>
                </>
            )}
        </header>
    )
}
