import React from 'react'
import Pizzas from '../../modules/Pizzas/Pizzas'
import Snacks from '../../modules/Snacks/Snacks'
import Desserts from '../../modules/Desserts/Desserts'
import Drinks from '../../modules/Drinks/Drinks'
import styles from './styles.module.scss'

export default function Products(props) {
    let category
    switch (props.category) {
        case 'pizzas':
            category = <Pizzas />
            break
        case 'snacks':
            category = <Snacks />
            break
        case 'desserts':
            category = <Desserts />
            break
        case 'drinks':
            category = <Drinks />
            break
        default:
            category = null
            break
    }
    return <div className={styles.products}>{category}</div>
}
