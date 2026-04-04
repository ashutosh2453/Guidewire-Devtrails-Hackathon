export const calculateRiskScore = (simState) => {
  let score = 20; // base risk
  if (simState.rain) score += 40;
  if (simState.heat) score += 20;
  if (simState.lowOrders) score += 15;
  return Math.min(score, 100);
};

export const getRiskLevel = (score) => {
  if (score < 40) return { level: 'Low', color: '#10b981' }; // green
  if (score < 70) return { level: 'Medium', color: '#f59e0b' }; // yellow
  return { level: 'High', color: '#ef4444' }; // red
};

export const processClaim = (simState) => {
  let payout = 0;
  let reason = [];
  if (simState.rain) { payout += 350; reason.push('Rain detected'); }
  if (simState.heat) { payout += 150; reason.push('High Temperature'); }
  if (simState.lowOrders) { payout += 200; reason.push('Low order volume'); }
  
  if (payout > 0) {
    return { success: true, amount: payout, reason: reason.join(' & ') };
  }
  return { success: false, amount: 0, reason: '' };
};
