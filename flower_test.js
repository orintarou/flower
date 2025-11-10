import axios from "axios";

const API_KEY = "sk-yJ2e69039ec813c6413207"; // replace with your key
const BASE_URL = "https://perenual.com/api/v2/species-list";

async function getRedFlowers(page = 1) {
  try {
    // Fetch species list
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        page: page
      }
    });

    const species = response.data.data;

    // Filter for red flowers
    const redFlowers = species.filter(sp => {
      const color = sp.flower_color;
      return color && color.toLowerCase().includes("red");
    });

    return redFlowers;
  } catch (err) {
    console.error("Error fetching flowers:", err);
    return [];
  }
}

// Example usage
(async () => {
  const redFlowers = await getRedFlowers(1);
  console.log("Red Flowers on page 1:", redFlowers);
})();
