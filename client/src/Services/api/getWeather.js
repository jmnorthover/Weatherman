const getWeather = async (zip) => {
  const url = `/api/weather/${zip}`;
  const response = await fetch(url);
  return await response.json();
};

export default getWeather;
