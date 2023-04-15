import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsSidebarOpen } from '../../../../redux/slices/settings'
import styles from './styles.module.scss'

export default function SidebarButton() {
    const dispatch = useDispatch()
    const handleSidebarBtnClick = () => {
        dispatch(setIsSidebarOpen(true))
    }

    return (
        <button className={styles.sidebar_btn} onClick={handleSidebarBtnClick}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                <path d='m16,27.14h-6.75c-3.73,0-6.75,2.88-6.75,6.43v6.43c0,3.55,3.02,6.43,6.75,6.43h6.75c3.73,0,6.75-2.88,6.75-6.43v-6.43c0-3.55-3.02-6.43-6.75-6.43Z' />
                <path d='m16,3.57h-6.75c-3.73,0-6.75,2.88-6.75,6.43v6.43c0,3.55,3.02,6.43,6.75,6.43h6.75c3.73,0,6.75-2.88,6.75-6.43v-6.43c0-3.55-3.02-6.43-6.75-6.43Z' />
                <path d='m40.75,3.57h-6.75c-3.73,0-6.75,2.88-6.75,6.43v6.43c0,3.55,3.02,6.43,6.75,6.43h6.75c3.73,0,6.75-2.88,6.75-6.43v-6.43c0-3.55-3.02-6.43-6.75-6.43Z' />
                <path d='m40.75,27.14h-6.75c-3.73,0-6.75,2.88-6.75,6.43v6.43c0,3.55,3.02,6.43,6.75,6.43h6.75c3.73,0,6.75-2.88,6.75-6.43v-6.43c0-3.55-3.02-6.43-6.75-6.43Z' />
            </svg>
        </button>
    )
}
