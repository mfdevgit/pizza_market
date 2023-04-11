import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDrinks } from '../../api/data.js'
import ProductCart from '../../components/ProductCart/ProductCart'
import styles from './styles.module.scss'
import Loader from '../../components/Loader/Loader.jsx'
import Message from '../../components/Message/Message.jsx'

export default function Pizzas() {
    const dispatch = useDispatch()
    const drinks = useSelector(state => state.drinks)
    React.useEffect(() => {
        dispatch(fetchDrinks())
    }, [dispatch])
    switch (drinks.status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <Message msg='Что-то пошло не так. Перезагрузите страницу.' />
        case 'loaded':
            return (
                <div className={styles.products_container}>
                    {drinks.data.map(element => {
                        return (
                            <ProductCart
                                key={element.id}
                                id={element.id}
                                title={element.title}
                                description={element.description}
                                price={element.price}
                                image={`./images/drinks/${element.image}`}
                            />
                        )
                    })}
                </div>
            )
        default:
            return <p>DON'T KNOW</p>
    }
}
