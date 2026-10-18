export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-6xl px-5 py-4">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <li><a href="#classes" className="hover:underline">Classes</a></li>
          <li><a href="#trainers" className="hover:underline">Trainers</a></li>
          <li><a href="#membership" className="hover:underline">Membership</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}