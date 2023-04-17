import React, { useRef, useState } from 'react'
import { fetchDiscount } from '../../../../api/discount.js'
import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'

export default function BasketDiscount() {
    const dispatch = useDispatch()
    const [discount, setDiscount] = useState(false)
    const [message, setMessage] = useState(null)
    const inputRef = useRef()
    const messageRef = useRef()

    const handlePromoClick = () => {
        if (discount.length > 0) {
            let value = discount.trim().toUpperCase()
            const regex = /^[a-zA-Z0-9]+$/
            if (regex.test(value)) {
                dispatch(fetchDiscount(value))
            }
        } else {
            setMessage('Зачем же отправлять пустую строку?')
            setTimeout(() => {
                messageRef.current.classList.add(styles.open)
                setTimeout(() => {
                    messageRef.current.classList.remove(styles.open)
                    setTimeout(() => {
                        setMessage(null)
                    }, 300)
                }, 1800)
            }, 0)
        }
    }
    return (
        <>
            <div className={styles.basket_discount}>
                <input ref={inputRef} onChange={e => setDiscount(e.target.value)} type='text' placeholder='промокод' alt='отправить промокод' />
                <svg onClick={handlePromoClick} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45'>
                    <path d='m38.57.2c3.81-1.09,7.33,2.42,6.23,6.23l-9.67,33.67c-1.61,5.61-9.11,6.68-12.19,1.73l-4.27-6.86c-1.18-1.9-.89-4.36.69-5.95l9.11-9.11c.94-.94.94-2.46,0-3.4-.94-.94-2.46-.93-3.4,0l-9.11,9.11c-1.58,1.58-4.05,1.87-5.95.69l-6.86-4.27c-4.94-3.08-3.88-10.57,1.73-12.19L38.57.2Z' />
                </svg>
            </div>
            {message && (
                <p className={styles.message} ref={messageRef}>
                    {message}
                </p>
            )}
        </>
    )
}
