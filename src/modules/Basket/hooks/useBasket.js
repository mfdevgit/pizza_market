import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import openBasket from '../utils/openBasket'
import closeBasket from '../utils/closeBasket'

export default function useBasket() {
    const dispatch = useDispatch()
    const isBasketOpen = useSelector(state => state.settings.isBasketOpen)
    const products = useSelector(state => state.basket.data)
    const overlayRef = useRef()
    const basketRef = useRef()

    useEffect(() => {
        if (isBasketOpen) {
            setTimeout(() => {
                openBasket(dispatch)
            }, 0)
        } else {
            closeBasket(dispatch)
        } // eslint-disable-next-line
    }, [isBasketOpen])

    return {
        overlayRef,
        basketRef,
        products,
        isBasketOpen,
        closeBasket: () => closeBasket(dispatch, overlayRef, basketRef),
        openBasket: () => openBasket(dispatch, overlayRef, basketRef)
    }
}
