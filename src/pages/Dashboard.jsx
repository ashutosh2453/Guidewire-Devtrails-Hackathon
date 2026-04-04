import { motion } from 'framer-motion';
import { userProfile, activityFeed } from '../data/mock';
import Card from '../components/Card';
import Chart from '../components/Chart';
import RiskMeter from '../components/RiskMeter';
import { ShieldAlert, Activity, CreditCard, ShieldCheck } from 'lucide-react';
import { getRiskLevel } from '../utils/logic';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [userName, setUserName] = useState(userProfile.name);

  useEffect(() => {
    const savedName = localStorage.getItem('shieldkart_name');
    if (savedName) setUserName(savedName);
  }, []);

  const riskResult = getRiskLevel(userProfile.riskScore);

  return (
    <div style={{ padding: '40px 40px 80px', marginLeft: '256px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '32px', fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            Welcome back, <span style={{ color: '#10b981' }}>{userName}</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span style={{ color: '#64748b', fontSize: '15px' }}>Status:</span>
            <span style={{ color: '#10b981', fontWeight: 600, fontSize: '15px' }}>Protected ✅</span>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          style={{ padding: '10px 20px', borderRadius: '12px', background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Activity style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
          <span style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: 500 }}>Live Area: Kormangala Zone</span>
        </motion.div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr) minmax(0, 1fr)', gap: '24px', marginBottom: '24px' }}>
        {/* Risk Score Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ gridRow: 'span 2', background: 'rgba(30,41,59,0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        >
          <div style={{ position: 'absolute', top: '24px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>Current AI Risk Score</span>
            <ShieldAlert style={{ width: '18px', height: '18px', color: riskResult.color }} />
          </div>
          <RiskMeter score={userProfile.riskScore} level={riskResult.level} color={riskResult.color} />
        </motion.div>

        {/* Small Cards */}
        <Card title="Weekly Premium" value={userProfile.weeklyPremium} icon={CreditCard} delay={0.4} color="secondary" />
        <Card title="Earnings Protected" value={userProfile.earningsProtected} icon={ShieldCheck} delay={0.5} color="accent" />
        <Card title="Claims Processed" value={userProfile.claimsProcessed} icon={Activity} delay={0.6} className="col-span-1" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '24px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Chart />
        </motion.div>

        {/* Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          style={{ background: 'rgba(30,41,59,0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px', height: '320px', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'white' }}>AI Activity Feed</h3>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }} />
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {activityFeed.map((item, i) => (
              <div key={item.id} style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
                  <div style={{ 
                    width: '8px', height: '8px', borderRadius: '50%', 
                    background: item.type === 'success' ? '#10b981' : item.type === 'info' ? '#3b82f6' : '#94a3b8' 
                  }} />
                  {i !== activityFeed.length - 1 && (
                    <div style={{ width: '2px', height: '100%', background: '#334155', marginTop: '4px' }} />
                  )}
                </div>
                <div>
                  <p style={{ color: '#f1f5f9', fontSize: '14px', lineHeight: 1.5 }}>{item.text}</p>
                  <p style={{ color: '#64748b', fontSize: '12px', marginTop: '4px' }}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
