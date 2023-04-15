import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products/Products'
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
                <Routes>
                    <Route path='/' />
                    <Route path='/pizzas' element={<Products title='Пиццы' category='pizzas' />} />
                    <Route path='/snacks' element={<Products title='Закуски' category='snacks' />} />
                    <Route path='/desserts' element={<Products title='Десерты' category='desserts' />} />
                    <Route path='/drinks' element={<Products title='Напитки' category='drinks' />} />
                </Routes>
            </main>
            {deviceType === 'desktop' && <Footer />}
        </div>
    )
}
