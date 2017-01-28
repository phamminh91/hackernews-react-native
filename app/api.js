function fetchGetRequest(url) {
  return fetch(url, {})
      .then(response => {
        if (response.status !== 200) {
          throw new Error();
        }

        // Examine the text in the response
        return response.json().then(data => {
          return {response: data};
        });
      })
      .catch(e => {
        console.log('fetchError:', url, e);
        return {error: e};
      });
}

export function fetchTopStories() {
  return fetchGetRequest('https://hacker-news.firebaseio.com/v0/topstories.json');
}

export function fetchStoryById(id) {
  return fetchGetRequest(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}
