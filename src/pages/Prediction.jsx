import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Lightbulb, CloudRain, ThermometerSun, PackageX, BarChart2 } from 'lucide-react';
import { getRiskLevel } from '../utils/logic';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const riskFactors = [
  { label: 'Rain Probability', value: 78, icon: CloudRain, color: '#3b82f6' },
  { label: 'Heat Index Risk', value: 42, icon: ThermometerSun, color: '#f59e0b' },
  { label: 'Order Demand Drop', value: 61, icon: PackageX, color: '#8b5cf6' },
];

const recommendations = [
  { icon: TrendingUp, title: 'Work Extra Today', desc: 'Tomorrow forecast is risky. Maximize earnings today while conditions are safe.', color: '#3b82f6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
  { icon: AlertTriangle, title: 'Switch to Zone B', desc: 'Zone A has heavy rain predicted. Zone B has 40% lower risk tomorrow.', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  { icon: Lightbulb, title: 'Activate Premium Shield', desc: 'Upgrading today will cover ₹700+ potential loss tomorrow.', color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
];

export default function Prediction() {
  const tomorrowRisk = 74;
  const { level, color } = getRiskLevel(tomorrowRisk);
  const gaugeData = [{ name: 'risk', value: tomorrowRisk, fill: color }];

  return (
    <div style={{ padding: '40px 40px 80px', marginLeft: '256px' }}>
      {/* Header */}
      <motion.h1 initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '30px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
        AI Risk{' '}
        <span style={{
          background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>Prediction Engine</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        style={{ color: '#64748b', fontSize: '14px', marginBottom: '36px' }}>
        Forecasting tomorrow's risk using live weather, demand signals & 90-day historical patterns.
      </motion.p>

      {/* Hero Risk Banner */}
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}
        style={{
          background: 'rgba(30,41,59,0.5)', backdropFilter: 'blur(20px)',
          border: `1px solid rgba(255,255,255,0.08)`,
          borderLeft: `4px solid ${color}`,
          borderRadius: '20px', padding: '36px',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '36px',
          marginBottom: '28px',
        }}>
        {/* Radial Gauge */}
        <div style={{ position: 'relative', width: '200px', height: '200px', flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%"
              data={gaugeData} startAngle={210} endAngle={-30}>
              <RadialBar dataKey="value" cornerRadius={10} background={{ fill: '#1e293b' }} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '44px', fontWeight: 900, color, lineHeight: 1 }}>{tomorrowRisk}%</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '6px' }}>{level} Risk</span>
          </div>
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <AlertTriangle style={{ width: '32px', height: '32px', color, flexShrink: 0 }} />
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              Tomorrow's Risk:{' '}
              <span style={{ color }}>{level.toUpperCase()} ⚠️</span>
            </h2>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
            AI engine has detected a{' '}
            <strong style={{ color }}>{tomorrowRisk}% probability</strong> of income disruption tomorrow.
            Expected loss without coverage:{' '}
            <strong style={{ color: '#ef4444' }}>₹620–₹850</strong>.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { label: '🌧️ Rain 80%', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.3)', color: '#93c5fd' },
              { label: '📦 Low demand', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', color: '#fcd34d' },
              { label: '🕐 Short peak hours', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)', color: '#c4b5fd' },
            ].map(tag => (
              <span key={tag.label} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, background: tag.bg, border: `1px solid ${tag.border}`, color: tag.color }}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Risk Factor Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        {riskFactors.map((factor, idx) => {
          const Icon = factor.icon;
          return (
            <motion.div key={factor.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + idx * 0.1 }}
              style={{ background: 'rgba(30,41,59,0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '8px', borderRadius: '10px', background: `${factor.color}20` }}>
                  <Icon style={{ width: '20px', height: '20px', color: factor.color }} />
                </div>
                <span style={{ fontWeight: 600, color: '#cbd5e1', fontSize: '14px' }}>{factor.label}</span>
              </div>
              <div style={{ fontSize: '36px', fontWeight: 900, color: factor.color, marginBottom: '12px' }}>{factor.value}%</div>
              <div style={{ height: '6px', background: '#1e293b', borderRadius: '9999px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }} animate={{ width: `${factor.value}%` }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 1, ease: 'easeOut' }}
                  style={{ height: '100%', borderRadius: '9999px', background: factor.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI Recommendations */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        style={{ background: 'rgba(30,41,59,0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BarChart2 style={{ width: '20px', height: '20px', color: '#f59e0b' }} />
          AI Recommendations for Tomorrow
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {recommendations.map((rec, idx) => {
            const Icon = rec.icon;
            return (
              <motion.div key={rec.title}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.03, translateY: -4 }}
                style={{ padding: '24px', borderRadius: '14px', border: `1px solid ${rec.border}`, background: rec.bg, cursor: 'pointer', transition: 'border-color 0.2s' }}>
                <Icon style={{ width: '28px', height: '28px', color: rec.color, marginBottom: '14px' }} />
                <h4 style={{ fontWeight: 700, color: 'white', fontSize: '15px', marginBottom: '10px' }}>{rec.title}</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{rec.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
