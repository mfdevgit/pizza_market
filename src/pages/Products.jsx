import React from 'react'
import { Helmet } from 'react-helmet'
import { ProductsModule } from '../modules/ProductsModule/index.js'

export default function Products({ title, category }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <ProductsModule category={category} />
        </>
    )
}
