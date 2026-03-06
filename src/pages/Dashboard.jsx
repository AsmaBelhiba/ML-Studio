import React from 'react';
import { StatCard, ChartCard } from '../components/Utils';
import { Users, FileText, Activity, TrendingUp } from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';

const data = [
    { name: 'Exp 1', val: 0.82 },
    { name: 'Exp 2', val: 0.85 },
    { name: 'Exp 3', val: 0.78 },
    { name: 'Exp 4', val: 0.89 },
    { name: 'Exp 5', val: 0.91 },
    { name: 'Exp 6', val: 0.88 },
];

const modelPerfData = [
    { name: 'SVM', score: 85 },
    { name: 'RF', score: 92 },
    { name: 'KNN', score: 78 },
    { name: 'LR', score: 81 },
    { name: 'MLP', score: 88 },
];

const COLORS = ['#0ea5e9', '#14b8a6', '#f59e0b', '#ef4444', '#8b5cf6'];

const Dashboard = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-slate-500">Welcome back to Energy Efficiency analysis workspace.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Samples" value="768" icon={Users} trend="up" trendValue="12" color="primary" />
                <StatCard title="Features" value="8" icon={FileText} color="accent" />
                <StatCard title="Active Models" value="5" icon={Activity} color="amber" />
                <StatCard title="Avg Precision" value="89.4%" icon={TrendingUp} trend="up" trendValue="2.4" color="rose" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ChartCard title="Accuracy Progression" subtitle="Results across last 6 experiments">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    cursor={{ stroke: '#0ea5e9', strokeWidth: 2 }}
                                />
                                <Area type="monotone" dataKey="val" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                <div>
                    <ChartCard title="Model Comparison" subtitle="Scores by algorithm type">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={modelPerfData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} />
                                <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                                    {modelPerfData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                    <h3 className="font-bold text-lg mb-4 text-slate-800">Experiment Summary</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-200 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-600 shadow-sm font-bold">
                                        #{i}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">Exp_Energy_00{i}</h4>
                                        <p className="text-xs text-slate-400">Trained on 2024-03-0{i}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-slate-700">0.9{i} Acc</span>
                                    <p className="text-xs text-emerald-500 font-medium">+0.02</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h3 className="font-bold text-lg mb-4 text-slate-800">Energy Efficiency Status</h3>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-slate-500">Resource Usage</span>
                        <span className="text-sm font-bold text-primary-600">82%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-8">
                        <div className="bg-primary-500 h-full w-[82%] rounded-full shadow-lg shadow-primary-100 animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Storage</p>
                            <p className="text-xl font-bold text-slate-800 mt-1">1.2 GB</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Queue</p>
                            <p className="text-xl font-bold text-slate-800 mt-1">12 Ready</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
