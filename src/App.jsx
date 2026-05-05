import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarBackground from "./components/StarBackground";
import FloatingCandles from "./components/FloatingCandles";
import PageBorder from "./components/PageBorder";
import MusicPlayer from "./components/MusicPlayer";
import WelcomePage from "./pages/WelcomePage";
import PhotoPage from "./pages/PhotoPage";
import ProphecyPage from "./pages/ProphecyPage";
import NotePage from "./pages/NotePage";
import TreatPage from "./pages/TreatPage";

const PAGES = ["welcome", "photo", "prophecy", "note", "treat"];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function App() {
  const [pageIdx, setPageIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (delta) => {
    setDir(delta);
    setPageIdx((i) => Math.max(0, Math.min(PAGES.length - 1, i + delta)));
  };

  const page = PAGES[pageIdx];

  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--bg)", overflow: "hidden" }}>
      <StarBackground />
      <FloatingCandles />
      <PageBorder />
      <MusicPlayer />

<AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={page}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          {page === "welcome" && <WelcomePage onNext={() => go(1)} />}
          {page === "photo"   && <PhotoPage   onNext={() => go(1)} onBack={() => go(-1)} />}
          {page === "prophecy" && <ProphecyPage onNext={() => go(1)} onBack={() => go(-1)} />}
          {page === "note"    && <NotePage    onNext={() => go(1)} onBack={() => go(-1)} />}
          {page === "treat"   && <TreatPage   onRestart={() => { setDir(-1); setPageIdx(0); }} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
