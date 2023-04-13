import React from 'react'
import { Helmet } from 'react-helmet'
import Pizzas from '../../modules/Pizzas/Pizzas'
import Snacks from '../../modules/Snacks/Snacks'
import Desserts from '../../modules/Desserts/Desserts'
import Drinks from '../../modules/Drinks/Drinks'
import styles from './styles.module.scss'

export default function Products(props) {
    let category, title
    switch (props.category) {
        case 'pizzas':
            category = <Pizzas />
            title = 'Пиццы | ПиццаМаркет'
            break
        case 'snacks':
            category = <Snacks />
            title = 'Закуски | ПиццаМаркет'
            break
        case 'desserts':
            category = <Desserts />
            title = 'Десерты | ПиццаМаркет'
            break
        case 'drinks':
            category = <Drinks />
            title = 'Напитки | ПиццаМаркет'
            break
        default:
            break
    }
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className={styles.products}>{category}</div>
        </>
    )
}
