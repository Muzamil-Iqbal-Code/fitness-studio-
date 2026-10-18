// src/components/Trainers.jsx
import { useState } from 'react'
import { trainers } from '../data/trainers'
import TrainerCard from './TrainerCard'

const specialties = ['All', ...new Set(trainers.map((t) => t.specialty))]

export default function Trainers() {
  const [selected, setSelected] = useState('All')

  const visibleTrainers =
    selected === 'All'
      ? trainers
      : trainers.filter((trainer) => trainer.specialty === selected)

  return (
    <section id="trainers" className="bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="mb-6 text-3xl font-bold text-ink">Our trainers</h2>

        <div className="mb-6 flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelected(specialty)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                selected === specialty
                  ? 'bg-accent text-ink'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTrainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  )
}