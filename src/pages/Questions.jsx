import React from 'react'
import { Helmet } from 'react-helmet'
import QuestionsModule from '../modules/QuestionsModule/QuestionsModule'

export default function Questions({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title} | mfdevMarket`}</title>
            </Helmet>
            <QuestionsModule />
        </>
    )
}
