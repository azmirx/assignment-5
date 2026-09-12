function StackSidebar({
  selectedTechnologies,
  onRemoveFromStack,
  onRemoveAll,
}) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      <h3 className="text-xl font-bold text-slate-900">
        Your Stack
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} Technology Selected`}
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-5 flex min-h-28 items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 text-center">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-9 w-9 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-800">
                    {technology.name}
                  </h4>

                  <p className="text-xs text-slate-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() =>
                    onRemoveFromStack(technology.id)
                  }
                  className="text-xl text-slate-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-300 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  )
}

export default StackSidebar