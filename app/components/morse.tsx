const CODE: Record<string, string> = {
  H: "....", I: "..", R: ".-.", E: ".", M: "--", "!": "-.-.--",
};
const U = 8; // px per Morse unit
const G = 2; // px trimmed off each bar so the gaps between them are wider
const T = 0.07; // seconds per Morse unit
const PAUSE = 36; // idle units between loops (~2.5s)

// Real Morse timing: dot 1u, dash 3u, 1u between symbols, 3u between letters, 7u between words.
function build(text: string) {
  let t = 0;
  const bars: { w: number; at: number }[] = [];
  text.split(" ").forEach((word, wi) => {
    if (wi) t += 7;
    [...word].forEach((ch, li) => {
      if (li) t += 3;
      [...CODE[ch]].forEach((s, si) => {
        if (si) t += 1;
        const len = s === "." ? 1 : 3;
        bars.push({ w: len * U - G, at: t });
        t += len;
      });
    });
  });
  return { bars, total: t + PAUSE };
}

const { bars, total } = build("HIRE ME!");

export const Morse = () => (
  <div role="img" aria-label="Hire me! in Morse code" className="relative h-1.5" style={{ width: (total - PAUSE) * U }}>
    {bars.map((b, i) => (
      <span
        key={i}
        className="morse-bar"
        style={{
          left: b.at * U,
          width: b.w,
          animationDuration: `${total * T}s`,
          animationDelay: `${b.at * T}s`,
        }}
      />
    ))}
  </div>
);
