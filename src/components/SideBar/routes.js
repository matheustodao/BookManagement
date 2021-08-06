import { AiFillHome } from 'react-icons/ai';
import { RiBookFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { MdSettings } from 'react-icons/md';

export const routes = [
  {
    id: 0,
    name: 'Dashboard',
    icon: <AiFillHome />,
    endpoint: '/dashboard',
    active: true,
  },

  {
    id: 1,
    name: 'Books',
    icon: <RiBookFill />,
    endpoint: '/books',
    active: false,
  },

  {
    id: 2,
    name: 'Authors',
    icon: <HiUsers />,
    endpoint: '/authors',
    active: false,
  },

  {
    id: 3,
    name: 'Settings',
    icon: <MdSettings />,
    endpoint: '/settings',
    active: false,
  },
];
