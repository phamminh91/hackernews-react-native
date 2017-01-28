const URL_FETCH_STORY_BY_ID = `https://hacker-news.firebaseio.com/v0/item/{id}.json`;
const URL_FETCH_TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json';

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
  return fetchGetRequest(URL_FETCH_TOP_STORIES);
}

export function fetchStoryById(id) {
  return fetchGetRequest(URL_FETCH_STORY_BY_ID.replace('{id}', id));
}
