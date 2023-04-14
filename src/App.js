import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products/Products'
import { Header } from './modules/Header/index'
import { Basket } from './modules/Basket/index'
import Footer from './modules/Footer/Footer'
import './styles/global.scss'
import { useDispatch } from 'react-redux'
import { setDeviceWidth } from './redux/slices/settings'

export default function App() {
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)

    const dispatch = useDispatch()
    useEffect(() => {
        const handleResize = () => {
            dispatch(setDeviceWidth(window.innerWidth))
            setIsDesktop(window.innerWidth >= 800)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [dispatch])
    useEffect(() => {
        dispatch(setDeviceWidth(window.innerWidth))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='app'>
            <Header setIsBasketOpen={setIsBasketOpen} />
            <Basket isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen} />
            <main>
                <Routes>
                    <Route path='/' />
                    <Route path='/pizzas' element={<Products title='Пиццы' category='pizzas' />} />
                    <Route path='/snacks' element={<Products title='Закуски' category='snacks' />} />
                    <Route path='/desserts' element={<Products title='Десерты' category='desserts' />} />
                    <Route path='/drinks' element={<Products title='Напитки' category='drinks' />} />
                </Routes>
            </main>
            {isDesktop && <Footer />}
        </div>
    )
}
