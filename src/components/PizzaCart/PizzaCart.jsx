import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/basket.js'
import styles from './styles.module.scss'

export default function PizzaCart(props) {
    const { id, title, description, image, price, category } = props
    const [dough, setDough] = useState('традиционное')
    const [size, setSize] = useState(28)

    const block = useRef()
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(
            addProduct({
                id,
                image,
                title,
                price,
                category,
                dough: dough,
                size: size
            })
        )
    }

    return (
        <div ref={block} className={styles.pizza_cart}>
            <div>
                <img src={`./images/${category}/${image}`} alt='картинка' onLoad={() => block.current.classList.add(styles.loaded)} />
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
            <div className={styles.settings}>
                <div>
                    <button onClick={() => setDough('традиционное')}>традиционное</button>
                    <button onClick={() => setDough('тонкое')}>тонкое</button>
                </div>
                <div>
                    <button onClick={() => setSize(20)}>20</button>
                    <button onClick={() => setSize(28)}>28</button>
                    <button onClick={() => setSize(36)}>36</button>
                </div>
            </div>
            <div>
                <span>{price[0]} ₽</span>
                <button onClick={handleAddToCart}>Добавить</button>
            </div>
        </div>
    )
}
