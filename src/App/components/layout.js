import Routes from '../../routes';
import GlobalStyle from '../../styles/global';
import SideBar from '../../components/SideBar';

import { ContainerRoutes } from '../styles';

export default function Layout() {
  return (
    <>
      <GlobalStyle />

      <SideBar />
      <ContainerRoutes>
        <Routes />
      </ContainerRoutes>
    </>
  );
}
