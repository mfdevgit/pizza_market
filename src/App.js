import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Pizzas from './pages/Pizzas'
import Combos from './pages/Combos'
import Desserts from './pages/Desserts'
import Drinks from './pages/Drinks'
import Promotions from './pages/Promotions'
import About from './pages/About'
import Footer from './components/Footer/Footer'
import styles from './styles/global.scss'

export default function App() {
    return (
        <div className='app'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Pizzas />} />
                    <Route path='/combo' element={<Combos />} />
                    <Route path='/dessert' element={<Desserts />} />
                    <Route path='/drinks' element={<Drinks />} />
                    <Route path='/promotions' element={<Promotions />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
