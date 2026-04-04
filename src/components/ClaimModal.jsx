import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Sparkles } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import { useState, useEffect } from 'react';

export default function ClaimModal({ isOpen, onClose, amount, reason }) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (isOpen) {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(8px)' }}
        >
          {windowSize.width > 0 && (
            <ReactConfetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={400}
              gravity={0.25}
              colors={['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#fff']}
            />
          )}

          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 60 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-sm w-full p-8 relative text-center"
            style={{
              borderTop: '4px solid #10b981',
              background: 'linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.98))',
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '4px' }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Animated check icon */}
            <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: 'rgba(16,185,129,0.2)' }}
              />
              <div
                className="absolute inset-2 rounded-full"
                style={{ background: 'rgba(16,185,129,0.15)' }}
              />
              <CheckCircle className="w-12 h-12 relative z-10" style={{ color: '#10b981' }} />
            </div>

            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Claim Processed!</h2>
            </div>
            <p className="text-slate-400 text-sm mb-6">Zero-Touch Automated Payout</p>

            <div
              className="rounded-xl p-6 mb-6"
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Amount Credited</p>
              <h3
                className="text-5xl font-black"
                style={{
                  background: 'linear-gradient(to right, #10b981, #34d399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ₹{amount}
              </h3>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-300 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Reason: <strong className="text-white">{reason}</strong></span>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
              className="w-full py-3 rounded-xl font-bold text-white"
              style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)' }}
            >
              Awesome! 🎉
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
