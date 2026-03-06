import React from 'react';
import { Activity, Clock, Shield, RotateCcw } from 'lucide-react';

const experiments = [
    { id: '12', name: 'RF_Baseline', date: '2 hours ago', acc: 0.89, status: 'Completed', tag: 'V1.2' },
    { id: '11', name: 'SVM_Poly_3', date: '5 hours ago', acc: 0.82, status: 'Archived', tag: 'V1.1' },
    { id: '10', name: 'MLP_Neural_Init', date: '昨天', acc: 0.75, status: 'Rollback', tag: 'V1.0', danger: true },
];

const Experiments = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-slate-900">Experiment Tracking</h1>
                <p className="text-slate-500">Manage model versions and audit history with MLOps features.</p>
            </div>

            <div className="card !p-0 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active History</span>
                    <button className="text-xs font-bold text-primary-600 hover:text-primary-700">View detailed log</button>
                </div>
                <div className="divide-y divide-slate-50">
                    {experiments.map((e) => (
                        <div key={e.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                            <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm ${e.danger ? 'bg-rose-50 text-rose-600' : 'bg-primary-50 text-primary-600'
                                    }`}>
                                    #{e.id}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-bold text-slate-800">{e.name}</h3>
                                        <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-bold">{e.tag}</span>
                                    </div>
                                    <div className="flex items-center gap-4 mt-1">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                            <Clock size={12} />
                                            {e.date}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                            <Shield size={12} />
                                            Hash: c120aef
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="text-right">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Accuracy</p>
                                    <p className="text-xl font-black text-slate-800">{(e.acc * 100).toFixed(0)}%</p>
                                </div>

                                <div className="flex gap-2">
                                    <button className="p-2 border border-slate-100 rounded-xl text-slate-400 hover:text-primary-600 hover:bg-white hover:shadow-soft transition-all">
                                        <RotateCcw size={20} />
                                    </button>
                                    <button className="px-4 py-2 bg-primary-600 text-white text-xs font-bold rounded-xl shadow-md shadow-primary-100 hover:bg-primary-700 transition-all">
                                        Deploy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                    <h3 className="font-bold text-slate-800 mb-4">MLflow Integration</h3>
                    <p className="text-sm text-slate-500 mb-6 font-medium">Synced with remote server at <code className="text-primary-600 bg-primary-50 px-2 py-1 rounded">mlflow.studio.local</code></p>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-xs font-bold text-slate-500">Tracking Version</span>
                            <span className="text-xs font-bold">2.14.0</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-xs font-bold text-slate-500">Registry Backend</span>
                            <span className="text-xs font-bold">PostgreSQL</span>
                        </div>
                    </div>
                </div>

                <div className="card bg-accent-600 text-white">
                    <h3 className="font-bold text-lg mb-4">Quick Rollback</h3>
                    <p className="text-sm text-accent-100 mb-6">Instantly revert to the last stable model (v1.2) if production anomaly is detected.</p>
                    <button className="w-full py-3 bg-white text-accent-600 rounded-xl font-bold hover:bg-accent-50 transition-all">Initialize Rollback</button>
                </div>
            </div>
        </div>
    );
};

export default Experiments;
