import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getNewReleases, getFeaturedPlaylists, getGenres } from '../../../api/spotifyApi';
import Loading from '../../../common/components/Loading/Loading';
import { Category, NewRelease, Playlist } from '../../../globalTypes';

const Discover: React.FC = () => {
  const [newReleases, setNewReleases] = useState<NewRelease[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([getNewReleases(), getFeaturedPlaylists(), getGenres()])
      .then(([newReleasesData, playlistsData, categoriesData]) => {
        setNewReleases(newReleasesData.albums.items);
        setPlaylists(playlistsData.playlists.items);
        setCategories(categoriesData.categories.items);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    <Loading />
  }

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
    </div>
  );
};

export default Discover;
