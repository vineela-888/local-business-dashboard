import { useState } from 'react';

function BusinessForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && location.trim()) {
      onSubmit({ name, location });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-full max-w-sm">
      <input
        type="text"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 border w-full rounded"
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="mb-2 p-2 border w-full rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
        Submit
      </button>
    </form>
  );
}

export default BusinessForm;
