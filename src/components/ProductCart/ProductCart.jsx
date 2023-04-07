import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/basket.js'
import styles from './styles.module.scss'

export default function ProductCart(props) {
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

    return (
        <div className={styles.product_cart}>
            <div>
                <img src={props.image} alt='картинка' />
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
