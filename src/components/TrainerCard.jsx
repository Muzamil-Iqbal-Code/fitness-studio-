import FavoriteButton from './FavoriteButton'

export default function TrainerCard({ trainer, isFavorite, onToggleFavorite }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5">
      <img
        src={trainer.photo}
        alt={`${trainer.name}, ${trainer.specialty} trainer`}
        className="mb-4 aspect-square w-full rounded-lg object-cover object-top"
      />
      <h3 className="text-xl font-bold text-ink">{trainer.name}</h3>
      <p className="mb-2 text-sm text-gray-500">{trainer.specialty}</p>
      <p className="mb-3 text-gray-600">{trainer.bio}</p>
      <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
    </article>
  )
}