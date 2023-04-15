import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas, fetchSnacks, fetchDesserts, fetchDrinks } from './api/data.js'
import Loader from '../../components/Loader/Loader.jsx'
import Message from '../../components/Message/Message.jsx'
import PizzaCart from './components/PizzaCart/PizzaCart'
import ProductCart from './components/ProductCart/ProductCart'
import styles from './styles.module.scss'

export default function ProductsModule({ category }) {
    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state[category])

    useEffect(() => {
        if (!data.length) {
            switch (category) {
                case 'pizzas':
                    dispatch(fetchPizzas())
                    break
                case 'snacks':
                    dispatch(fetchSnacks())
                    break
                case 'desserts':
                    dispatch(fetchDesserts())
                    break
                case 'drinks':
                    dispatch(fetchDrinks())
                    break
                default:
                    break
            }
        } // eslint-disable-next-line
    }, [category])

    switch (status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <Message msg='Что-то пошло не так. Перезагрузите страницу.' />
        case 'loaded':
            return (
                <div className={styles.products}>
                    {data.map(element => {
                        return category === 'pizzas' ? <PizzaCart key={element.id} {...element} /> : <ProductCart key={element.id} {...element} />
                    })}
                </div>
            )
        default:
            break
    }
}
