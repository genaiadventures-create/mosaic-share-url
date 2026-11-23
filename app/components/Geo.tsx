import type { ReactNode } from "react";
import type { QA as QAItem } from "../marketing-seo";

type QAProps = QAItem & { id: string; children?: ReactNode };

// One visible question and its direct answer. `a` is the exact string used in the FAQPage JSON-LD.
export function QA({ id, q, a, children }: QAProps) {
  return (
    <section className="section wrap geo" aria-labelledby={id}>
      <div className="geo__col">
        <h2 id={id} className="h2">{q}</h2>
        <p className="geo__answer">{a}</p>
        {children}
      </div>
    </section>
  );
}

export function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="section wrap geo" aria-labelledby={id}>
      <div className="geo__col">
        <h2 id={id} className="h2">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export type Source = { href: string; label: string; supports: string };

export function Sources({ id = "sources-h2", items }: { id?: string; items: Source[] }) {
  return (
    <Block id={id} title="Sources">
      <p className="small geo__note">External pages checked in November 2026. Each link supports the claim named beside it.</p>
      <ol className="geo__sources">
        {items.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            {`: ${s.supports}`}
          </li>
        ))}
      </ol>
    </Block>
  );
}
