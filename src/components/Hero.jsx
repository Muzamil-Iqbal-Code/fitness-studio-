export default function Hero() {
  return (
    <section className="bg-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="mb-3 text-4xl font-bold text-ink md:text-5xl">
            The Workout
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            Brings you to the health you deserve.
          </p>
          <a
            href="#membership"
            className="inline-block rounded-full bg-accent px-6 py-2.5 font-medium text-ink hover:brightness-95"
          >
            Join Now
          </a>
        </div>
        <img
          src="/pictures/modern-fitness-space-stockcake.jpg"
          alt="Modern fitness studio"
          className="w-full rounded-xl object-cover"
        />
      </div>
    </section>
  )
}