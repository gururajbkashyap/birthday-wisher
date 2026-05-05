import { motion } from "framer-motion";
import NavButton from "../components/NavButton";

const PHOTOS = [
  { src: "/photos/group1.jpg", label: "Mischief managed 🗺️" },
  { src: "/photos/group2.jpg", label: "The golden ones ✨" },
  { src: "/photos/group3.jpg", label: "Always 🦌" },
  { src: "/photos/group4.jpg", label: "Her magical circle 🔮" },
];

const TILE_ANIMS = [
  { initial: { opacity: 0, x: -40, y: -40 }, animate: { opacity: 1, x: 0, y: 0 } },
  { initial: { opacity: 0, x: 40, y: -40 }, animate: { opacity: 1, x: 0, y: 0 } },
  { initial: { opacity: 0, x: -40, y: 40 }, animate: { opacity: 1, x: 0, y: 0 } },
  { initial: { opacity: 0, x: 40, y: 40 }, animate: { opacity: 1, x: 0, y: 0 } },
];

export default function GroupPhotos({ onNext, onBack }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1,
        padding: "clamp(12px, 3vh, 24px) clamp(12px, 3vw, 24px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0 }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(212,175,55,0.5)",
          }}
        >
          ✦ Chapter Two ✦
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glow-gold"
          style={{
            fontFamily: "'Cinzel Decorative', cursive",
            fontSize: "clamp(0.9rem, 2.5vw, 1.8rem)",
            textAlign: "center",
            margin: 0,
          }}
        >
          Be Smiling Always ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
            color: "rgba(212,175,55,0.65)",
            fontStyle: "italic",
            textAlign: "center",
            margin: 0,
          }}
        >
          ...just as you are in these pictures 📸
        </motion.p>
      </div>

      {/* 2×2 photo grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(8px, 1.5vw, 16px)",
          width: "min(560px, 92vw)",
          flex: 1,
          minHeight: 0,
          padding: "8px 0",
        }}
      >
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            initial={TILE_ANIMS[i].initial}
            animate={TILE_ANIMS[i].animate}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.55, type: "spring", bounce: 0.25 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              minHeight: 0,
            }}
          >
            <div
              className="polaroid"
              style={{
                width: "100%",
                flex: 1,
                minHeight: 0,
                padding: "6px 6px 22px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "2px" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#d4af37;text-align:center;font-size:0.7rem;padding:6px;font-family:Cinzel,serif">📸 group${i + 1}.jpg</div>`;
                }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 + i * 0.12 }}
              style={{
                fontFamily: "'IM Fell English', serif",
                color: "rgba(212,175,55,0.6)",
                fontStyle: "italic",
                fontSize: "clamp(0.65rem, 1.3vw, 0.85rem)",
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              {photo.label}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Nav */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.45 }}
        style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", flexShrink: 0 }}
      >
        <NavButton onClick={onBack} variant="back">← Back</NavButton>
        <NavButton onClick={onNext}>Next →</NavButton>
      </motion.div>
    </div>
  );
}
