function Loading() {
  return (
    <div className="flex flex-col items-center  justify-center py-20 gap-4">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-gray-200 text-lg font-medium animate-pulse">
        Loading your music...
      </p>
    </div>
  );
}

export default Loading;

