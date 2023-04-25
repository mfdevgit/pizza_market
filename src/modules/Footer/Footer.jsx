import React from 'react'
import { useSelector } from 'react-redux'
import Credits from '../../components/Credits/Credits'
import { SidebarButton } from '../Sidebar'
import { BasketButton } from '../Basket'
import styles from './styles.module.scss'

export default function Footer() {
    const deviceType = useSelector(state => state.settings.deviceType)
    return (
        <footer className={styles[deviceType]}>
            {deviceType === 'desktop' && (
                <div className={styles.wrapper}>
                    <Credits deviceType={deviceType} />
                </div>
            )}
            {deviceType === 'mobile' && (
                <>
                    <SidebarButton />
                    <BasketButton deviceType='mobile' />
                </>
            )}
        </footer>
    )
}
