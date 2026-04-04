import { motion } from 'framer-motion';
import { CloudRain, ThermometerSun, AlertCircle } from 'lucide-react';

const triggers = [
  { id: 'rain', label: 'Heavy Rain Warning', desc: 'Precipitation > 15mm/hr', icon: CloudRain, color: '#3b82f6' },
  { id: 'heat', label: 'Extreme Heatwave', desc: 'Temperature > 40°C', icon: ThermometerSun, color: '#f59e0b' },
  { id: 'lowOrders', label: 'Low Demand Drop', desc: 'Order volume -40%', icon: AlertCircle, color: '#8b5cf6' },
];

export default function SimulationPanel({ simState, setSimState }) {
  const toggle = (id) => {
    setSimState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="glass-card p-6" style={{ borderLeft: '4px solid #8b5cf6' }}>
      <h3 className="text-xl font-bold text-white mb-2">Live AI Simulation</h3>
      <p className="text-sm text-slate-400 mb-6">Toggle specific real-world risk triggers to see how the AI predicts income loss and automatically processes claims.</p>
      
      <div className="flex flex-col gap-4">
        {triggers.map(({ id, label, desc, icon: Icon, color }) => {
          const isActive = simState[id];

          return (
            <motion.div 
              key={id}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggle(id)}
              className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors duration-300"
              style={{
                background: isActive ? `${color}15` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${isActive ? `${color}50` : 'rgba(255,255,255,0.05)'}`
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="p-3 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: isActive ? color : 'rgba(255,255,255,0.05)' }}
                >
                  <Icon className="w-5 h-5 transition-colors" style={{ color: isActive ? '#fff' : color }} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">{label}</h4>
                  <p className="text-xs text-slate-400">{desc}</p>
                </div>
              </div>

              {/* Animated Toggle Switch */}
              <div 
                className="w-12 h-6 rounded-full relative flex items-center p-1 transition-colors duration-300"
                style={{ background: isActive ? color : '#334155' }}
              >
                <motion.div 
                  layout
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ x: isActive ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
