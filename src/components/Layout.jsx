import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            <Sidebar />
            <main className="flex-1 ml-64 min-h-screen flex flex-col">
                <Header />
                <div className="p-8 pb-12 transition-all duration-300">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
