import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import NavButton from "../components/NavButton";

function SparkleTrail() {
  useEffect(() => {
    const colors = ["#d4af37", "#f0d060", "#ae0001", "#fff9e6", "#ae9153"];

    const onMove = (e) => {
      const el = document.createElement("div");
      el.className = "sparkle";
      const size = Math.random() * 10 + 4;
      el.style.cssText = `
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 600);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}

export default function TreatPage({ onRestart }) {
  const fireConfetti = useCallback(() => {
    const burst = (ratio, opts) =>
      confetti({
        origin: { y: 0.6 },
        particleCount: Math.floor(200 * ratio),
        colors: ["#d4af37", "#f0d060", "#ae0001", "#fff9e6", "#ae9153"],
        ...opts,
      });

    burst(0.25, { spread: 26, startVelocity: 55 });
    burst(0.2, { spread: 60 });
    burst(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    burst(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    burst(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  useEffect(() => {
    fireConfetti();
  }, [fireConfetti]);

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
        gap: "18px",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <SparkleTrail />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "rgba(212,175,55,0.5)",
        }}
      >
        ✦ The Final Chapter ✦
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.7, delay: 0.1 }}
        className="bounce"
        style={{ fontSize: "clamp(4rem, 14vw, 7rem)", lineHeight: 1 }}
      >
        🍺
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="glow-gold"
        style={{
          fontFamily: "'Cinzel Decorative', cursive",
          fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
          lineHeight: 1.3,
        }}
      >
        Butterbeer's on you! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          fontFamily: "'Cinzel Decorative', cursive",
          fontSize: "clamp(1rem, 3vw, 1.6rem)",
          color: "#ff6b6b",
          textShadow: "0 0 10px rgba(174,0,1,0.6)",
        }}
      >
        You owe me a Hogwarts feast, Ananya! ⚡
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{
          fontFamily: "'IM Fell English', serif",
          color: "rgba(212,175,55,0.5)",
          fontSize: "clamp(0.85rem, 2vw, 1rem)",
          fontStyle: "italic",
          maxWidth: "400px",
        }}
      >
        No treat, no peace. And I know where the Room of Requirement is. 🪄
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "4px" }}
      >
        <NavButton onClick={fireConfetti} variant="back">✨ More Magic!</NavButton>
        <NavButton onClick={onRestart}>🔄 Start Over</NavButton>
      </motion.div>
    </div>
  );
}
