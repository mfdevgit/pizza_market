import { Routes, Route } from 'react-router-dom'
import Header from './modules/Header/Header'
import Basket from './modules/Basket/Basket'
import Overlay from './components/Overlay/Overlay'
import Products from './pages/Products/Products'
import Footer from './modules/Footer/Footer'
import styles from './styles/global.scss'
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
            {isBasketOpen && <Basket setIsBasketOpen={setIsBasketOpen} />}
            <main>
                <Routes>
                    <Route path='/' />
                    <Route path='/pizzas' element={<Products category='pizzas' />} />
                    <Route path='/snacks' element={<Products category='snacks' />} />
                    <Route path='/desserts' element={<Products category='desserts' />} />
                    <Route path='/drinks' element={<Products category='drinks' />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
