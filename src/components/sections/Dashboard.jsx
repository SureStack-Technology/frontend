"use client"
import React from 'react';
import useAuthStore from '../../stores/useAuthStore';
import { Shield, Zap, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="pt-24 min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-cyan-400 flex items-center">
          <Zap className="w-8 h-8 mr-3" /> Dashboard
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Welcome back, <span className="font-semibold">{user?.name || user?.email || 'Valued User'}</span>. 
          This is your private, secured area for real-time risk data.
        </p>

        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-white">Your Risk Profile Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
              <div className="text-cyan-400 text-2xl font-bold">A-</div>
              <p className="text-slate-400">Current Risk Score</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
              <div className="text-cyan-400 text-2xl font-bold">30s</div>
              <p className="text-slate-400">Data Latency</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
              <div className="text-cyan-400 text-2xl font-bold">$1.2M</div>
              <p className="text-slate-400">Insured Value</p>
            </div>
          </div>
          
          <button 
            onClick={logout} 
            className="mt-8 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center"
          >
            <LogOut className="w-5 h-5 mr-2" /> Secure Logout
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;