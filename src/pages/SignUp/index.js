import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <img src="https://via.placeholder.com/300x150" alt="Logo gobarber web" />

      <form action="">
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
