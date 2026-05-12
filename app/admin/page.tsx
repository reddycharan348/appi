"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Lock, TrendingUp, History, Plus, Filter, LogOut, ShieldCheck, Activity, Users, DollarSign, LayoutDashboard, ChevronRight, ArrowRight, Save, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [prices, setPrices] = useState<any[]>([]);
  const [newPrice, setNewPrice] = useState("");
  const [filterDays, setFilterDays] = useState(30);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = () => {
    fetch("/data/prices.json")
      .then(res => res.json())
      .then(data => setPrices(data))
      .catch(() => setPrices([]));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Updated: Only require ID for security access as requested
    if (id === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Access ID");
    }
    setIsAuthenticating(false);
  };

  const handleUpdatePrice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPrice || isNaN(parseFloat(newPrice))) return;

    setIsUpdating(true);
    try {
      const response = await fetch("/api/price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: parseFloat(newPrice) })
      });

      if (response.ok) {
        const data = await response.json();
        setPrices(data.prices);
        setNewPrice("");
        alert("Live market rates synchronized globally across all user panels.");
      } else {
        throw new Error("Sync failed");
      }
    } catch (err) {
      alert("Error synchronizing data. Please check connection.");
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredData = prices.slice(-filterDays);
  const currentPrice = prices.length > 0 ? prices[prices.length - 1].price : 0;
  const previousPrice = prices.length > 1 ? prices[prices.length - 2].price : currentPrice;
  const priceChange = previousPrice !== 0 ? ((currentPrice - previousPrice) / previousPrice) * 100 : 0;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-gold rounded-full blur-[120px] opacity-30"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass-dark p-10 md:p-14 rounded-[40px] relative z-10 border-white/5"
        >
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-brand-gold rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-brand-gold/20">
              <ShieldCheck className="text-black" size={40} />
            </div>
            <h1 className="text-3xl font-black text-white text-center">Security Gateway</h1>
            <p className="text-gray-500 text-sm mt-2 font-medium tracking-widest uppercase">Sync Only via Access ID</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-[4px] ml-1">Administrator Access ID</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Users size={18} className="text-gray-500 group-focus-within:text-brand-gold transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-brand-gold transition-all font-bold placeholder:text-gray-600"
                  placeholder="Enter ID (1234)"
                  required
                />
              </div>
            </div>
            
            <button 
              disabled={isAuthenticating}
              type="submit" 
              className="w-full btn-premium bg-brand-gold text-black py-6 text-lg group justify-center shadow-2xl shadow-brand-gold/20"
            >
              {isAuthenticating ? (
                <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
              ) : (
                <>Establish Secure Sync <ArrowRight className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[4px] text-gray-500">Live Synchronization Active</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Market Control <span className="text-brand-gold">Dashboard.</span></h1>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-500/10 hover:text-red-500 transition-all group"
          >
            <LogOut size={16} /> Disconnect Sync
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Stats & Update */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Stats Card */}
            <div className="glass-dark p-8 rounded-[40px] border-white/5">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-brand-gold/10 rounded-2xl">
                  <Activity className="text-brand-gold" size={24} />
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${priceChange >= 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                  {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}% Trend
                </div>
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Live Market Index</div>
              <div className="text-6xl font-black text-white tracking-tighter mb-4">₹{currentPrice.toFixed(2)}</div>
              <p className="text-gray-500 text-sm font-medium">Real-time value across all user panels in Shanthipuram.</p>
            </div>

            {/* Update Price Card */}
            <div className="glass-dark p-8 rounded-[40px] border-brand-gold/20 shadow-2xl shadow-brand-gold/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center">
                  <DollarSign className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-black">Sync New Rate</h3>
              </div>
              
              <form onSubmit={handleUpdatePrice} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-[3px] ml-1">New Market Value (₹)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-brand-gold transition-all text-2xl font-black"
                    placeholder="e.g. 5.10"
                    required
                  />
                </div>
                
                <button 
                  disabled={isUpdating}
                  className="w-full btn-premium bg-brand-gold text-black justify-center py-6 text-lg group shadow-brand-gold/20"
                >
                  {isUpdating ? (
                    <RefreshCw className="animate-spin" size={20} />
                  ) : (
                    <>Sync Market Rate <Save size={20} className="group-hover:scale-110 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Visualization */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-dark p-10 rounded-[48px] border-white/5 h-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <TrendingUp className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">Price Analysis Index</h3>
                    <p className="text-gray-500 text-sm font-medium">Historical trend tracking for Shanthipuram.</p>
                  </div>
                </div>
                
                <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                  {[7, 30, 90].map((d) => (
                    <button 
                      key={d}
                      onClick={() => setFilterDays(d)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filterDays === d ? 'bg-brand-gold text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                      {d}D
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={filteredData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis 
                      dataKey="date" 
                      stroke="#4b5563" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                      tick={{ fill: '#4b5563', fontWeight: 'bold' }}
                    />
                    <YAxis 
                      stroke="#4b5563" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                      tick={{ fill: '#4b5563', fontWeight: 'bold' }}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#121212', border: '1px solid #ffffff10', borderRadius: '16px' }}
                      itemStyle={{ color: '#FFD700', fontWeight: 'bold' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#FFD700" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* History Log */}
        <div className="mt-8 glass-dark p-10 rounded-[48px] border-white/5">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <History className="text-gray-400" size={24} />
             </div>
             <h3 className="text-xl font-black">Audit History Log</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[3px] text-gray-500">Synchronization Date</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[3px] text-gray-500">Market Value (₹)</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[3px] text-gray-500">Status</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[3px] text-gray-500">Auth Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[...prices].reverse().slice(0, 10).map((p, i) => (
                  <tr key={i} className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 font-bold text-gray-300">{p.date}</td>
                    <td className="py-6 font-black text-brand-gold text-xl">₹{p.price.toFixed(2)}</td>
                    <td className="py-6">
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black uppercase rounded-full">Synchronized</span>
                    </td>
                    <td className="py-6 text-gray-500 font-bold text-xs">Access ID (1234)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
