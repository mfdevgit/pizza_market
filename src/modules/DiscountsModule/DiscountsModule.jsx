import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import data from './assets/data/data.json'
import styles from './styles.module.scss'

export default function DiscountsModule() {
    const [isLoading, setIsLoading] = useState(true)
    const discountCarts = useRef([])
    const deviceType = useSelector(state => state.settings.deviceType)
    const imageLoaded = index => {
        setTimeout(() => {
            discountCarts.current[index].classList.remove(styles.not_loaded)
        }, 0)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }, [])

    return isLoading ? (
        <Loader />
    ) : (
        <div className={`${styles.discounts} ${styles[deviceType]}`}>
            {data.map((item, index) => (
                <div
                    key={index}
                    ref={el => (discountCarts.current[index] = el)}
                    className={`${styles.discount_cart} ${styles.not_loaded}`}
                >
                    <div className={styles.image_container}>
                        <img
                            src={`./images/discounts/${item.image}`}
                            alt='картинка'
                            onLoad={() => imageLoaded(index)}
                        />
                    </div>
                    <div className={styles.info_container}>
                        <h3>{item.fullname}</h3>
                        <p dangerouslySetInnerHTML={{ __html: item.description.full }} />
                        <ul>
                            {item.description.conditions?.map((condition, index) => (
                                <li key={index}>{condition}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
