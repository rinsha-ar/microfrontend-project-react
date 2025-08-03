export const fetchCalories = async (foodItem) => {
    if (!foodItem) return 0;
  
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(foodItem)}&search_simple=1&action=process&json=1`
      );
  
      if (!response.ok) {
        console.error('Open Food Facts API response not ok:', response.status);
        return 0;
      }
  
      const data = await response.json();
  
      if (data && data.products && data.products.length > 0) {
        // Calories are usually in 'energy-kcal_100g' in nutriments
        const product = data.products[0];
        const calories = product.nutriments && product.nutriments['energy-kcal_100g'];
        return calories || 0;
      } else {
        return 0;  // Calories not found
      }
    } catch (error) {
      console.error('Open Food Facts API Error:', error);
      return 0;
    }
  };
  