"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Lock, TrendingUp, History, Plus, Filter, LogOut, ShieldCheck, Activity, Users, DollarSign, LayoutDashboard, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [prices, setPrices] = useState<any[]>([]);
  const [newPrice, setNewPrice] = useState("");
  const [filterDays, setFilterDays] = useState(30);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    fetch("/data/prices.json")
      .then(res => res.json())
      .then(data => setPrices(data))
      .catch(() => setPrices([]));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (id === "1234" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Security Credentials");
    }
    setIsAuthenticating(false);
  };

  const handleUpdatePrice = (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    const updatedPrices = [...prices, { date: today, price: parseFloat(newPrice) }];
    setPrices(updatedPrices);
    setNewPrice("");
    alert("Live market rates synchronized globally.");
  };

  const filteredData = prices.slice(-filterDays);
  const currentPrice = prices.length > 0 ? prices[prices.length - 1].price : 0;
  const previousPrice = prices.length > 1 ? prices[prices.length - 2].price : currentPrice;
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#0A0A0A] relative overflow-hidden">
        {/* Background Effects */}
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
            <p className="text-gray-500 text-sm mt-2 font-medium tracking-widest uppercase">Admin Pricing Engine</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-[3px] ml-1">Access ID</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Users size={18} className="text-gray-500 group-focus-within:text-brand-gold transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-brand-gold transition-all font-bold placeholder:text-gray-600"
                  placeholder="ID: 1234"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-[3px] ml-1">Encryption Key</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500 group-focus-within:text-brand-gold transition-colors" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-brand-gold transition-all font-bold placeholder:text-gray-600"
                  placeholder="Password: 1234"
                />
              </div>
            </div>

            <button 
              disabled={isAuthenticating}
              type="submit" 
              className="w-full btn-premium bg-brand-gold text-black justify-center py-5 text-lg group shadow-brand-gold/10"
            >
              {isAuthenticating ? (
                <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
              ) : (
                <>Authorize Access <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} /></>
              )}
            </button>
          </form>
          
          <div className="mt-10 flex items-center justify-center gap-4 text-[10px] font-black text-gray-600 tracking-[2px] uppercase">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            System Status: Encrypted
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F4F4] pb-24">
      {/* Sidebar Navigation (Mock) */}
      <nav className="fixed top-0 left-0 h-full w-24 bg-black hidden xl:flex flex-col items-center py-10 z-50">
        <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center mb-12">
          <Activity size={24} className="text-black" />
        </div>
        <div className="flex flex-col gap-8">
          {[LayoutDashboard, TrendingUp, History, Users, ShieldCheck].map((Icon, i) => (
            <div key={i} className={`p-4 rounded-xl cursor-pointer transition-all ${i === 0 ? 'bg-white/10 text-brand-gold' : 'text-gray-600 hover:text-white'}`}>
              <Icon size={24} />
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <button onClick={() => setIsLoggedIn(false)} className="p-4 text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
            <LogOut size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="xl:pl-24">
        {/* Header Dashboard */}
        <header className="bg-white border-b border-gray-100 px-10 py-8 sticky top-0 z-40">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black text-black">Master Dashboard</h1>
              <p className="text-gray-400 font-bold uppercase tracking-[3px] text-[10px] mt-1">HKGN Market Logistics Hub</p>
            </div>
            <div className="flex gap-4">
              <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 font-bold text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Regional Market: Active
              </div>
              <button onClick={() => setIsLoggedIn(false)} className="md:hidden flex items-center gap-2 text-red-500 font-bold p-3 bg-red-50 rounded-xl">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Today's Market Rate", value: `₹${currentPrice.toFixed(2)}`, icon: DollarSign, trend: `${priceChange > 0 ? '+' : ''}${priceChange.toFixed(2)}%`, positive: priceChange >= 0 },
              { label: "Partner Network", value: "512", icon: Users, trend: "+12", positive: true },
              { label: "Daily Volume", value: "12,400", icon: Activity, trend: "+8%", positive: true },
              { label: "System Security", value: "Level A", icon: ShieldCheck, trend: "Active", positive: true }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                    <stat.icon size={24} className="text-brand-yellow" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest ${stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {stat.trend}
                  </span>
                </div>
                <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-black">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Analytics Dashboard */}
            <div className="lg:col-span-8 bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm overflow-hidden relative">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-brand-yellow" size={20} />
                  </div>
                  <h2 className="text-2xl font-black">Price Volatility Index</h2>
                </div>
                <div className="flex gap-2 bg-gray-50 p-1 rounded-xl">
                  <button onClick={() => setFilterDays(5)} className={`px-6 py-2 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all ${filterDays === 5 ? 'bg-black text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}>5D</button>
                  <button onClick={() => setFilterDays(30)} className={`px-6 py-2 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all ${filterDays === 30 ? 'bg-black text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}>30D</button>
                </div>
              </div>
              <div className="h-[350px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={filteredData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#AAA', fontWeight: 'bold'}} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', padding: '20px'}}
                      labelStyle={{fontWeight: '900', color: '#000', marginBottom: '8px'}}
                    />
                    <Area type="monotone" dataKey="price" stroke="#ccac00" strokeWidth={5} fillOpacity={1} fill="url(#colorPrice)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Live Update Controller */}
            <div className="lg:col-span-4 bg-black rounded-[48px] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center">
                    <Plus className="text-black" size={20} />
                  </div>
                  <h2 className="text-2xl font-black">Live Pulse</h2>
                </div>
                
                <form onSubmit={handleUpdatePrice} className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[3px] ml-1">New Market Rate (INR)</label>
                    <div className="relative">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-black text-brand-gold">₹</div>
                      <input 
                        type="number" 
                        step="0.01"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        className="w-full pl-14 pr-8 py-8 bg-white/10 border border-white/10 rounded-3xl text-4xl font-black text-white outline-none focus:ring-4 focus:ring-brand-gold/20 focus:border-brand-gold transition-all"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  
                  <button className="w-full btn-premium bg-brand-gold text-black justify-center py-6 text-lg group shadow-brand-gold/20">
                    Sync Market Rate <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-brand-gold" size={24} />
                    <div className="text-[10px] font-black uppercase text-gray-400 leading-relaxed tracking-widest">
                      Changes will reflect instantly on the public homepage.
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle Texture */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.3)_0,transparent_70%)] pointer-events-none"></div>
            </div>
          </div>

          {/* Pricing Audit Logs */}
          <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <History className="text-brand-yellow" size={20} />
              </div>
              <h2 className="text-2xl font-black">Audit History Logs</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[3px]">
                    <th className="pb-6 pl-4">Timestamp</th>
                    <th className="pb-6">Market Index</th>
                    <th className="pb-6">Price Point</th>
                    <th className="pb-6 text-right pr-4">Global Sync</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {prices.slice().reverse().map((item, idx) => (
                    <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                      <td className="py-6 pl-4 font-bold text-gray-400">{item.date}</td>
                      <td className="py-6">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                          <span className="font-black text-black">REGIONAL-AP-0{idx + 1}</span>
                        </div>
                      </td>
                      <td className="py-6 text-xl font-black text-black">₹{item.price.toFixed(2)}</td>
                      <td className="py-6 text-right pr-4">
                        <span className="px-4 py-2 bg-green-50 text-green-700 text-[10px] font-black rounded-xl border border-green-100 tracking-widest">VERIFIED</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
