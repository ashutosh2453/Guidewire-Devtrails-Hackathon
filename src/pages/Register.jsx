import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({ name: 'Raju Kumar', phone: '+91 98765 43210', platformId: 'DEL-4928' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('shieldkart_name', formData.name);
    navigate('/dashboard');
  };

  const S = {
    container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
    card: { background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', width: '100%', maxWidth: '1000px', display: 'flex', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' },
    leftPanel: { flex: 1, padding: '56px 48px', position: 'relative' },
    rightPanel: { flex: 1, padding: '56px 48px', background: 'rgba(30,41,59,0.4)', borderLeft: '1px solid rgba(255,255,255,0.05)' },
    logoBox: { width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', boxShadow: '0 8px 32px rgba(59,130,246,0.4)' },
    titleMain: { fontSize: '48px', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '8px' },
    titleGradient: { background: 'linear-gradient(to right, #3b82f6, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
    subtitle: { fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '48px', maxWidth: '360px' },
    featureList: { display: 'flex', flexDirection: 'column', gap: '16px' },
    featureItem: { display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#e2e8f0' },
    statBadge: { marginTop: '56px', display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', padding: '10px 20px', borderRadius: '12px' },
    formTitle: { fontSize: '28px', fontWeight: 800, color: 'white', marginBottom: '12px' },
    formSubtitle: { fontSize: '15px', color: '#64748b', marginBottom: '40px' },
    inputGroup: { marginBottom: '24px' },
    label: { display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' },
    input: { width: '100%', padding: '14px 16px', background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', color: 'white', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'Inter, sans-serif' },
    submitBtn: { width: '100%', padding: '16px', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', transition: 'opacity 0.2s, transform 0.1s', fontFamily: 'Inter, sans-serif' },
  };

  return (
    <div style={S.container}>
      <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={S.card}>
        {/* Left Panel */}
        <div style={S.leftPanel}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }} style={S.logoBox}>
            <ShieldCheck style={{ width: '28px', height: '28px', color: 'white' }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} style={S.titleMain}>
            Income<br />
            <span style={S.titleGradient}>Intelligence.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={S.subtitle}>
            AI-powered income protection for gig workers. We predict risks 24 hrs ahead and pay you automatically.
          </motion.p>
          <div style={S.featureList}>
            {['Zero-touch automated claims', 'AI weather & demand monitoring', 'Real-time payout to your account'].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }} style={S.featureItem}>
                <CheckCircle2 style={{ width: '20px', height: '20px', color: '#10b981' }} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={S.statBadge}>
            <span style={{ color: '#10b981' }}>⚡</span>
            <span style={{ fontSize: '14px', color: '#94a3b8' }}><strong style={{ color: '#10b981' }}>3,400+ gig workers</strong> protected this week</span>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div style={S.rightPanel}>
          <h2 style={S.formTitle}>Create your Shield</h2>
          <p style={S.formSubtitle}>Takes 30 seconds. No documents needed.</p>
          
          <form onSubmit={handleRegister}>
            <div style={S.inputGroup}>
              <label style={S.label}>Full Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={S.input} onFocus={e => e.target.style.borderColor = '#3b82f6'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'} />
            </div>
            <div style={S.inputGroup}>
              <label style={S.label}>Phone Number</label>
              <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={S.input} onFocus={e => e.target.style.borderColor = '#3b82f6'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'} />
            </div>
            <div style={S.inputGroup} className="mb-10">
              <label style={S.label}>Platform ID (Zomato / Swiggy)</label>
              <input type="text" value={formData.platformId} onChange={e => setFormData({ ...formData, platformId: e.target.value })} style={{ ...S.input, marginBottom: '32px' }} onFocus={e => e.target.style.borderColor = '#3b82f6'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'} />
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" style={S.submitBtn}>
              Activate Shield <ArrowRight style={{ width: '20px', height: '20px' }} />
            </motion.button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '12px', color: '#475569' }}>
            By activating, you agree to AI assessment terms & privacy policy.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
