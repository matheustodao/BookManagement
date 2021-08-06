import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IconContext } from 'react-icons';

import { Container, List, Go } from './styles';

import { routes as dataRoutes } from './routes';

export default function SideBar() {
  const [routes, setRoutes] = useState(dataRoutes);
  const { pathname } = useLocation();

  useEffect(() => (
    setRoutes((route) => (
      route.map((prevState) => (
        prevState.endpoint === pathname
          ? { ...prevState, active: true }
          : { ...prevState, active: false }
      ))
    ))
  ), [pathname]);

  return (
    <header>
      <Container>
        <ul>
          {routes.map((route) => (
            <List
              key={route.id}
              active={route.active}
            >
              <Go to={route.endpoint}>
                <IconContext.Provider value={{ className: 'icon' }}>
                  {route.icon}
                </IconContext.Provider>
                {route.name}
              </Go>
            </List>
          ))}
        </ul>
      </Container>
    </header>
  );
}
