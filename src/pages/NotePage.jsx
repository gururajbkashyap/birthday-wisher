import { motion } from "framer-motion";
import NavButton from "../components/NavButton";

// ✏️ Replace this with your actual note for Ananya Keshav
const NOTE_TEXT = `Dear Ananya ,

Every great story has a character who makes it worth reading — you are that person in ours.

You bring the kind of warmth that makes even ordinary days feel like something out of a favourite book. Your kindness is your superpower, your laugh is contagious, and your spirit is something truly rare.

On this birthday, I want you to know that the world is genuinely better because you're in it. You deserve every good thing that comes your way — and a whole lot more.

May this year bring you adventures worthy of your favourite stories, friendships that feel like home, and moments that make your heart glow.

Happy Birthday, Ananya.
Here's to you — always. 🥂

With love,
Gururaj ⚡`;

const lines = NOTE_TEXT.split("\n");

export default function NotePage({ onNext, onBack }) {
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
        padding: "24px",
        gap: "20px",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "rgba(212,175,55,0.5)",
        }}
      >
        ✦ Chapter Three ✦
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glow-gold"
        style={{
          fontFamily: "'Cinzel Decorative', cursive",
          fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
          textAlign: "center",
        }}
      >
        A Letter From Hogwarts 🦉
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-card"
        style={{
          width: "min(600px, 92vw)",
          maxHeight: "48vh",
          overflowY: "auto",
          padding: "28px 32px",
          textAlign: "left",
          lineHeight: 2,
          borderColor: "rgba(212,175,55,0.25)",
        }}
      >
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
            style={{
              marginBottom: line === "" ? "6px" : "0",
              fontFamily: i === 0 ? "'Cinzel', serif" : "'IM Fell English', serif",
              fontSize:
                i === 0
                  ? "clamp(1rem, 2.5vw, 1.2rem)"
                  : "clamp(0.88rem, 2vw, 1rem)",
              color:
                i === 0
                  ? "#d4af37"
                  : i >= lines.length - 3
                  ? "rgba(212,175,55,0.7)"
                  : "rgba(255,249,230,0.85)",
              fontStyle: i >= lines.length - 3 ? "italic" : "normal",
            }}
          >
            {line || "\u00A0"}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
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
