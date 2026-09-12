function TechnologyCard({
  technology,
  selectedTechnologies,
  onAddToStack,
}) {
  const {
    id,
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology

  const isAdded = selectedTechnologies.some(
    (item) => item.id === id
  )

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
          {badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-3 flex-grow text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs">

        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
          {category}
        </span>

        <span className="text-slate-500">
          {difficulty}
        </span>

        <span className="font-semibold text-slate-700">
          <span className="text-amber-400">★</span> {rating}
        </span>

      </div>

      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-400"
            : "bg-slate-950 hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  )
}

export default TechnologyCard