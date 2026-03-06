import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40">
            <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl w-96 border border-slate-100 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
                <Search size={18} className="text-slate-400" />
                <input
                    type="text"
                    placeholder="Search experiments, models..."
                    className="bg-transparent border-none outline-none text-sm w-full text-slate-600 placeholder:text-slate-400"
                />
            </div>

            <div className="flex items-center gap-5">
                <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-500 hover:bg-slate-50 transition-all">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-slate-800 leading-none">Asma Belhiba</p>
                        <p className="text-xs text-slate-400 mt-1">Admin Account</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center font-bold shadow-sm shadow-accent-50">
                        AB
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
