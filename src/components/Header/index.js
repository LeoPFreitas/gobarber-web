import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src="https://via.placeholder.com/50x50" alt="Gobarber Web" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Leonardo Freitas</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src="https://via.placeholder.com/50" alt="Leonardo Freitas" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
