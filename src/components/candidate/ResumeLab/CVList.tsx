import React from "react";
import { AssetCard } from "./AssetCard";

export function CVList() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
          My Curated Assets
        </h1>
        <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Manage your master record and its specialized variants. AI-powered matching
          ensures your CV speaks the language of every opportunity.
        </p>
      </header>

      {/* Grid of Assets */}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 pb-12">
        <AssetCard
          type="master"
          title="Master_Source_2024"
          tags={["FULLSTACK", "ARCHITECTURE"]}
          score={90}
          date="Oct 12, 2024"
          format="PDF/DOCX"
        />
        <AssetCard
          type="tailored"
          title="Fullstack_Senior_G"
          tags={["REACT", "GO"]}
          score={86}
          tailoredFor="Google"
          date="2d ago"
          format="PDF"
        />
        <AssetCard
          type="tailored"
          title="Fullstack_Senior_G"
          tags={["REACT", "GO"]}
          score={86}
          tailoredFor="Google"
          date="2d ago"
          format="PDF"
        />
        <AssetCard
          type="tailored"
          title="Fullstack_Senior_G"
          tags={["REACT", "GO"]}
          score={86}
          tailoredFor="Google"
          date="2d ago"
          format="PDF"
        />
      </div>
    </>
  );
}
