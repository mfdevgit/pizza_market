import { setIsSidebarOpen, setIsBasketOpen } from '../../../../../redux/slices/settings'

export const toggleSidebar = ({ dispatch, isSidebarOpen, isBasketOpen }) => {
    if (isSidebarOpen) {
        dispatch(setIsSidebarOpen(false))
    } else if (!isSidebarOpen && isBasketOpen) {
        dispatch(setIsBasketOpen(false))
        setTimeout(() => {
            dispatch(setIsSidebarOpen(true))
        }, 300)
    } else {
        dispatch(setIsSidebarOpen(true))
    }
}
