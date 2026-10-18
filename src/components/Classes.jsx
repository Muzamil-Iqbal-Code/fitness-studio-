// src/components/Classes.jsx
import { classes } from '../data/classes'

export default function Classes() {
  return (
    <section id="classes">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="mb-6 text-3xl font-bold text-ink">Class schedule</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {classes.map((day) => (
            <div
              key={day.id}
              className="rounded-xl border border-gray-200 bg-soft p-4"
            >
              <h3 className="mb-3 border-b-2 border-accent pb-2 font-bold text-ink">
                {day.day}
              </h3>
              {day.sessions.map((session) => (
                <p key={session} className="mb-1 text-sm text-gray-600">
                  {session}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}