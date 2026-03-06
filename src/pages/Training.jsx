import React, { useState, useEffect } from 'react';
import { PlayCircle, CheckCircle, AlertCircle, Clock, Search } from 'lucide-react';

const Training = () => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Idle');

    useEffect(() => {
        if (progress > 0 && progress < 100) {
            const timer = setTimeout(() => setProgress(p => p + 5), 500);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    const startTraining = () => {
        setProgress(1);
        setStatus('Initializing...');
        setTimeout(() => setStatus('Training Models...'), 1000);
    };

    useEffect(() => {
        if (progress >= 100) setStatus('Completed');
    }, [progress]);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-slate-900">Training Console</h1>
                <p className="text-slate-500">Monitor model training progress and execution logs.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="card">
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center gap-4">
                                <div className={`p-4 rounded-2xl ${progress === 100 ? 'bg-emerald-50 text-emerald-600' : progress > 0 ? 'bg-primary-50 text-primary-600' : 'bg-slate-50 text-slate-400'} transition-all`}>
                                    <PlayCircle size={32} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-800">{status}</h3>
                                    <p className="text-sm text-slate-400">Random Forest & SVM Ensemble</p>
                                </div>
                            </div>
                            <button
                                onClick={startTraining}
                                disabled={progress > 0 && progress < 100}
                                className="px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary-100"
                            >
                                {progress === 0 ? 'Start Training' : progress === 100 ? 'Re-run' : 'Training...'}
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-sm font-bold text-slate-500">
                                <span>Progress</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-primary-100"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-12">
                            <div className="text-center">
                                <Clock className="mx-auto mb-2 text-slate-300" size={20} />
                                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Elapsed</p>
                                <p className="font-bold text-slate-800">00:12:45</p>
                            </div>
                            <div className="text-center">
                                <Search className="mx-auto mb-2 text-slate-300" size={20} />
                                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Epochs</p>
                                <p className="font-bold text-slate-800">12 / 100</p>
                            </div>
                            <div className="text-center text-emerald-500">
                                <CheckCircle className="mx-auto mb-2" size={20} />
                                <p className="text-[10px] uppercase font-bold tracking-wider">Loss</p>
                                <p className="font-bold">0.0234</p>
                            </div>
                        </div>
                    </div>

                    <div className="card !bg-slate-900 text-slate-300 font-mono text-xs overflow-hidden">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                            <span className="text-slate-500 uppercase tracking-widest font-bold">Execution Logs</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                            </div>
                        </div>
                        <div className="space-y-1 h-[200px] overflow-y-auto">
                            <p><span className="text-emerald-500">[INFO]</span> Initializing training session...</p>
                            <p><span className="text-emerald-500">[INFO]</span> Loading dataset version v1.2.0...</p>
                            <p><span className="text-emerald-500">[INFO]</span> Normalizing features using StandardScaler...</p>
                            <p><span className="text-primary-400">[RUN]</span> Fitting Random Forest Regressor...</p>
                            <p><span className="text-yellow-500">[WAIT]</span> Tuning hyperparameters GridSearch...</p>
                            <p className="opacity-50">...</p>
                            {progress > 50 && <p><span className="text-emerald-500">[INFO]</span> SVM model fitted successfully.</p>}
                            {progress === 100 && <p><span className="text-emerald-500">[SUCCESS]</span> Training completed in 14.5s.</p>}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3 className="font-bold text-slate-800 mb-6">Status Details</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="w-1.5 h-auto bg-primary-500 rounded-full"></div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800">Model Queue</h4>
                                <p className="text-xs text-slate-500">2 models waiting in line.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="w-1.5 h-auto bg-accent-500 rounded-full"></div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800">Hardware</h4>
                                <p className="text-xs text-slate-500">CPU Usage: 45% | RAM: 2.1GB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
