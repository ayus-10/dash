import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
    const [activeComponent, setActiveComponent] = useState('home')
    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName)
    }

    return (
        <div className='grid grid-cols-6 w-screen h-screen overflow-hidden'>
            <Sidebar onButtonClick={handleButtonClick} activeComponent={activeComponent} />
            <main className="bg-slate-100 col-span-5 overflow-y-auto">
                {activeComponent === 'home' && <Home />}
                {activeComponent === 'about' && <About />}
                {activeComponent === 'services' && <Services />}
                {activeComponent === 'pricing' && <Pricing />}
                {activeComponent === 'contact' && <Contact />}
            </main>
        </div>
    )
}

export default App