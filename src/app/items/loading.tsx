const SkeletonCard = () => (
  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
    <div className="bg-gray-100 aspect-square" />
    <div className="p-4 space-y-3">
      <div className="h-3 bg-gray-100 rounded w-1/3" />
      <div className="h-4 bg-gray-100 rounded w-3/4" />
      <div className="h-3 bg-gray-100 rounded w-1/2" />
      <div className="flex items-center justify-between mt-2">
        <div className="h-6 bg-gray-100 rounded w-1/4" />
        <div className="h-8 bg-gray-100 rounded w-1/3" />
      </div>
    </div>
  </div>
);

const SKELETON_IDS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ItemsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-8 bg-gray-100 rounded w-40 mb-2 animate-pulse" />
          <div className="h-4 bg-gray-100 rounded w-24 animate-pulse" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-6">
          <div className="h-11 bg-white border border-gray-100 rounded-xl flex-1 animate-pulse" />
          <div className="h-11 w-28 bg-white border border-gray-100 rounded-xl animate-pulse" />
          <div className="h-11 w-40 bg-white border border-gray-100 rounded-xl animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKELETON_IDS.map((id) => (
            <SkeletonCard key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
