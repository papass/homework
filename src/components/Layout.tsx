import React from 'react';
import { Navigation } from './Navigation';
import './Layout.css'

const Layout =({ children } : {children: React.ReactNode}) =>{
    return(
        <>
        <Navigation></Navigation>
        <main className='container'>
            <div className='task'>
                {children}
            </div>
        </main>
        </>
    )
}

export default Layout;