function ShimmerCard() {
  return (
    <div className="w-64 rounded-lg overflow-hidden border border-gray-200 bg-white h-100 shadow-sm p-4">

    
      <div className="w-full h-48 rounded-lg shimmer-bg"></div>


      <div className="mt-4 space-y-3">
        <div className="h-4 rounded shimmer-bg w-3/4"></div>
        <div className="h-4 rounded shimmer-bg w-1/2"></div>
        <div className="h-4 rounded shimmer-bg w-2/3"></div>
      </div>

    </div>
  );
}

export default ShimmerCard;