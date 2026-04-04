import { motion } from 'framer-motion';

export default function RiskMeter({ score, level, color }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  // Convert score (0-100) to percentage of circumference
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90 absolute inset-0">
          <circle
            cx="96" cy="96" r={radius}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="16"
            fill="transparent"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="96" cy="96" r={radius}
            stroke={color}
            strokeWidth="16"
            fill="transparent"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="text-5xl font-black"
            style={{ color }}
          >
            {score}
          </motion.span>
          <span 
            className="text-xs font-bold tracking-widest mt-1 uppercase"
            style={{ color }}
          >
            {level} Risk
          </span>
        </div>
      </div>
    </div>
  );
}
