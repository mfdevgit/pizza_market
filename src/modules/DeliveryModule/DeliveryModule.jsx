import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import styles from './styles.module.scss'

export default function DeliveryModule() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }, [])

    return isLoading ? (
        <Loader />
    ) : (
        <div className={styles.delivery}>
            <div>
                <strong>Условия доставки</strong>
                <p>
                    Любые заказы, оформленные через наш сайт или по телефону доставляются нашими курьерами или забираются самовывозом из наших
                    ресторанов. Доставка осуществляется в пределах зоны ответственности самих ресторанов. Чтобы узнать, какой именно ресторан будет
                    готовить ваш заказ, вам достаточно собрать заказ и перейти к его оформлению из корзины. Наше приложение автоматически подберёт
                    ресторан, исходя из введённого вами адреса.
                </p>
            </div>
            <div>
                <strong>Стоимость доставки</strong>
                <p>Стоимость доставки зависит от суммы вашего заказа. Есть два варианта:</p>
                <ul>
                    <li>300 рублей при заказе до 800 рублей</li>
                    <li>бесплатно при заказе от 1500 рублей (включительно)</li>
                </ul>
            </div>
        </div>
    )
}
