import React from 'react'
import { Helmet } from 'react-helmet'
import DiscountsModule from '../modules/DiscountsModule/DiscountsModule'

export default function Discounts({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <DiscountsModule />
        </>
    )
}
