import React from 'react'
import styles from './styles.module.scss'

export default function ProductCart() {
    return (
        <div className={styles.product_cart}>
            <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_292x292.webp' alt='картинка' />
            <h6>Название продукта</h6>
            <p>Краткое описание продукта с коротким перечислением ингредиентов</p>
            <div>
                <span>Цена</span>
                <button>Добавить</button>
            </div>
        </div>
    )
}
