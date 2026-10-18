// src/components/FavoriteButton.jsx
export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={isFavorite}
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        isFavorite ? 'bg-accent text-ink' : 'bg-white text-gray-600 hover:bg-gray-100'
      }`}
    >
      {isFavorite ? '♥ Favorite' : '♡ Favorite'}
    </button>
  )
}