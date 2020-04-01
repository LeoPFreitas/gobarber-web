import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Voce possui 1 novo agendamento</p>
            <time>a 2 dias atras</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui 1 novo agendamento</p>
            <time>a 2 dias atras</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui 1 novo agendamento</p>
            <time>a 2 dias atras</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification unread>
            <p>Voce possui 1 novo agendamento</p>
            <time>a 2 dias atras</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui 1 novo agendamento</p>
            <time>a 2 dias atras</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui 1 novo agendamento</p>
            <time>a 2 dias atras</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
