import React, { useState } from 'react'
import styles from './styles.module.scss'
import { incrementProduct, decrementProduct } from '../../redux/slices/basket.js'
import { useDispatch, useSelector } from 'react-redux'

export default function BasketProduct(props) {
    const { id, title, description, image, price, count } = props.data

    const dispatch = useDispatch()

    const handleMinusClick = () => {
        dispatch(
            decrementProduct({
                id,
                price,
                count
            })
        )
    }
    const handlePlusClick = () => {
        dispatch(
            incrementProduct({
                id,
                price
            })
        )
    }

    return (
        <div className={styles.basket_item}>
            <div>
                <img src={image} />
                <div>
                    <strong>{title}</strong>
                    <span>{description}</span>
                </div>
            </div>
            <div>
                <div className={styles.basket_item_amount}>
                    <svg onClick={handleMinusClick} className='minus' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                        <line
                            fill='none'
                            stroke='#231f20'
                            strokeLinecap='round'
                            strokeMiterlimit='6'
                            strokeWidth='6px'
                            x1='7.5'
                            y1='25'
                            x2='42.5'
                            y2='25'
                        />
                    </svg>
                    <strong>{count}</strong>
                    <svg onClick={handlePlusClick} className='plus' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                        <line
                            fill='none'
                            stroke='#231f20'
                            strokeLinecap='round'
                            strokeMiterlimit='6'
                            strokeWidth='6px'
                            x1='25'
                            y1='7.5'
                            x2='25'
                            y2='42.5'
                        />
                        <line
                            fill='none'
                            stroke='#231f20'
                            strokeLinecap='round'
                            strokeMiterlimit='6'
                            strokeWidth='6px'
                            x1='7.5'
                            y1='25'
                            x2='42.5'
                            y2='25'
                        />
                    </svg>
                </div>
                <strong>{price} ₽</strong>
            </div>
        </div>
    )
}
