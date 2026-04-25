export default function ItemDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
        {/* Back link skeleton */}
        <div className="h-4 bg-gray-200 rounded w-32 mb-8" />

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Image skeleton */}
          <div className="bg-gray-200 rounded-2xl aspect-square" />

          {/* Info skeleton */}
          <div className="flex flex-col gap-4">
            <div className="h-6 bg-gray-200 rounded w-24" />
            <div className="h-4 bg-gray-200 rounded w-16" />
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-24" />
            <div className="h-10 bg-gray-200 rounded w-40" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-32" />
            <div className="flex gap-3 mt-4">
              <div className="h-12 bg-gray-200 rounded-xl flex-1" />
              <div className="h-12 bg-gray-200 rounded-xl flex-1" />
            </div>
          </div>
        </div>

        {/* Description + specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="h-6 bg-gray-200 rounded w-40 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
