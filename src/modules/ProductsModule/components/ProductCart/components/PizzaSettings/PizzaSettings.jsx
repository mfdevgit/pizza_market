import React from 'react'
import styles from './styles.module.scss'

const DOUGHS = [
    { id: 0, name: 'традиционное' },
    { id: 1, name: 'тонкое' }
]
const SIZES = [
    { id: 0, name: '25 см.' },
    { id: 1, name: '30 см.' },
    { id: 2, name: '35 см.' }
]

export default function PizzaSettings({ price, pizzaOptions, setPizzaOptions }) {
    const handleDoughChange = dough => {
        setPizzaOptions(prevOptions => ({ ...prevOptions, dough: dough }))
    }

    const handleSizeChange = size => {
        setPizzaOptions(prevOptions => ({ ...prevOptions, size: size, price: price[size] }))
    }

    return (
        <div className={styles.pizza_settings}>
            <div>
                {DOUGHS.map(dough => (
                    <button
                        key={dough.id}
                        className={pizzaOptions.dough === dough.id ? styles.active : undefined}
                        onClick={() => handleDoughChange(dough.id)}
                    >
                        {dough.name}
                    </button>
                ))}
            </div>
            <div>
                {SIZES.map(size => (
                    <button
                        key={size.id}
                        className={pizzaOptions.size === size.id ? styles.active : undefined}
                        onClick={() => handleSizeChange(size.id)}
                    >
                        {size.name}
                    </button>
                ))}
            </div>
        </div>
    )
}
