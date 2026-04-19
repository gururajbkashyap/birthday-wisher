import { useState, useRef, useCallback, useEffect } from "react";

// Hedwig's Theme — [frequency Hz, note duration s, gap after s]
const MELODY = [
  [493.88, 0.35, 0.06],  // B4
  [659.25, 0.55, 0.06],  // E5
  [783.99, 0.20, 0.00],  // G5
  [739.99, 0.35, 0.06],  // F#5
  [659.25, 0.55, 0.06],  // E5
  [987.77, 0.25, 0.00],  // B5
  [880.00, 0.90, 0.12],  // A5
  [739.99, 0.90, 0.18],  // F#5

  [659.25, 0.55, 0.06],  // E5
  [783.99, 0.20, 0.00],  // G5
  [739.99, 0.35, 0.06],  // F#5
  [622.25, 0.55, 0.06],  // Eb5
  [698.46, 0.90, 0.12],  // F5
  [493.88, 0.90, 0.35],  // B4  ← long pause before repeat

  // second section
  [493.88, 0.35, 0.06],  // B4
  [659.25, 0.55, 0.06],  // E5
  [783.99, 0.20, 0.00],  // G5
  [739.99, 0.35, 0.06],  // F#5
  [659.25, 0.55, 0.06],  // E5
  [1046.50, 0.55, 0.06], // C6
  [987.77, 0.55, 0.06],  // B5
  [880.00, 0.90, 0.18],  // A5

  [698.46, 0.35, 0.06],  // F5
  [830.61, 0.20, 0.00],  // Ab5
  [783.99, 0.35, 0.06],  // G5
  [659.25, 0.55, 0.06],  // E5
  [739.99, 0.55, 0.06],  // F#5
  [987.77, 0.55, 0.06],  // B5
  [1318.51, 1.10, 0.35], // E6  ← long hold
];


function scheduleNote(ctx, freq, start, duration, volume = 0.13) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const reverb = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.value = freq;

  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.04);
  gain.gain.setValueAtTime(volume, start + duration * 0.6);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

  reverb.gain.value = 0.85;

  osc.connect(gain);
  gain.connect(reverb);
  reverb.connect(ctx.destination);

  osc.start(start);
  osc.stop(start + duration + 0.05);
}

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);
  const loopRef = useRef(null);

  const scheduleMelody = useCallback((ctx, startAt) => {
    let t = startAt;
    for (const [freq, dur, gap] of MELODY) {
      scheduleNote(ctx, freq, t, dur);
      t += dur + gap;
    }
    return t;
  }, []);

  const startLoop = useCallback(() => {
    const ctx = new AudioContext();
    ctxRef.current = ctx;

    let nextStart = ctx.currentTime + 0.1;

    const tick = () => {
      nextStart = scheduleMelody(ctx, nextStart);
      loopRef.current = setTimeout(tick, (nextStart - ctx.currentTime - 1.5) * 1000);
    };

    tick();
    setPlaying(true);
  }, [scheduleMelody]);

  const stopLoop = useCallback(() => {
    clearTimeout(loopRef.current);
    ctxRef.current?.close();
    ctxRef.current = null;
    setPlaying(false);
  }, []);

  const toggle = () => {
    if (playing) stopLoop();
    else startLoop();
  };

  // Auto-start on first user interaction (browsers block audio before that)
  useEffect(() => {
    const onFirstInteraction = () => {
      if (!ctxRef.current) startLoop();
      document.removeEventListener("click", onFirstInteraction);
      document.removeEventListener("keydown", onFirstInteraction);
    };
    document.addEventListener("click", onFirstInteraction, { once: true });
    document.addEventListener("keydown", onFirstInteraction, { once: true });
    return () => {
      document.removeEventListener("click", onFirstInteraction);
      document.removeEventListener("keydown", onFirstInteraction);
    };
  }, [startLoop]);

  useEffect(() => () => stopLoop(), [stopLoop]);

  return (
    <button
      onClick={toggle}
      title={playing ? "Mute music" : "Play Hedwig's Theme"}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 100,
        background: "rgba(212,175,55,0.12)",
        border: "1px solid rgba(212,175,55,0.4)",
        borderRadius: "50%",
        width: 42,
        height: 42,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "1.1rem",
        backdropFilter: "blur(8px)",
        transition: "background 0.2s, box-shadow 0.2s",
        boxShadow: playing
          ? "0 0 12px rgba(212,175,55,0.6), 0 0 28px rgba(212,175,55,0.3)"
          : "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212,175,55,0.22)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(212,175,55,0.12)")}
    >
      {playing ? "🔊" : "🎵"}
    </button>
  );
}
