import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Dataset = lazy(() => import('./pages/Dataset'));
const Cleaning = lazy(() => import('./pages/Cleaning'));
const Models = lazy(() => import('./pages/Models'));
const Training = lazy(() => import('./pages/Training'));
const Evaluation = lazy(() => import('./pages/Evaluation'));
const Experiments = lazy(() => import('./pages/Experiments'));
const Export = lazy(() => import('./pages/Export'));

const Loading = () => (
  <div className="h-full w-full flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/models" element={<Models />} />
            <Route path="/training" element={<Training />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/export" element={<Export />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
