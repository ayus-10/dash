import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Support from './components/Support.jsx'

const App = () => {
    return (
        <div className='grid grid-cols-6 w-screen'>
            <Sidebar />
        </div>
    )
}

export default App