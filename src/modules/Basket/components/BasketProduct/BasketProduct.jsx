import React from 'react'
import styles from './styles.module.scss'
import { incrementProduct, decrementProduct } from '../../store/basket.js'
import { useDispatch } from 'react-redux'

export default function BasketProduct(props) {
    const dispatch = useDispatch()
    const { id, image, title, price, category, size, count } = props.data

    let description
    switch (category) {
        case 'pizzas':
            const sizes = [25, 30, 35]
            const doughs = ['традиционное', 'тонкое']
            description = `${sizes[size]}, ${doughs[props.data.dough]} тесто`
            break
        case 'snacks':
        case 'desserts':
            description = `${size} гр.`
            break
        case 'drinks':
            description = `${size} мл.`
            break
        default:
            break
    }

    const handleMinusClick = () => {
        dispatch(
            decrementProduct({
                id,
                price,
                count,
                category,
                ...(category === 'pizzas' && { size, dough: props.data.dough })
            })
        )
    }
    const handlePlusClick = () => {
        dispatch(
            incrementProduct({
                id,
                price,
                category,
                ...(category === 'pizzas' && { size, dough: props.data.dough })
            })
        )
    }

    return (
        <div className={styles.basket_item}>
            <div>
                <img src={`./images/products/${category}/${image}`} alt='картинка' />
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
