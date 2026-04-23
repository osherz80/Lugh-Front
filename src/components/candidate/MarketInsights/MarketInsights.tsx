import React from "react";

export function MarketInsights() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 opacity-60 px-4">
        Market Insights
      </h3>

      <div className="bg-surface-low p-6 rounded-2xl space-y-4">
        {/* Insight 1 */}
        <div className="flex gap-4 group cursor-pointer">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white overflow-hidden shadow-sm">
            <img
              alt="Tech News"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSwn3iqgr6tke-71_zFrAlIMy7v8EHHvJyvZl7Ngh_4kr5jnDvewAtbxTMQ7afYSbLrv6KthFpbVrC9MnP_szETpnvv2TkPDmZ-EzCXQ37qvtCglWGX_MT2-H5iMnl9fy1LcNF_KgUUcGFsp_XsvDoRh0FoWaB0zwOiwWCwYI63nnaJD_ZiaXQi3Ke0arpBLE3icyLBOMwFYDnzYZHCJU7mOxtk4KMUuKAQMP6dYv9BiK6Wdrl0tKeHpA_nzHr4aA4Ob9DPrEmjt8h"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 group-hover:text-brand transition-colors leading-snug">
              The rise of AI-Orchestrated hiring in 2024.
            </h4>
            <p className="text-[11px] text-zinc-500 mt-1">5 min read • Curated for you</p>
          </div>
        </div>

        <div className="h-[1px] bg-zinc-200/50"></div>

        {/* Insight 2 */}
        <div className="flex gap-4 group cursor-pointer">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white overflow-hidden shadow-sm">
            <img
              alt="Market Data"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuP4fWT1Uzt6Ln6RqJu3PGr-bFBWqspCQCgQl3XPaLOru30gDAFkteX5RhJuARCb5d6xV_Qu1l-MEzu344juVhc1eGDgGMSO9a_eEffn4y7TOb-ZH3N3csTAe1QQT2MVuepZa0q5zUTuLhQf_aCJAZN9FTOfVAfzSqunlSiVUOzK8Xx6-FrucImxgU2VbbBy81G9myLeb1Ar0aDPRW3l_6tIkca6xtp0_rTY2RVutI1GqLOV74lEaO1hpise1hQq_xBdx6k8qqFGVv"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 group-hover:text-brand transition-colors leading-snug">
              Salary trends for Remote Frontend Leads.
            </h4>
            <p className="text-[11px] text-zinc-500 mt-1">8 min read • Market Update</p>
          </div>
        </div>
      </div>
    </div>
  );
}
