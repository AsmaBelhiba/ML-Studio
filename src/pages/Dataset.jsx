import React from 'react';
import { ChartCard } from '../components/Utils';
import { Database, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Dataset = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-slate-900">Dataset Exploration</h1>
                    <p className="text-slate-500">Analyze and explore the Energy Efficiency dataset features.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <Filter size={16} />
                        Filters
                    </button>
                    <button className="px-4 py-2 bg-primary-600 rounded-xl text-sm font-medium text-white hover:bg-primary-700 shadow-md shadow-primary-100 transition-all">
                        Download CSV
                    </button>
                </div>
            </div>

            <div className="card overflow-hidden !p-0">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                    <div className="relative w-72">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search features..."
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary-100 transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span>Showing 1-10 of 768 samples</span>
                        <div className="flex gap-1 ml-4">
                            <button className="p-1 hover:bg-slate-100 rounded border border-slate-100"><ChevronLeft size={14} /></button>
                            <button className="p-1 hover:bg-slate-100 rounded border border-slate-100"><ChevronRight size={14} /></button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X1</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X2</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X3</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X4</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X5</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X6</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X7</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center">X8</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center bg-primary-50 text-primary-700">Y1</th>
                                <th className="px-6 py-4 font-bold border-b border-slate-100 text-center bg-primary-50 text-primary-700">Y2</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[...Array(8)].map((_, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">0.98</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">514.50</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">294.00</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">110.25</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">7.00</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">2</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">0.00</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 text-center">0</td>
                                    <td className="px-6 py-4 text-sm font-bold text-primary-600 text-center bg-primary-50/30">15.55</td>
                                    <td className="px-6 py-4 text-sm font-bold text-primary-600 text-center bg-primary-50/30">21.33</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Feature Distribution" subtitle="Histogram for Surface Area (X2)">
                    <div className="h-[250px] flex items-end gap-2 px-10 pt-10">
                        {[40, 60, 45, 90, 30, 70, 50, 85, 40, 95].map((h, i) => (
                            <div key={i} className="flex-1 bg-slate-100 rounded-t-lg relative group transition-all duration-300 hover:bg-primary-500 cursor-help">
                                <div className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
                                <div style={{ height: `${h}%` }} className="bg-primary-100 w-full rounded-t-lg group-hover:bg-primary-400 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </ChartCard>

                <ChartCard title="Correlation Matrix" subtitle="Heatmap of feature relationships">
                    <div className="grid grid-cols-5 gap-2 h-[250px]">
                        {[...Array(25)].map((_, i) => {
                            const opacity = Math.random();
                            return (
                                <div key={i}
                                    className="bg-primary-500 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                                    style={{ opacity: opacity < 0.2 ? 0.2 : opacity }}
                                >
                                    {(opacity * 1).toFixed(2)}
                                </div>
                            );
                        })}
                    </div>
                </ChartCard>
            </div>
        </div>
    );
};

export default Dataset;
