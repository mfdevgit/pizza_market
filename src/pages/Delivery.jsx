import React from 'react'
import { Helmet } from 'react-helmet'
import DeliveryModule from '../modules/DeliveryModule/DeliveryModule'

export default function Delivery({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <DeliveryModule />
        </>
    )
}
