import React from 'react';
import ReactDom from 'react-dom/client';
import HeaderComponent from './components/Header';
import BodyLayout from './components/Body';


const AppLayout = () => {
    return (
        <div className='app' id='app'>
            <HeaderComponent />
            <BodyLayout />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<AppLayout />)