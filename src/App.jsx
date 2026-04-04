import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Policy from './pages/Policy';
import Claims from './pages/Claims';
import Prediction from './pages/Prediction';
import { CheckCircle2, X } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 },
};

const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.35 };

function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.9 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'rgba(15,23,42,0.95)',
        border: '1px solid rgba(16,185,129,0.3)',
        backdropFilter: 'blur(20px)',
        color: 'white', padding: '14px 18px',
        borderRadius: '14px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        maxWidth: '360px', minWidth: '280px',
      }}
    >
      <CheckCircle2 style={{ width: '18px', height: '18px', color: '#10b981', flexShrink: 0 }} />
      <p style={{ fontSize: '13px', flex: 1, lineHeight: 1.5 }}>{message}</p>
      <button onClick={onClose}
        style={{ background: 'rgba(255,255,255,0.07)', border: 'none', borderRadius: '50%', padding: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <X style={{ width: '14px', height: '14px', color: '#94a3b8' }} />
      </button>
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const [toasts, setToasts] = useState([]);

  const addToast = (msg) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg }]);
  };
  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));

  useEffect(() => {
    const messages = [
      '🌧️ Rain event detected → ₹350 credited to your wallet',
      '✅ Low-risk zone → 5% weekly premium discount applied',
      '🤖 AI updated your risk profile based on new route data',
    ];
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < messages.length) {
          addToast(messages[i++]);
        } else {
          clearInterval(interval);
        }
      }, 6000);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const showNav = location.pathname !== '/';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {showNav && <Navbar />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          style={{ minHeight: '100vh' }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* Toast Notifications */}
      <div style={{
        position: 'fixed', bottom: '28px', right: '28px',
        zIndex: 200, display: 'flex', flexDirection: 'column', gap: '12px',
      }}>
        <AnimatePresence>
          {toasts.map(t => (
            <Toast key={t.id} message={t.msg} onClose={() => removeToast(t.id)} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
