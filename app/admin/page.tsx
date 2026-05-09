"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Lock, TrendingUp, History, Plus, Filter, LogOut } from "lucide-react";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [prices, setPrices] = useState<any[]>([]);
  const [newPrice, setNewPrice] = useState("");
  const [filterDays, setFilterDays] = useState(30);

  useEffect(() => {
    fetch("/data/prices.json")
      .then(res => res.json())
      .then(data => setPrices(data));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (id === "1234" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleUpdatePrice = (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    const updatedPrices = [...prices, { date: today, price: parseFloat(newPrice) }];
    setPrices(updatedPrices);
    setNewPrice("");
    alert("Price Updated! (In a real deployment, this would save to a database)");
  };

  const filteredData = prices.slice(-filterDays);

  if (!isLoggedIn) {
    return (
      <div className="min-height-[80vh] flex items-center justify-center p-6 bg-gray-50">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="flex flex-col items-center mb-8">
            <div className="p-4 bg-[#FFD700] rounded-2xl mb-4">
              <Lock className="text-black" size={32} />
            </div>
            <h1 className="text-2xl font-bold">Admin Reception</h1>
            <p className="text-gray-400 text-sm">Access the HKGN Pricing Engine</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">Admin ID</label>
              <input 
                type="text" 
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FFD700] transition-all"
                placeholder="Enter ID"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FFD700] transition-all"
                placeholder="••••"
              />
            </div>
            <button type="submit" className="w-full bg-black text-white p-4 rounded-xl font-bold hover:bg-[#ccac00] hover:text-black transition-all">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Pricing Control</h1>
          <p className="text-gray-500">Manage daily wholesale rates for HKGN Egg Mart</p>
        </div>
        <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-all">
          <LogOut size={20} /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Update Price Card */}
        <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Plus className="text-[#ccac00]" />
            <h2 className="text-xl font-bold">Update Today's Rate</h2>
          </div>
          <form onSubmit={handleUpdatePrice} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 block mb-2">Price per Egg (INR)</label>
              <input 
                type="number" 
                step="0.01"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl text-2xl font-bold outline-none focus:border-[#FFD700]"
                placeholder="0.00"
              />
            </div>
            <button className="w-full bg-[#FFD700] p-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
              Update Live Price
            </button>
          </form>
        </div>

        {/* Analytics Card */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-[#ccac00]" />
              <h2 className="text-xl font-bold">Price Analysis</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setFilterDays(5)} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filterDays === 5 ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>5 Days</button>
              <button onClick={() => setFilterDays(30)} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filterDays === 30 ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>30 Days</button>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFD700" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#aaa'}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
                  labelStyle={{fontWeight: 'bold'}}
                />
                <Area type="monotone" dataKey="price" stroke="#ccac00" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* History Table */}
        <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <History className="text-[#ccac00]" />
            <h2 className="text-xl font-bold">History (Last 30 Days)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-50 text-gray-400 text-xs font-bold uppercase">
                  <th className="pb-4">Date</th>
                  <th className="pb-4 text-right">Price (INR)</th>
                  <th className="pb-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {prices.slice().reverse().map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-4 font-medium">{item.date}</td>
                    <td className="py-4 text-right font-bold">₹{item.price.toFixed(2)}</td>
                    <td className="py-4 text-right">
                      <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-md">LIVE</span>
                    </td>
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
