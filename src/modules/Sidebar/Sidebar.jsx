import React from 'react'
import Categories from '../../components/Categories/Categories'
import Credits from '../../components/Credits/Credits'
import useSidebar from './hooks/useSidebar'
import styles from './styles.module.scss'
import Submenu from '../../components/Submenu/Submenu'

export default function Sidebar() {
    const { overlayRef, sidebarRef, isSidebarOpen, handleSidebarClose } = useSidebar()

    return isSidebarOpen ? (
        <>
            <div ref={overlayRef} className={styles.overlay} onClick={handleSidebarClose} />
            <div ref={sidebarRef} className={styles.sidebar}>
                <Categories deviceType='mobile' />
                <Submenu deviceType='mobile' />
                <Credits deviceType='mobile' />
            </div>
        </>
    ) : null
}
