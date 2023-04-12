import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../../api/data.js'
import PizzaCart from '../../components/PizzaCart/PizzaCart.jsx'
import styles from './styles.module.scss'
import Loader from '../../components/Loader/Loader.jsx'
import Message from '../../components/Message/Message.jsx'

export default function Pizzas() {
    const dispatch = useDispatch()
    const pizzas = useSelector(state => state.pizzas)
    useEffect(() => {
        dispatch(fetchPizzas())
    }, [dispatch])

    switch (pizzas.status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <Message msg='Что-то пошло не так. Перезагрузите страницу.' />
        case 'loaded':
            return (
                <div className={styles.products_container}>
                    {pizzas.data.map(element => {
                        return <PizzaCart key={element.id} {...element} />
                    })}
                </div>
            )
        default:
            return <p>DON'T KNOW</p>
    }
}
