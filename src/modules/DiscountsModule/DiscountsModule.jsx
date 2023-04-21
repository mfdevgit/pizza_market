import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import data from './assets/data/data.json'

export default function DiscountsModule() {
    const deviceType = useSelector(state => state.settings.deviceType)

    return (
        <div className={`${styles.discounts} ${styles[deviceType]}`}>
            {data.map(item => (
                <div key={item.id} className={styles.discount_cart}>
                    <div>
                        <img src={`./images/discounts/${item.image}`} alt='картинка' />
                    </div>
                    <div>
                        <h3>{item.name}</h3>
                        <p dangerouslySetInnerHTML={{ __html: item.description }} />
                        <ul>
                            {item.conditions.map((condition, index) => (
                                <li key={index}>{condition}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
