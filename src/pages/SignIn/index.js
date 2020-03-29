import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <img src="https://via.placeholder.com/300x150" alt="Logo gobarber web" />

      <form action="">
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
