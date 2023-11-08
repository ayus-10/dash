import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Support from './components/Support.jsx'

const App = () => {
    const [activeComponent, setActiveComponent] = useState('home')
    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName)
    }

    return (
        <div className='grid grid-cols-6 w-screen'>
            <Sidebar onButtonClick={handleButtonClick} activeComponent={activeComponent} />
            <main className="col-span-5">
                {activeComponent === 'home' && <Home />}
                {activeComponent === 'about' && <About />}
                {activeComponent === 'services' && <Services />}
                {activeComponent === 'pricing' && <Pricing />}
                {activeComponent === 'support' && <Support />}
            </main>
        </div>
    )
}

export default App