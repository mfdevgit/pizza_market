import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDesserts } from '../../api/data.js'
import ProductCart from '../../components/ProductCart/ProductCart'
import styles from './styles.module.scss'
import Loader from '../../components/Loader/Loader.jsx'

export default function Pizzas() {
    const dispatch = useDispatch()
    const desserts = useSelector(state => state.desserts)
    React.useEffect(() => {
        dispatch(fetchDesserts())
    }, [dispatch])
    switch (desserts.status) {
        case 'loading':
            return <Loader />
        case 'rejected':
            return <p>REJECTED</p>
        case 'loaded':
            return (
                <>
                    <h2>Десерты</h2>
                    <div className={styles.products_container}>
                        {desserts.items.map(element => {
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
