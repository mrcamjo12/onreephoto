import React from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaHome,
  FaBookOpen,
  FaHelicopter,
  FaWalking,
  FaHandshake
} from 'react-icons/fa';
import {MdSportsSoccer} from 'react-icons/md'
import {ImEarth} from 'react-icons/im'


// sidebar links and icons
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <FaBookOpen />,
  },
  {
    id: 3,
    url: '/flight',
    text: 'flight',
    icon: <FaHelicopter />,
  },
  {
    id: 4,
    url: '/sports',
    text: 'sports',
    icon: <MdSportsSoccer />,
  },
  {
    id: 5,
    url: '/world',
    text: 'world',
    icon: <ImEarth />,
  },
  {
    id: 6,
    url: '/people',
    text: 'people',
    icon: <FaWalking />,
  },
  {
    id: 7,
    url: '/clients',
    text: 'clients',
    icon: <FaHandshake />,
  },
];

// social media links and icons
export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com/onreephotography/',
    icon: <FaInstagram />,
  }  
];

// pictures for carousel by category

