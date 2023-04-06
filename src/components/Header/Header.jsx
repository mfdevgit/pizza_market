import React from 'react'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header>
            <ul className={styles.nav_categories}>
                <li>
                    <a href=''>Пицца</a>
                </li>
                <li>
                    <a href=''>Комбо</a>
                </li>
                <li>
                    <a href=''>Десерты</a>
                </li>
                <li>
                    <a href=''>Напитки</a>
                </li>
            </ul>
            <button>Корзина</button>
        </header>
    )
}
