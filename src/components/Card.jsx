import { motion } from 'framer-motion';

const colorStyles = {
  primary: { bg: 'rgba(59,130,246,0.15)', icon: '#3b82f6', glow: 'rgba(59,130,246,0.2)' },
  secondary: { bg: 'rgba(139,92,246,0.15)', icon: '#8b5cf6', glow: 'rgba(139,92,246,0.2)' },
  accent: { bg: 'rgba(16,185,129,0.15)', icon: '#10b981', glow: 'rgba(16,185,129,0.2)' },
  red: { bg: 'rgba(239,68,68,0.15)', icon: '#ef4444', glow: 'rgba(239,68,68,0.2)' },
};

export default function Card({ title, value, icon: Icon, delay = 0, color = "primary" }) {
  const styles = colorStyles[color] || colorStyles.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.03, translateY: -5 }}
      className="glass-card p-6 relative overflow-hidden group cursor-default"
    >
      <div
        className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150"
        style={{ background: `radial-gradient(circle, ${styles.glow}, transparent)` }}
      />
      
      <div className="flex items-center gap-4 relative z-10">
        <div
          className="p-3 rounded-xl"
          style={{ background: styles.bg }}
        >
          <Icon className="w-6 h-6" style={{ color: styles.icon }} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 }}
            className="text-2xl font-bold mt-1 text-white"
          >
            {value}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
}
