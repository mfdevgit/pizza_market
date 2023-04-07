import React from 'react'
import styles from './styles.module.scss'
import { removeProduct } from '../../redux/slices/basket.js'
import { useDispatch } from 'react-redux'

export default function BasketProduct(props) {
    const dispatch = useDispatch()
    const handleRemoveClick = () => {
        dispatch(
            removeProduct({
                id: props.id
            })
        )
    }
    return (
        <div className={styles.basket_item}>
            <div>
                <img src={props.image} />
                <div>
                    <strong>{props.title}</strong>
                    <span>{props.description}</span>
                </div>
                <svg onClick={handleRemoveClick} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                    <line
                        fill='none'
                        stroke='hsl(0, 0%, 0%)'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        strokeWidth='10px'
                        x1='7.5'
                        y1='7.5'
                        x2='42.5'
                        y2='42.5'
                    />
                    <line
                        fill='none'
                        stroke='hsl(0, 0%, 0%)'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        strokeWidth='10px'
                        x1='7.5'
                        y1='42.5'
                        x2='42.5'
                        y2='7.5'
                    />
                </svg>
            </div>
            <div></div>
        </div>
    )
}
