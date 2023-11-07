import React from 'react'
import Sidebar from './components/Sidebar.jsx'

const App = () => {
    return (
        <div className='grid grid-cols-5 w-screen'>
            <Sidebar className='col-span-2' />
        </div>
    )
}

export default App