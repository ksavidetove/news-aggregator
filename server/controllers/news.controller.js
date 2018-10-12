const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

module.exports = {
  fetchHeadlines
};

async function fetchHeadlines(query) {
  return await newsapi.v2.topHeadlines({
    q: '',
    category: 'politics',
    language: 'en',
    country: 'us'
  }).then(response => {
    return response.articles;
  });
}
