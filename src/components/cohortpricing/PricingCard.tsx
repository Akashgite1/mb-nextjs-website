import { PricingPlan } from "./types";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={
        plan.featured
          ? "group relative flex min-h-[640px] flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#6366f1] to-[#7c3aed] px-9 py-12 text-center text-white shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(99,102,241,0.45)]"
          : "group relative flex min-h-[640px] flex-col overflow-hidden rounded-2xl border-2 border-[#6d5dfc] bg-[#f4f0ff] px-9 py-12 text-center shadow-lg transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.015] hover:border-[#5b4ff7] hover:shadow-[0_20px_50px_rgba(109,93,252,0.25)]"
      }
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {plan.featured && (
        <div className="relative z-10 mb-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur">
            Most Popular
          </span>
        </div>
      )}

      <div className="relative z-10 text-5xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-125">
        {plan.icon}
      </div>

      <h3 className="relative z-10 mt-10 text-3xl font-extrabold leading-snug transition-all duration-300 group-hover:tracking-wide">
        {plan.title}
      </h3>

      <p
        className={
          plan.featured
            ? "relative z-10 mt-7 text-base leading-7 text-white/90"
            : "relative z-10 mt-7 text-base leading-7 text-slate-500"
        }
      >
        {plan.description}
      </p>

      <ul
        className={
          plan.featured
            ? "relative z-10 mx-auto mt-14 space-y-4 text-left text-sm text-white"
            : "relative z-10 mx-auto mt-14 space-y-4 text-left text-sm text-slate-700"
        }
      >
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="transition-all duration-300 hover:translate-x-2"
          >
            ✓ {feature}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto pt-14">
        <div
          className={
            plan.featured
              ? "text-4xl font-extrabold"
              : "text-4xl font-extrabold text-[#6d5dfc]"
          }
        >
          {plan.price}
        </div>

        <button
          className={
            plan.featured
              ? "mt-8 rounded-lg bg-white px-10 py-4 font-extrabold text-[#6366f1] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95"
              : "mt-8 rounded-lg bg-[#6d5dfc] px-10 py-4 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#5b4ff7] hover:shadow-xl active:scale-95"
          }
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
}