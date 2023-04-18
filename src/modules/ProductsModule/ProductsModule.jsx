import React, { useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './api/data.js'
import Loader from '../../components/Loader/Loader.jsx'
import Message from '../../components/Message/Message.jsx'
import styles from './styles.module.scss'
const ProductCart = React.lazy(() => import('./components/ProductCart/ProductCart'))

export default function ProductsModule({ category }) {
    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state.products[category])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts(category))
        }
        // eslint-disable-next-line
    }, [category])

    const sortData = array => {
        return array.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
    }

    let sorted = sortData([...data])

    switch (status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <Message msg='Что-то пошло не так. Попробуйте обновить страницу.' />
        case 'loaded':
            return (
                <div className={styles.products}>
                    <Suspense fallback={<Loader />}>
                        {sorted.map(element => (
                            <ProductCart key={element.id} {...element} />
                        ))}
                    </Suspense>
                </div>
            )
        default:
            break
    }
}
