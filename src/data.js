import React from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaHome,
  FaBookOpen,
  FaHelicopter,
  FaCalendarAlt,
  FaWpforms,
  FaWalking,
  FaHandshake
} from 'react-icons/fa';
import {MdSportsSoccer} from 'react-icons/md'
import {ImEarth} from 'react-icons/im'
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
    id: 5,
    url: '/people',
    text: 'people',
    icon: <FaWalking />,
  },
  {
    id: 5,
    url: '/clients',
    text: 'clients',
    icon: <FaHandshake />,
  },
];

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
