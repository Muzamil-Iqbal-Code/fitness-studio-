// src/components/Membership.jsx
import { plans } from '../data/plans'

export default function Membership() {
  return (
    <section id="membership">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="mb-6 text-3xl font-bold text-ink">Membership</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`flex w-full max-w-sm flex-col rounded-xl bg-soft p-6 text-center sm:w-72 ${
                plan.popular ? 'border-2 border-accent bg-white' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <p className="mb-2 self-center rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-ink">
                  Most Popular
                </p>
              )}
              <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
              <p className="my-2 text-4xl font-bold text-ink">${plan.price}</p>
              <p className="mb-5 text-gray-600">{plan.perks}</p>
              <button className="mt-auto rounded-full bg-accent px-6 py-2 font-medium text-ink hover:brightness-95">
                Choose
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}