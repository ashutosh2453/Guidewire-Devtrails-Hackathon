import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, LayoutDashboard, FileText, BadgeDollarSign, TrendingUp, UserPlus } from 'lucide-react';

const navItems = [
  { name: 'Register', path: '/', icon: UserPlus },
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Policy', path: '/policy', icon: FileText },
  { name: 'Claims', path: '/claims', icon: BadgeDollarSign },
  { name: 'Prediction', path: '/prediction', icon: TrendingUp },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '256px',
        background: 'rgba(15,23,42,0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRight: '1px solid rgba(255,255,255,0.08)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
        <div
          style={{
            padding: '10px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            boxShadow: '0 8px 24px rgba(59,130,246,0.3)',
          }}
        >
          <ShieldAlert style={{ width: '22px', height: '22px', color: 'white' }} />
        </div>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 800, color: 'white', lineHeight: 1 }}>ShieldKart</h1>
          <p style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>AI Protection</p>
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.name} to={item.path} style={{ textDecoration: 'none', position: 'relative' }}>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(59,130,246,0.15)',
                    borderRadius: '12px',
                    border: '1px solid rgba(59,130,246,0.3)',
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  color: isActive ? '#3b82f6' : '#94a3b8',
                  transition: 'color 0.2s, background 0.2s',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <Icon style={{ width: '18px', height: '18px' }} />
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Live status footer */}
      <div
        style={{
          padding: '16px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div
            style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#10b981',
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 6px #10b981',
            }}
          />
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#e2e8f0' }}>AI Engine Live</span>
        </div>
        <p style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.5' }}>
          Monitoring weather, demand & risk signals in real-time.
        </p>
      </div>
    </motion.div>
  );
}
