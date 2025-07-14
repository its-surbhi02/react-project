const NoRestaurantFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-[#fff2e0] min-h-[40vh]">
      {/* You can replace this with an actual image */}
      <div className="w-40 h-40 bg-[#c0c9ee] rounded-full opacity-40 mb-6 flex items-center justify-center">
        {/* Optional: an icon like ❌ or 🍽️ */}
        <span className="text-4xl text-[#898ac4]">🍽️</span>
      </div>
      <h2 className="text-2xl font-semibold text-[#898ac4] mb-2">No Restaurants Found</h2>
      <p className="text-gray-600">Try searching with different keywords.</p>
    </div>
  );
};

export default NoRestaurantFound;
