export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        
        {/* Hero section skeleton */}
        <div className="mb-12">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-8 animate-pulse"></div>
          <div className="flex gap-4">
            <div className="h-12 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
          </div>
        </div>
        
        {/* Content sections skeleton */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}