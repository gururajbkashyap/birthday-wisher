import { motion } from "framer-motion";
import NavButton from "../components/NavButton";

const WISHES = [
  { icon: "🌟", text: "Adventures you never expected" },
  { icon: "🍽️", text: "Tables full of good food & good company" },
  { icon: "💛", text: "Friendships that only grow stronger" },
  { icon: "✨", text: "Moments that take your breath away" },
  { icon: "🎂", text: "Every dream inching closer to reality" },
  { icon: "🔮", text: "A year as magical as you are" },
];

export default function ProphecyPage({ onNext, onBack }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        gap: "clamp(10px, 2vh, 18px)",
        padding: "clamp(14px, 3vh, 28px) clamp(14px, 3vw, 28px)",
        boxSizing: "border-box",
      }}
    >
      {/* Chapter label */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "rgba(212,175,55,0.5)",
          margin: 0,
        }}
      >
        ✦ Chapter Two ✦
      </motion.p>

      {/* Orb */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", bounce: 0.5, duration: 0.8 }}
        style={{
          fontSize: "clamp(2.8rem, 8vw, 5rem)",
          lineHeight: 1,
          filter: "drop-shadow(0 0 18px rgba(123,94,167,0.9)) drop-shadow(0 0 36px rgba(123,94,167,0.5))",
          animation: "orbPulse 3s ease-in-out infinite",
        }}
      >
        🔮
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="glow-gold"
        style={{
          fontFamily: "'Cinzel Decorative', cursive",
          fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)",
          textAlign: "center",
          margin: 0,
        }}
      >
        The Prophecy
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
          color: "rgba(212,175,55,0.65)",
          fontStyle: "italic",
          textAlign: "center",
          margin: 0,
        }}
      >
        This year shall bring you...
      </motion.p>

      {/* Wishes card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="glass-card"
        style={{
          width: "min(520px, 92vw)",
          padding: "clamp(16px, 3vh, 28px) clamp(20px, 4vw, 36px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(8px, 1.5vh, 14px)",
          borderColor: "rgba(123,94,167,0.3)",
        }}
      >
        {WISHES.map((wish, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 + i * 0.12, duration: 0.45 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 2vw, 14px)",
            }}
          >
            <span style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", flexShrink: 0 }}>
              {wish.icon}
            </span>
            <span
              style={{
                fontFamily: "'IM Fell English', serif",
                fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                color: "rgba(255,249,230,0.88)",
                lineHeight: 1.4,
              }}
            >
              {wish.text}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Nav */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}
      >
        <NavButton onClick={onBack} variant="back">← Back</NavButton>
        <NavButton onClick={onNext}>Next →</NavButton>
      </motion.div>
    </div>
  );
}
