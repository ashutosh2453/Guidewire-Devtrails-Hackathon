import { motion } from 'framer-motion';
import { CheckCircle2, Shield } from 'lucide-react';

export default function PlanCard({ plan, isSelected, onClick, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.04, translateY: -8 }}
      onClick={() => onClick(plan)}
      className="glass-card p-6 relative overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        outline: isSelected ? '2px solid #3b82f6' : '2px solid transparent',
        background: isSelected ? 'rgba(59,130,246,0.08)' : undefined,
      }}
    >
      {plan.recommended && (
        <div
          className="absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-xl z-10"
          style={{
            background: 'linear-gradient(to right, #10b981, #34d399)',
            color: '#0f172a',
          }}
        >
          ★ Recommended
        </div>
      )}

      {isSelected && (
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.05), transparent)',
            border: '1px solid rgba(59,130,246,0.3)',
            pointerEvents: 'none',
          }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="p-2 rounded-lg"
            style={{ background: plan.recommended ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)' }}
          >
            <Shield
              className="w-6 h-6"
              style={{ color: plan.recommended ? '#10b981' : '#94a3b8' }}
            />
          </div>
          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        </div>

        <div className="mb-6">
          <span
            className="text-3xl font-extrabold"
            style={{
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {plan.price}
          </span>
        </div>

        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2 + idx * 0.1 }}
              className="flex items-start gap-2 text-sm text-slate-300"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#3b82f6' }} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-6 w-full py-2.5 rounded-xl text-center text-sm font-semibold transition-all"
          style={{
            background: isSelected
              ? 'linear-gradient(to right, #3b82f6, #8b5cf6)'
              : 'rgba(255,255,255,0.05)',
            color: isSelected ? '#fff' : '#94a3b8',
          }}
          whileHover={{ opacity: 0.9 }}
        >
          {isSelected ? '✓ Selected Plan' : 'Select Plan'}
        </motion.div>
      </div>
    </motion.div>
  );
}
