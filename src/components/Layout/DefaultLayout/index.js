import React from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            DefaultLayout
            <Header />
            <Sidebar />
            <div className="container">
                <div className="content"> {children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
