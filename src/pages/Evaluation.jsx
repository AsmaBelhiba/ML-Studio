import React from 'react';
import { ChartCard } from '../components/Utils';
import { BarChart3, ScatterChart, LineChart, PieChart } from 'lucide-react';

const Evaluation = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-slate-900">Model Evaluation</h1>
                    <p className="text-slate-500">Detailed metric analysis and performance visualization.</p>
                </div>
                <div className="flex gap-3">
                    <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 outline-none">
                        <option>All Models</option>
                        <option>Random Forest</option>
                        <option>SVM</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Confusion Matrix" subtitle="RF predictions vs Actual targets">
                    <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[300px] font-bold text-white">
                        <div className="bg-slate-50 text-slate-400 flex items-center justify-center text-xs">P / A</div>
                        <div className="bg-slate-100 text-slate-800 flex items-center justify-center">Low</div>
                        <div className="bg-slate-100 text-slate-800 flex items-center justify-center">High</div>

                        <div className="bg-slate-100 text-slate-800 flex items-center justify-center">Low</div>
                        <div className="bg-primary-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-primary-100 animate-pulse">452</div>
                        <div className="bg-primary-200 rounded-xl flex items-center justify-center text-2xl text-primary-800">12</div>

                        <div className="bg-slate-100 text-slate-800 flex items-center justify-center">High</div>
                        <div className="bg-primary-100 rounded-xl flex items-center justify-center text-2xl text-primary-700">8</div>
                        <div className="bg-primary-500 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-primary-50">296</div>
                    </div>
                </ChartCard>

                <ChartCard title="ROC Curve" subtitle="Model discriminatory power">
                    <div className="relative h-[300px] w-full border-l-2 border-b-2 border-slate-100 mt-4 overflow-hidden rounded">
                        <svg className="w-full h-full">
                            <path
                                d="M 0 300 Q 20 200 100 80 T 300 0"
                                fill="none"
                                stroke="#0ea5e9"
                                strokeWidth="4"
                                className="drop-shadow-lg"
                            />
                            <line x1="0" y1="300" x2="300" y2="0" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                        <div className="absolute top-5 right-5 text-xs bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-3 h-1 bg-primary-500 rounded"></div>
                                <span>AUC: 0.94</span>
                            </div>
                        </div>
                    </div>
                </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                    { label: 'Precision', val: '0.92', color: 'text-primary-600' },
                    { label: 'Recall', val: '0.89', color: 'text-accent-600' },
                    { label: 'F1-Score', val: '0.91', color: 'text-amber-600' },
                ].map((m) => (
                    <div key={m.label} className="card text-center">
                        <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">{m.label}</h4>
                        <p className={`text-4xl font-black ${m.color}`}>{m.val}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Evaluation;
