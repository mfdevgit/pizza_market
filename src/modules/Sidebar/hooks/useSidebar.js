import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeSidebar from '../utils/closeSidebar'
import styles from '../styles.module.scss'

export default function useSidebar() {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(state => state.settings.isSidebarOpen)
    const overlayRef = useRef()
    const sidebarRef = useRef()

    const handleSidebarClose = () => {
        closeSidebar(dispatch)
    }

    useEffect(() => {
        let scrollbar = window.innerWidth - document.documentElement.clientWidth
        if (isSidebarOpen) {
            setTimeout(() => {
                overlayRef.current.classList.add(styles.open)
                sidebarRef.current.classList.add(styles.open)
                document.body.style.marginRight = `${scrollbar}px`
                document.body.style.overflowY = 'hidden'
            }, 0)
        } else {
            document.body.style.marginRight = 'auto'
            document.body.style.overflowY = 'scroll'
        }
    }, [isSidebarOpen])

    return {
        overlayRef,
        sidebarRef,
        isSidebarOpen,
        handleSidebarClose
    }
}
