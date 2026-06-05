import { useMemo } from "react";
import { REPERTOIRE } from "@/data/openings";
import { useProgress } from "@/hooks/useProgress";
import OpeningCard from "./OpeningCard";

export default function HomePage() {
  const { store } = useProgress();

  const whiteOpenings = useMemo(
    () => REPERTOIRE.filter((o) => o.side === "white"),
    [],
  );
  const blackOpenings = useMemo(
    () => REPERTOIRE.filter((o) => o.side === "black"),
    [],
  );

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
      <div className="mb-10">
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Your Openings
        </h1>
        <p className="text-base" style={{ color: "var(--text-secondary)" }}>
          Click an opening to explore lines and start learning.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-lg">♔</span>
          <h2
            className="text-base font-semibold"
            style={{ color: "var(--text-secondary)" }}
          >
            Playing White
          </h2>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border)" }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {whiteOpenings.map((opening) => (
            <OpeningCard key={opening.id} opening={opening} store={store} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-lg">♚</span>
          <h2
            className="text-base font-semibold"
            style={{ color: "var(--text-secondary)" }}
          >
            Playing Black
          </h2>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border)" }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {blackOpenings.map((opening) => (
            <OpeningCard key={opening.id} opening={opening} store={store} />
          ))}
        </div>
      </section>
    </div>
  );
}
