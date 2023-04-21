import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'
import { closeSidebar } from '../../modules/Sidebar'
import { useDispatch } from 'react-redux'

export default function Submenu({ deviceType }) {
    const location = useLocation()
    const dispatch = useDispatch()
    const handleLinkClick = e => {
        setTimeout(() => {
            closeSidebar(dispatch)
        }, 150)
    }
    return (
        <div className={`${styles.submenu} ${styles[deviceType]}`}>
            <Link to='/delivery' className={location.pathname === '/delivery' ? styles.active : undefined} onClick={handleLinkClick}>
                Доставка
            </Link>
            <Link to='/discounts' className={location.pathname === '/discounts' ? styles.active : undefined} onClick={handleLinkClick}>
                Акции
            </Link>
            <Link to='/questions' className={location.pathname === '/questions' ? styles.active : undefined} onClick={handleLinkClick}>
                F.A.Q.
            </Link>
        </div>
    )
}
