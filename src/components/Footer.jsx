// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
        <section id="about">
          <h2 className="mb-3 text-2xl font-bold text-accent">About</h2>
          <p>
            The Workout is a neighborhood fitness studio with classes for every
            level, friendly trainers and flexible memberships.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-accent">Contact</h2>
          <p>12 Main St, City</p>
          <p>Open daily, 6am to 9pm</p>
        </section>
      </div>
    </footer>
  )
}