import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/basket.js'
import styles from './styles.module.scss'

export default function ProductCart(props) {
    const block = useRef()
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(
            addProduct({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                price: props.price
            })
        )
    }

    const loadContent = () => {
        block.current.classList.add(styles.loaded)
    }

    return (
        <div ref={block} className={styles.product_cart}>
            <div>
                <img src={props.image} alt='картинка' onLoad={loadContent} />
                <h6>{props.title}</h6>
                <p>{props.description}</p>
            </div>
            <div>
                <span>{props.price} ₽</span>
                <button onClick={handleAddToCart}>Добавить</button>
            </div>
        </div>
    )
}
