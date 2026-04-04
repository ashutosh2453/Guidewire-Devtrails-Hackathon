import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SimulationPanel from '../components/SimulationPanel';
import ClaimModal from '../components/ClaimModal';
import { processClaim } from '../utils/logic';
import { CheckCircle2, Clock, MapPin, Search, Zap } from 'lucide-react';

export default function Claims() {
  const [simState, setSimState] = useState({ rain: false, heat: false, lowOrders: false });
  const [claimData, setClaimData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [prevSim, setPrevSim] = useState({ rain: false, heat: false, lowOrders: false });
  const [history, setHistory] = useState([
    { id: 1, date: 'Today, 2:30 PM', amount: 350, type: 'Heavy Rain', status: 'Credited' },
    { id: 2, date: '12 Oct, 4:00 PM', amount: 150, type: 'Extreme Heat', status: 'Credited' },
    { id: 3, date: '10 Oct, 6:15 PM', amount: 200, type: 'Low Order Volume', status: 'Credited' },
  ]);

  useEffect(() => {
    const result = processClaim(simState);
    const prevResult = processClaim(prevSim);
    // Only trigger modal when a new trigger is turned ON
    if (result.success && result.amount > prevResult.amount) {
      setClaimData(result);
      setShowModal(true);
      setHistory(prev => [{
        id: Date.now(), date: 'Just Now',
        amount: result.amount - prevResult.amount,
        type: result.reason, status: 'Credited',
      }, ...prev]);
    }
    setPrevSim(simState);
  }, [simState]);

  const timeline = [
    { color: '#3b82f6', label: 'Trigger Detected', desc: 'Weather API & partner data confirm risk trigger instantly.' },
    { color: '#8b5cf6', label: 'Automated Verification', desc: 'Smart algorithm checks policy validity and coverage limits.' },
    { color: '#10b981', label: 'Instant Wallet Payout', desc: 'Funds credited with zero paperwork or agent involvement.', pulse: true },
  ];

  return (
    <div style={{ padding: '40px 40px 80px', marginLeft: '256px' }}>
      <motion.h1 initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '30px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
        Zero-Touch{' '}
        <span style={{
          background: 'linear-gradient(to right, #3b82f6, #10b981)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>Claims Engine</span>
      </motion.h1>
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '36px' }}>Trigger a simulation event below to see automated claim processing in real time.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
        {/* Simulation Panel */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <SimulationPanel simState={simState} setSimState={setSimState} />
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          style={{ background: 'rgba(30,41,59,0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'white', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Zap style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
            Claim Processing Timeline
          </h3>
          <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px solid #1e293b' }}>
            {timeline.map((step, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.15 }}
                style={{ position: 'relative', marginBottom: idx < timeline.length - 1 ? '28px' : 0 }}>
                <div style={{
                  position: 'absolute', left: '-33px', top: '2px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: step.color,
                  border: '3px solid #0f172a',
                  boxShadow: step.pulse ? `0 0 12px ${step.color}` : 'none',
                  animation: step.pulse ? 'pulse 2s infinite' : 'none',
                }} />
                <p style={{ fontWeight: 600, color: 'white', fontSize: '14px', marginBottom: '6px' }}>{step.label}</p>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* History Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        style={{ background: 'rgba(30,41,59,0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'white' }}>Recent Payouts</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '8px 14px' }}>
            <Search style={{ width: '16px', height: '16px', color: '#475569' }} />
            <input type="text" placeholder="Search payouts..." style={{ background: 'transparent', border: 'none', outline: 'none', color: '#e2e8f0', fontSize: '13px', width: '140px', fontFamily: 'Inter, sans-serif' }} />
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Date & Time', 'Trigger Event', 'Amount Paid', 'Status'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {history.map((claim, idx) => (
                <motion.tr key={claim.id}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + idx * 0.07 }}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.2s', cursor: 'default' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8' }}>
                      <Clock style={{ width: '14px', height: '14px', color: '#475569' }} />
                      {claim.date}
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8' }}>
                      <MapPin style={{ width: '14px', height: '14px', color: '#475569' }} />
                      {claim.type}
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontFamily: 'monospace', fontWeight: 800, fontSize: '15px', color: '#10b981' }}>₹{claim.amount}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                      <CheckCircle2 style={{ width: '12px', height: '12px' }} /> {claim.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <ClaimModal isOpen={showModal} onClose={() => setShowModal(false)} amount={claimData?.amount || 0} reason={claimData?.reason || ''} />
    </div>
  );
}
