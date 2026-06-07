import PricingCard from "./PricingCard";
import { pricingPlans } from "./cohortData";

export default function CohortPricingSection() {
  return (
    <section className="bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Can't Wait for Cohort 3? Start Preparing Now
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-500">
            Cohort 2 is live and delivering results. While you wait for Cohort
            3, get a head start with our self-paced prep kit or accelerate your
            journey with dedicated 1-on-1 mentorship.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-bold text-slate-500">
          Choose what works best for your learning style and schedule
        </p>
      </div>
    </section>
  );
}