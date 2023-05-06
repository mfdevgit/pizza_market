import { setIsBasketOpen, setIsSidebarOpen } from '../../../../../redux/slices/settings'

export const toggleBasket = ({ dispatch, isBasketOpen, isSidebarOpen }) => {
    if (isBasketOpen) {
        dispatch(setIsBasketOpen(false))
    } else if (!isBasketOpen) {
        if (isSidebarOpen) {
            dispatch(setIsSidebarOpen(false))
            setTimeout(() => {
                dispatch(setIsBasketOpen(true))
            }, 300)
        } else {
            dispatch(setIsBasketOpen(true))
        }
    }
}
