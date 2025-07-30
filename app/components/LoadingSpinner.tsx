const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#0ea5e9] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-[#1e3a8a] rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
