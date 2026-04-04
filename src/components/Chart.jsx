import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '../data/mock';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '12px 16px',
        borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      }}>
        <p style={{ color: 'white', fontWeight: 700, marginBottom: '8px' }}>{label}</p>
        <p style={{ color: '#3b82f6', fontSize: '13px', display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
          <span>Earnings:</span>
          <span style={{ fontFamily: 'monospace' }}>₹{payload[0]?.value}</span>
        </p>
        <p style={{ color: '#10b981', fontSize: '13px', display: 'flex', justifyContent: 'space-between', gap: '16px', marginTop: '4px' }}>
          <span>Protected:</span>
          <span style={{ fontFamily: 'monospace' }}>₹{payload[1]?.value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function Chart() {
  return (
    <div className="glass-card p-6" style={{ height: '320px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'white' }}>Earnings vs Protected Income</h3>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6' }} /> Earnings
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} /> Protected
          </div>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProtected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="day" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="earnings" stroke="#3b82f6" strokeWidth={2.5} fillOpacity={1} fill="url(#colorEarnings)" dot={false} />
            <Area type="monotone" dataKey="protected" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorProtected)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
