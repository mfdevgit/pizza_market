import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products/Products'
import Header from './modules/Header/Header'
import { Basket } from './modules/Basket/index'
import Overlay from './components/Overlay/Overlay'
import Footer from './modules/Footer/Footer'
import './styles/global.scss'
import { useState } from 'react'

export default function App() {
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    isBasketOpen
        ? (document.body.style.cssText = 'overflow-y: hidden; margin-right: 17px;')
        : (document.body.style.cssText = 'overflow-y: auto; margin-right: auto;')

    return (
        <div className='app'>
            <Header setIsBasketOpen={setIsBasketOpen} />
            {isBasketOpen && <Overlay isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen} />}
            {isBasketOpen && <Basket />}
            <main>
                <Routes>
                    <Route path='/' />
                    <Route path='/pizzas' element={<Products title='Пиццы' category='pizzas' />} />
                    <Route path='/snacks' element={<Products title='Закуски' category='snacks' />} />
                    <Route path='/desserts' element={<Products title='Десерты' category='desserts' />} />
                    <Route path='/drinks' element={<Products title='Напитки' category='drinks' />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
