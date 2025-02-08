// Mock function to get climate data
exports.getClimateData = (req, res) => {
  const sampleData = {
    temperature: '22°C',
    humidity: '78%',
    description: 'Partly cloudy',
  };
  res.json(sampleData);
};

