import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../Basket'
import PizzaSettings from './components/PizzaSettings/PizzaSettings'
import ProductAdding from './components/ProductAdding/ProductAdding'
import { setAdditionalOptions } from './utils/setAdditionalOptions'
import styles from './styles.module.scss'

export default function ProductCart({ id, title, description, image, price, category, size }) {
    const dispatch = useDispatch()
    const containerRef = useRef()
    const [pizzaOptions, setPizzaOptions] = useState({
        size: 1,
        dough: 0,
        price: price[1]
    })

    const handleAddToCart = () => {
        const defaultOptions = { id, image, title, category }
        const additionalOptions = setAdditionalOptions({ category, price, size, pizzaOptions })
        dispatch(addProduct({ ...defaultOptions, ...additionalOptions }))
    }
    const loadContainer = () => {
        containerRef.current.classList.add(styles.loaded)
    }

    return (
        <div ref={containerRef} className={styles.product_cart}>
            <div>
                <img src={`./images/products/${category}/${image}`} alt='картинка' onLoad={loadContainer} />
                <h6>{title}</h6>
                <p>{description}</p>
            </div>

            {category === 'pizzas' && <PizzaSettings price={price} pizzaOptions={pizzaOptions} setPizzaOptions={setPizzaOptions} />}

            <ProductAdding price={category === 'pizzas' ? pizzaOptions.price : price} handleAddToCart={handleAddToCart} />
        </div>
    )
}
