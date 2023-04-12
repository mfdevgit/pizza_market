import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSnacks } from '../../api/data.js'
import ProductCart from '../../components/ProductCart/ProductCart'
import styles from './styles.module.scss'
import Loader from '../../components/Loader/Loader.jsx'
import Message from '../../components/Message/Message.jsx'

export default function Pizzas() {
    const dispatch = useDispatch()
    const snacks = useSelector(state => state.snacks)
    React.useEffect(() => {
        dispatch(fetchSnacks())
    }, [dispatch])

    switch (snacks.status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <Message msg='Что-то пошло не так. Перезагрузите страницу.' />
        case 'loaded':
            return (
                <div className={styles.products_container}>
                    {snacks.data.map(element => {
                        return <ProductCart key={element.id} {...element} />
                    })}
                </div>
            )
        default:
            return <p>DON'T KNOW</p>
    }
}
