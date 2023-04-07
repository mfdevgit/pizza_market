import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSnacks } from '../../api/data.js'
import ProductCart from '../../components/ProductCart/ProductCart'
import styles from './styles.module.scss'
import Loader from '../../components/Loader/Loader.jsx'

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
            return <p>REJECTED</p>
        case 'loaded':
            return (
                <>
                    <h2>Закуски</h2>
                    <div className={styles.products_container}>
                        {snacks.items.map(element => {
                            return (
                                <ProductCart
                                    key={element._id}
                                    id={element._id}
                                    title={element.title}
                                    description={element.description}
                                    price={element.price}
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
