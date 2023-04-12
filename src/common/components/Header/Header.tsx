import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Hero } from '../../../assets/images/hero.svg';
import './_header.scss';

interface HeaderProps {
  history?: any; // TODO: hanya untuk test, nanti diubah tipe datanya
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <Hero />
      <div>
        <h1>Your favourite tunes</h1>
        <h2>All <FontAwesomeIcon icon={faSun} /> and all <FontAwesomeIcon icon={faMoon} /></h2>
      </div>
    </div>
  );
}

export default Header;
