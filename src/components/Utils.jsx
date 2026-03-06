import React from 'react';

export const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = "primary" }) => {
    const colorClasses = {
        primary: "bg-primary-50 text-primary-600 shadow-primary-50",
        accent: "bg-accent-50 text-accent-600 shadow-accent-50",
        amber: "bg-amber-50 text-amber-600 shadow-amber-50",
        rose: "bg-rose-50 text-rose-600 shadow-rose-50",
    };

    return (
        <div className="card group">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${colorClasses[color]} transition-transform group-hover:scale-110 duration-300`}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                        }`}>
                        {trend === 'up' ? '+' : '-'}{trendValue}%
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
                <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
            </div>
        </div>
    );
};

export const ChartCard = ({ title, children, subtitle, actions }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-50 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
                    {subtitle && <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>}
                </div>
                {actions && <div className="flex gap-2">{actions}</div>}
            </div>
            <div className="flex-1 w-full min-h-[300px]">
                {children}
            </div>
        </div>
    );
};
