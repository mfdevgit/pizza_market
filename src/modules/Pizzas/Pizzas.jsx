import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../../api/data.js'
import ProductCart from '../../components/ProductCart/ProductCart'
import styles from './styles.module.scss'
import Loader from '../../components/Loader/Loader.jsx'

export default function Pizzas() {
    const dispatch = useDispatch()
    const pizzas = useSelector(state => state.pizzas)
    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [dispatch])
    switch (pizzas.status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <p>REJECTED</p>
        case 'loaded':
            return (
                <>
                    <h2>Пицца</h2>
                    <div className={styles.products_container}>
                        {pizzas.items.map(element => {
                            return (
                                <ProductCart
                                    key={element._id}
                                    id={element._id}
                                    title={element.title}
                                    description={element.description}
                                    price={element.price[0]}
                                    image={element.image}
                                />
                            )
                        })}
                    </div>
                </>
            )
        default:
            return <p>DON'T KNOW</p>
    }
}
