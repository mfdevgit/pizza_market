import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function Header({ setIsBasketOpen }) {
    return (
        <header>
            <div className='wrapper'>
                <Link to='/' className={styles.logotype}></Link>
                <ul className={styles.nav_categories}>
                    <li>
                        <Link to='/pizzas'>Пиццы</Link>
                    </li>
                    <li>
                        <Link to='/snacks'>Закуски</Link>
                    </li>
                    <li>
                        <Link to='/desserts'>Десерты</Link>
                    </li>
                    <li>
                        <Link to='/drinks'>Напитки</Link>
                    </li>
                </ul>
                <button onClick={() => setIsBasketOpen(true)}>Корзина</button>
            </div>
        </header>
    )
}
