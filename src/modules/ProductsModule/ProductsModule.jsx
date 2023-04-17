import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './api/data.js'
import Loader from '../../components/Loader/Loader.jsx'
import Message from '../../components/Message/Message.jsx'
import ProductCart from './components/ProductCart/ProductCart'
import styles from './styles.module.scss'

export default function ProductsModule({ category }) {
    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state.products[category])

    useEffect(() => {
        dispatch(fetchProducts(category))
        // eslint-disable-next-line
    }, [category])

    const renderProducts = useCallback(
        data => (
            <div className={styles.products}>
                {data.map(element => (
                    <ProductCart key={element.id} {...element} />
                ))}
            </div>
        ),
        // eslint-disable-next-line
        [category]
    )

    switch (status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <Message msg='Что-то пошло не так. Перезагрузите страницу.' />
        case 'loaded':
            return renderProducts(data)
        default:
            break
    }
}
