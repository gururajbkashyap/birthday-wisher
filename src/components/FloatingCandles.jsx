import { useMemo } from "react";

const CANDLE_SVG = (
  <svg viewBox="0 0 24 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <radialGradient id="flame" cx="50%" cy="60%" r="50%">
        <stop offset="0%" stopColor="#fffbe6" />
        <stop offset="40%" stopColor="#f0d060" />
        <stop offset="100%" stopColor="#d4690020" />
      </radialGradient>
    </defs>
    {/* outer flame */}
    <path d="M12,2 C17,8 17,17 12,20 C7,17 7,8 12,2Z" fill="url(#flame)" opacity="0.9" />
    {/* inner core */}
    <ellipse cx="12" cy="15" rx="3" ry="4" fill="#fff" opacity="0.6" />
    {/* body */}
    <rect x="9" y="20" width="6" height="22" rx="1.5" fill="#f5f5dc" />
    {/* base drip */}
    <ellipse cx="12" cy="42" rx="6" ry="2.5" fill="#ece8d8" opacity="0.7" />
    {/* wick */}
    <line x1="12" y1="19" x2="12" y2="22" stroke="#333" strokeWidth="1" />
  </svg>
);

export default function FloatingCandles() {
  const candles = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${5 + i * 9.5}%`,
      size: 18 + (i % 3) * 6,
      duration: 8 + (i % 4) * 2.5,
      delay: -(i * 1.3),
      swayAmount: 8 + (i % 3) * 5,
      swayDuration: 2 + (i % 3) * 0.8,
    }));
  }, []);

  return (
    <>
      <style>{`
        @keyframes candleRise {
          0%   { transform: translateY(0)   opacity: 1; }
          85%  { opacity: 0.7; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
        @keyframes candleSway {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(var(--sway)); }
        }
        .candle-outer {
          position: fixed;
          bottom: -70px;
          pointer-events: none;
          animation: candleRise linear infinite;
        }
        .candle-inner {
          animation: candleSway ease-in-out infinite;
        }
      `}</style>
      {candles.map((c) => (
        <div
          key={c.id}
          className="candle-outer"
          style={{
            left: c.left,
            width: `${c.size}px`,
            height: `${c.size * 2}px`,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            zIndex: 0,
          }}
        >
          <div
            className="candle-inner"
            style={{
              "--sway": `${c.swayAmount}px`,
              animationDuration: `${c.swayDuration}s`,
              animationDelay: `${c.delay * 0.5}s`,
              width: "100%",
              height: "100%",
            }}
          >
            {CANDLE_SVG}
          </div>
        </div>
      ))}
    </>
  );
}
