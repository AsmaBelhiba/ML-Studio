import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Database,
    Eraser,
    Cpu,
    PlayCircle,
    BarChart3,
    Activity,
    Download,
    Settings
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Dataset', path: '/dataset', icon: Database },
    { name: 'Data Cleaning', path: '/cleaning', icon: Eraser },
    { name: 'Models', path: '/models', icon: Cpu },
    { name: 'Training', path: '/training', icon: PlayCircle },
    { name: 'Evaluation', path: '/evaluation', icon: BarChart3 },
    { name: 'Experiments', path: '/experiments', icon: Activity },
    { name: 'Export', path: '/export', icon: Download },
];

const Sidebar = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-100 flex flex-col z-50">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-200">
                    <Activity size={24} />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-800">ML Studio</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                            isActive
                                ? "bg-primary-50 text-primary-600 shadow-sm shadow-primary-50"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        )}
                    >
                        <item.icon size={20} />
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-50">
                <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
                    <Settings size={20} />
                    Settings
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
