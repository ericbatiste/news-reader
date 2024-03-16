const apiKey = process.env.REACT_APP_API_KEY;

export const fetchArticles = async (category = '') => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&${category}apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Sorry, failed network request, please try again.')
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}