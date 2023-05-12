import React from 'react'
import styles from './styles.module.scss'
import { useRef } from 'react'

export default function ProductAdding({ price, handleAddToCart }) {
    const addingRef = useRef()

    const handleClick = () => {
        handleAddToCart()
        addingRef.current.classList.add(styles.clicked)
        setTimeout(() => {
            addingRef.current.classList.remove(styles.clicked)
        }, 150)
    }

    return (
        <div className={styles.product_adding}>
            <span>{price} ₽</span>
            <button ref={addingRef} onClick={handleClick}>
                Добавить
            </button>
        </div>
    )
}
