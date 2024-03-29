import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'rsuite/dist/rsuite.min.css'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Search from './pages/Search/Search'
function App() {
    return (
        <Router>
            <div className='App'>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <ToastContainer />
            </div>
        </Router>
    )
}

export default App
