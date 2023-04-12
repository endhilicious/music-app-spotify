import config from './config';

export const getNewReleases = async () => {
  const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;
  const response = await fetch(`${config.api.baseUrl}/browse/new-releases`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data;
};

export const getFeaturedPlaylists = async () => {
  const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;
  const response = await fetch(`${config.api.baseUrl}/browse/featured-playlists`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data;
};

export const getGenres = async () => {
  const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;
  const response = await fetch(`${config.api.baseUrl}/browse/categories`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data;
};
