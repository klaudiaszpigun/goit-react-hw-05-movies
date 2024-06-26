export const trending = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk',
    },
  };

  const result = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
  return result;
};
export const search = key_word => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk',
    },
  };

  const result = fetch(
    `https://api.themoviedb.org/3/search/movie?query=${key_word}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));

  return result;
};

export const details = id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk',
    },
  };

  const result = fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));

  return result;
};

export const credits = id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk',
    },
  };

  const result = fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => response.cast)
    .catch(err => console.error(err));
  return result;
};

export const fetchingReviews = id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk',
    },
  };

  const result = fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
  return result;
};
