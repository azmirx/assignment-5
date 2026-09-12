function Loader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

        <p className="text-sm font-medium text-gray-500">
          Loading technologies...
        </p>
      </div>
    </div>
  )
}

export default Loader