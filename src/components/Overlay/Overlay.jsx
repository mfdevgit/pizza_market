import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

export default function Component({ isBasketOpen, setIsBasketOpen }) {
    const overlay = useRef()

    useEffect(() => {
        setTimeout(() => {
            overlay.current.classList.toggle(styles.open)
        }, 0)
    }, [])

    const handleOverlayClick = () => {
        setIsBasketOpen(!isBasketOpen)
    }

    return <div ref={overlay} className={styles.overlay} onClick={handleOverlayClick} />
}
