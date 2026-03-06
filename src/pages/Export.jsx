import React from 'react';
import { Download, FileJson, FileText, Image as ImageIcon, Box } from 'lucide-react';

const Export = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-slate-900">Export Results</h1>
                <p className="text-slate-500">Securely download your trained models and experiment artifacts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { name: 'Model Weights', type: 'picke / joblib', icon: Box, color: 'bg-primary-50 text-primary-600' },
                    { name: 'Full Report', type: 'PDF / HTML', icon: FileText, color: 'bg-rose-50 text-rose-600' },
                    { name: 'Raw Results', type: 'CSV / JSON', icon: FileJson, color: 'bg-amber-50 text-amber-600' },
                    { name: 'Visual Assets', type: 'PNG / SVG', icon: ImageIcon, color: 'bg-accent-50 text-accent-600' },
                ].map((item) => (
                    <div key={item.name} className="card group cursor-pointer">
                        <div className={`p-4 rounded-2xl ${item.color} mb-6 w-fit group-hover:scale-110 transition-transform`}>
                            <item.icon size={28} />
                        </div>
                        <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-6">{item.type}</p>
                        <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all flex items-center justify-center gap-2">
                            <Download size={14} />
                            Download
                        </button>
                    </div>
                ))}
            </div>

            <div className="card">
                <h3 className="font-bold text-lg mb-6">Recent Exports</h3>
                <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-400 shadow-sm">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Experiment_Report_00{i}.pdf</h4>
                                    <p className="text-xs text-slate-400">Exported on 2024-03-0{i} • 2.4 MB</p>
                                </div>
                            </div>
                            <button className="px-4 py-1.5 text-xs font-bold text-primary-600 hover:bg-white rounded-lg transition-all">Retry</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Export;
