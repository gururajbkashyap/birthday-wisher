import { motion } from "framer-motion";
import NavButton from "../components/NavButton";

export default function PhotoPage({ onNext, onBack }) {
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
        gap: "clamp(10px, 2vh, 20px)",
        padding: "clamp(14px, 3vh, 24px)",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(0.8rem, 2vw, 1rem)",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "rgba(212,175,55,0.5)",
        }}
      >
        ✦ Chapter One ✦
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glow-gold"
        style={{
          fontFamily: "'Cinzel Decorative', cursive",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          textAlign: "center",
        }}
      >
        Happy Birthday, my good friend! 🎂
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.35, delay: 0.2 }}
        className="polaroid"
        style={{
          width: "min(300px, 78vw)",
          height: "min(320px, 82vw)",
        }}
      >
        <img
          src="/photos/together.jpg"
          alt="Us together"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.innerHTML =
              '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#d4af37;text-align:center;font-size:0.9rem;padding:16px;font-family:Cinzel,serif">📸 Drop your photo as<br/><code style="color:#f0d060">public/photos/together.jpg</code></div>';
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          fontFamily: "'IM Fell English', serif",
          color: "rgba(212,175,55,0.6)",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Wishing you all the magic in the world ✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}
      >
        <NavButton onClick={onBack} variant="back">← Back</NavButton>
        <NavButton onClick={onNext}>Next →</NavButton>
      </motion.div>
    </div>
  );
}
