import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPizza } from '../../../Basket/index.js'
import styles from './styles.module.scss'

export default function PizzaCart(props) {
    const { id, title, description, image, price, category } = props
    const [dough, setDough] = useState(0)
    const [size, setSize] = useState(1)
    const block = useRef()
    const adding = useRef()
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(
            addPizza({
                id,
                image,
                title,
                price: price[size],
                category,
                dough,
                size
            })
        )
        adding.current.classList.add(styles.clicked)
        setTimeout(() => {
            adding.current.classList.remove(styles.clicked)
        }, 300)
    }

    return (
        <div ref={block} className={styles.pizza_cart}>
            <div className={styles.preview}>
                <img src={`./images/${category}/${image}`} alt='картинка' onLoad={() => block.current.classList.add(styles.loaded)} />
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
            <div className={styles.settings}>
                <div>
                    <button className={dough === 0 ? styles.active : undefined} onClick={() => setDough(0)}>
                        традиционное
                    </button>
                    <button className={dough === 1 ? styles.active : undefined} onClick={() => setDough(1)}>
                        тонкое
                    </button>
                </div>
                <div>
                    <button className={size === 0 ? styles.active : undefined} onClick={() => setSize(0)}>
                        25 см.
                    </button>
                    <button className={size === 1 ? styles.active : undefined} onClick={() => setSize(1)}>
                        30 см.
                    </button>
                    <button className={size === 2 ? styles.active : undefined} onClick={() => setSize(2)}>
                        35 см.
                    </button>
                </div>
            </div>
            <div className={styles.navigation}>
                <span>{price[size]} ₽</span>
                <button ref={adding} onClick={handleAddToCart}>
                    Добавить
                </button>
            </div>
        </div>
    )
}
