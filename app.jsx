import { useState } from 'react';
import axios from 'axios';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBusinessData = async (formData) => {
    setLoading(true);
    const res = await axios.post('http://localhost:5000/business-data', formData);
    setBusinessData({ ...res.data, ...formData });
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    const { name, location } = businessData;
    const res = await axios.get(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`);
    setBusinessData(prev => ({ ...prev, headline: res.data.headline }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Local Business Dashboard</h1>
      <BusinessForm onSubmit={fetchBusinessData} />
      {loading && <p className="mt-4">Loading...</p>}
      {businessData && <BusinessCard data={businessData} onRegenerate={regenerateHeadline} />}
    </div>
  );
}

export default App;
