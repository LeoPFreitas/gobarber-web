import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src="https://via.placeholder.com/50x50" alt="Gobarber Web" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={profile.avatar.url || 'https://via.placeholder.com/120.png}'}
              alt="Leonardo Freitas"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
