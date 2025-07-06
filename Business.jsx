function BusinessCard({ data, onRegenerate }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-sm mt-6">
      <h2 className="text-xl font-semibold mb-2">{data.name} – {data.location}</h2>
      <p className="text-yellow-500 font-bold mb-1">Rating: {data.rating} ★</p>
      <p className="text-gray-600 mb-2">Reviews: {data.reviews}</p>
      <p className="italic text-gray-800 mb-4">"{data.headline}"</p>
      <button onClick={onRegenerate} className="bg-green-500 text-white py-2 px-4 rounded w-full">
        Regenerate SEO Headline
      </button>
    </div>
  );
}

export default BusinessCard;
