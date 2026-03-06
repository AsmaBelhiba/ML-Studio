import React from 'react';
import { Cpu, Info, Sliders, Zap } from 'lucide-react';

const models = [
    { id: 'svm', name: 'SVM', desc: 'Support Vector Machine for classification/regression.', icon: '🛡️' },
    { id: 'rf', name: 'Random Forest', desc: 'Ensemble of decision trees for robust prediction.', icon: '🌲', recommended: true },
    { id: 'knn', name: 'KNN', desc: 'K-Nearest Neighbors based on feature proximity.', icon: '📍' },
    { id: 'lr', name: 'Logistic Regression', desc: 'Linear model for binary or multinomial tasks.', icon: '📈' },
    { id: 'mlp', name: 'Multi-layer Perceptron', desc: 'Neural network with multiple hidden layers.', icon: '🧠' },
];

const Models = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-slate-900">Model Selection</h1>
                    <p className="text-slate-500">Choose and configure algorithms for Energy Efficiency prediction.</p>
                </div>
                <div className="flex gap-3">
                    <label className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-all">
                        <span className="text-sm font-medium text-slate-600">Auto-Tune</span>
                        <div className="w-10 h-5 bg-slate-200 rounded-full flex items-center px-1">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </label>
                    <button className="px-6 py-2 bg-primary-600 rounded-xl text-sm font-bold text-white hover:bg-primary-700 shadow-md transition-all flex items-center gap-2">
                        <Zap size={16} />
                        Start Training
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4 overflow-y-auto max-h-[700px] pr-4 custom-scrollbar">
                    {models.map((m) => (
                        <div key={m.id} className={`p-6 rounded-2xl border-2 transition-all cursor-pointer group active:scale-[0.98] ${m.id === 'rf' ? 'bg-primary-50/30 border-primary-200 shadow-soft shadow-primary-50' : 'bg-white border-slate-100 hover:border-primary-100'
                            }`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="text-3xl">{m.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800">{m.name}</h3>
                                        <p className="text-sm text-slate-500">{m.desc}</p>
                                    </div>
                                </div>
                                {m.recommended && (
                                    <span className="bg-primary-100 text-primary-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Recommended</span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary-600 transition-all"><Info size={16} /></button>
                                <div className="flex-1"></div>
                                <button className="px-3 py-1.5 bg-white shadow-sm border border-slate-100 rounded-lg text-xs font-bold text-slate-700 hover:bg-primary-600 hover:text-white transition-all">Configure</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card space-y-8 sticky top-28 h-fit">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-6">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <Sliders size={20} className="text-primary-600" />
                            Hyperparameters
                        </h3>
                        <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded uppercase">RF Configuration</span>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-sm font-bold text-slate-700">Number of Estimators</span>
                                <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">100</span>
                            </div>
                            <input type="range" className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary-600" />
                            <div className="flex justify-between text-[10px] font-bold text-slate-300">
                                <span>10</span>
                                <span>500</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-sm font-bold text-slate-700">Max Depth</span>
                                <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">None</span>
                            </div>
                            <input type="range" className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary-600" />
                            <div className="flex justify-between text-[10px] font-bold text-slate-300">
                                <span>1</span>
                                <span>50</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-700">Criterion</span>
                            <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-primary-100">
                                <option>Gini</option>
                                <option>Entropy</option>
                                <option>Log Loss</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-50">
                        <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all">Reset to Defaults</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Models;
