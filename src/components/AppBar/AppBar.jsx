import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.styled';

export function AppBar() {
  return (
    <Header>
      <Navigation></Navigation>
      <AuthNav></AuthNav>
      <UserMenu></UserMenu>
    </Header>
  );
}
