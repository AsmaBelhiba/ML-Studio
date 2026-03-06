import React from 'react';
import { Eraser, Trash2, CheckCircle, RefreshCcw, Save } from 'lucide-react';

const Cleaning = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-slate-900">Data Cleaning</h1>
                <p className="text-slate-500">Preprocess and normalize the Energy Efficiency dataset.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="card">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <Eraser size={20} className="text-primary-600" />
                            General Preprocessing
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div>
                                    <h4 className="font-semibold text-slate-800">Handle Missing Values</h4>
                                    <p className="text-sm text-slate-500">Choose how to treat empty cells in the dataset.</p>
                                </div>
                                <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100">
                                    <option>Drop Rows</option>
                                    <option>Fill with Mean</option>
                                    <option>Fill with Median</option>
                                    <option>Fill with Mode</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div>
                                    <h4 className="font-semibold text-slate-800">Duplicate Removal</h4>
                                    <p className="text-sm text-slate-500">Automatically remove exact duplicate entries.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-6 bg-primary-600 rounded-full flex items-center justify-end px-1 cursor-pointer">
                                        <div className="w-4 h-4 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div>
                                    <h4 className="font-semibold text-slate-800">Scaling / Normalization</h4>
                                    <p className="text-sm text-slate-500">Adjust feature ranges for model compatibility.</p>
                                </div>
                                <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100">
                                    <option>None</option>
                                    <option>StandardScaler</option>
                                    <option>MinMaxScaler</option>
                                    <option>RobustScaler</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <CheckCircle size={20} className="text-accent-600" />
                            Feature Selection
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'].map((f) => (
                                <label key={f} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-50 transition-all">
                                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary-600 rounded" />
                                    <span className="text-sm font-semibold text-slate-700">{f}</span>
                                </label>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-50">
                            <h4 className="font-bold text-sm text-slate-400 uppercase tracking-wider mb-4">Target Variable</h4>
                            <div className="flex gap-4">
                                {['Y1 (Heating Load)', 'Y2 (Cooling Load)'].map((t, i) => (
                                    <label key={t} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl cursor-pointer hover:bg-white transition-all">
                                        <input type="radio" name="target" defaultChecked={i === 0} className="w-4 h-4 accent-primary-600" />
                                        <span className="text-sm font-semibold text-slate-700">{t}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="card bg-primary-600 text-white">
                        <h3 className="font-bold text-lg mb-2">Ready to Clean?</h3>
                        <p className="text-primary-100 text-sm mb-6">Applied changes will create a new version of the dataset ready for training.</p>
                        <div className="space-y-3">
                            <button className="w-full py-3 bg-white text-primary-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-50 transition-all">
                                <RefreshCcw size={18} />
                                Apply Changes
                            </button>
                            <button className="w-full py-3 bg-primary-700 text-white border border-primary-500 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-800 transition-all">
                                <Save size={18} />
                                Save Dataset
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="font-bold text-slate-800 mb-4">Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Initial Rows</span>
                                <span className="font-bold">768</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Missing Values</span>
                                <span className="font-bold text-emerald-500">0 Total</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Encoded Cols</span>
                                <span className="font-bold">2 (X6, X8)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cleaning;
