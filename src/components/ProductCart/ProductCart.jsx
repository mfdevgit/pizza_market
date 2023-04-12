import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/basket.js'
import styles from './styles.module.scss'

export default function ProductCart(props) {
    const { id, title, description, image, price, category, size, macronutrients } = props
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
                size,
                macronutrients
            })
        )
    }

    const loadContent = () => {
        block.current.classList.add(styles.loaded)
    }

    return (
        <div ref={block} className={styles.product_cart}>
            <div>
                <img src={`./images/${category}/${image}`} alt='картинка' onLoad={loadContent} />
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
            <div>
                <span>{price} ₽</span>
                <button onClick={handleAddToCart}>Добавить</button>
            </div>
        </div>
    )
}
