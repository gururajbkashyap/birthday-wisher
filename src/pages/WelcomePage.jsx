import { motion } from "framer-motion";
import NavButton from "../components/NavButton";

const SHOOTING_STARS = [
  { top: "10%", left: "5%", delay: "0s" },
  { top: "30%", left: "40%", delay: "1.2s" },
  { top: "60%", left: "70%", delay: "2.4s" },
  { top: "80%", left: "20%", delay: "0.8s" },
];

export default function WelcomePage({ onNext }) {
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
        overflow: "hidden",
      }}
    >
      {SHOOTING_STARS.map((s, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: "center", padding: "0 24px" }}
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1rem, 3vw, 1.6rem)",
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "rgba(212,175,55,0.7)",
            marginBottom: "12px",
          }}
        >
          ✦ A Magical Celebration ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
          className="glow-gold pulse"
          style={{
            fontFamily: "'Cinzel Decorative', cursive",
            fontSize: "clamp(2.8rem, 10vw, 7rem)",
            lineHeight: 1.1,
            fontWeight: 900,
          }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, type: "spring", bounce: 0.3 }}
          style={{
            fontFamily: "'Cinzel Decorative', cursive",
            fontSize: "clamp(2rem, 8vw, 5rem)",
            color: "#ff6b6b",
            textShadow: "0 0 12px #ae0001, 0 0 40px rgba(174,0,1,0.6)",
            marginTop: "4px",
          }}
        >
          Ananya Keshav ⚡
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            fontFamily: "'IM Fell English', serif",
            color: "rgba(212,175,55,0.55)",
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            marginTop: "20px",
            fontStyle: "italic",
            letterSpacing: "1px",
          }}
        >
          "Happiness can be found even in the darkest of times,<br />
          if one only remembers to turn on the light."
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{ position: "absolute", bottom: "48px" }}
      >
        <NavButton onClick={onNext}>Next →</NavButton>
      </motion.div>
    </div>
  );
}
