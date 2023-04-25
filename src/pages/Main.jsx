import React from 'react'
import { Helmet } from 'react-helmet'
import MainModule from '../modules/MainModule/MainModule'

export default function Main({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <MainModule />
        </>
    )
}
