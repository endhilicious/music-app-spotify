import React from 'react';
import '../styles/_discover-item.scss';
import { Image } from '../../../../../globalTypes';


interface DiscoverItemProps {
  images?: Image[];
  name?: string;
}

const DiscoverItem: React.FC<DiscoverItemProps> = ({ images, name }) => {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images?.[0].url})` }}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}

export default DiscoverItem;
