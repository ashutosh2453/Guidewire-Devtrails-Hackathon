import { useState } from 'react';
import { motion } from 'framer-motion';
import { policies } from '../data/mock';
import PlanCard from '../components/PlanCard';
import { Tag } from 'lucide-react';

export default function Policy() {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div style={{ padding: '40px 40px 80px', marginLeft: '256px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '36px', fontWeight: 900, color: 'white', marginBottom: '16px' }}>
          Dynamic AI{' '}
          <span style={{
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Protection Plans
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ color: '#64748b', fontSize: '16px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Prices auto-adjust based on your historical data and area risk score. Choose the shield that fits your daily route.
        </motion.p>

        {/* Toggle */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '12px 24px', background: 'rgba(30,41,59,0.5)', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ fontSize: '14px', color: !isAnnual ? 'white' : '#64748b', fontWeight: !isAnnual ? 700 : 400, transition: 'all 0.2s' }}>Weekly</span>
          <button onClick={() => setIsAnnual(!isAnnual)}
            style={{ width: '52px', height: '28px', borderRadius: '14px', border: 'none', cursor: 'pointer', position: 'relative', background: isAnnual ? '#3b82f6' : '#334155', padding: '3px', display: 'flex', alignItems: 'center', transition: 'background 0.3s' }}>
            <motion.div layout animate={{ x: isAnnual ? 24 : 0 }}
              style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'white', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }} />
          </button>
          <span style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: isAnnual ? 'white' : '#64748b', fontWeight: isAnnual ? 700 : 400 }}>
            Monthly
            <span style={{ background: 'rgba(16,185,129,0.2)', color: '#10b981', fontSize: '11px', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>Save 20%</span>
          </span>
        </motion.div>
      </div>

      {/* Plan Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
        {policies.map((plan, idx) => (
          <PlanCard key={plan.id} plan={plan} isSelected={selectedPlan === plan.id}
            onClick={(p) => setSelectedPlan(p.id)} delay={0.3 + idx * 0.1} />
        ))}
      </div>

      {/* Bonus Banner */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        style={{
          marginTop: '48px', padding: '24px 32px', borderRadius: '16px',
          background: 'rgba(16,185,129,0.08)',
          border: '1px solid rgba(16,185,129,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Tag style={{ width: '24px', height: '24px', color: '#10b981' }} />
          <div>
            <h4 style={{ color: '#10b981', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Safe Rider Bonus Active!</h4>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>You maintained a low-risk profile last week. Enjoy 10% off your next renewal.</p>
          </div>
        </div>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{ padding: '10px 24px', background: '#10b981', color: '#0f172a', fontWeight: 700, fontSize: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'Inter, sans-serif' }}>
          Claim Discount
        </motion.button>
      </motion.div>
    </div>
  );
}
