export const userProfile = {
  name: "Raju",
  status: "Protected",
  weeklyPremium: "₹149",
  earningsProtected: "₹8,450",
  claimsProcessed: "3",
  riskScore: 32, // out of 100
};

export const chartData = [
  { day: "Mon", earnings: 1200, protected: 1200 },
  { day: "Tue", earnings: 900, protected: 1100 },
  { day: "Wed", earnings: 1500, protected: 1500 },
  { day: "Thu", earnings: 800, protected: 1200 }, // Rain out
  { day: "Fri", earnings: 1600, protected: 1600 },
  { day: "Sat", earnings: 2100, protected: 2100 },
  { day: "Sun", earnings: 1300, protected: 1300 },
];

export const activityFeed = [
  { id: 1, text: "Rain detected → ₹350 credited", time: "2 hrs ago", type: "success" },
  { id: 2, text: "Low risk zone → weekly discount applied", time: "Yesterday", type: "info" },
  { id: 3, text: "Temperature peaked > 40°C → ₹150 fatigue bonus", time: "3 days ago", type: "success" },
  { id: 4, text: "Policy renewed for next week", time: "5 days ago", type: "neutral" },
];

export const policies = [
  { id: 'basic', name: 'Basic Shield', price: '₹49/wk', features: ['Rain cover up to ₹200/day', 'Basic accident coverage'], recommended: false },
  { id: 'standard', name: 'Standard Shield', price: '₹99/wk', features: ['Weather cover up to ₹500/day', 'Accident + Medical', 'Low order volume protection'], recommended: true },
  { id: 'premium', name: 'Premium Shield', price: '₹149/wk', features: ['Full income replacement', 'Zero deductible', 'Premium health cover', 'Free EV charging points'], recommended: false },
];
