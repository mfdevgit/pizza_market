import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products/Products'
import Delivery from './pages/Delivery/Delivery'
import Discounts from './pages/Discounts/Discounts'
import Questions from './pages/Questions/Questions'
import Career from './pages/Career/Career'
import { Header } from './modules/Header/index'
import { Basket } from './modules/Basket/index'
import { Sidebar } from './modules/Sidebar/index'
import { Footer } from './modules/Footer/index'
import checkDeviceType from './hooks/checkDeviceType'
import './styles/global.scss'

export default function App() {
    const deviceType = checkDeviceType()

    return (
        <div className='app'>
            <Header />
            <Basket />
            <Sidebar />
            <main className={deviceType}>
                <div className='wrapper'>
                    <Routes>
                        <Route path='/' />
                        <Route path='/pizzas' element={<Products title='Пиццы' category='pizzas' />} />
                        <Route path='/snacks' element={<Products title='Закуски' category='snacks' />} />
                        <Route path='/desserts' element={<Products title='Десерты' category='desserts' />} />
                        <Route path='/drinks' element={<Products title='Напитки' category='drinks' />} />
                        <Route path='/delivery' element={<Delivery title='Доставка' />} />
                        <Route path='/discounts' element={<Discounts title='Акции' />} />
                        <Route path='/questions' element={<Questions title='FAQ' />} />
                        <Route path='/career' element={<Career title='Карьера' />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    )
}
