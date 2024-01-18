const GOOGLE_API_KEY = 'K6XUdfpfsLAIzaSyCueuEMBmaA0kwpTF6HwpjtY';

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch cordinates. Please try again');
  }

  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = data.results[0].geometry.location;
  return coordinates;
}