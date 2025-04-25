/**
 * Componente de link estilizado para redirecionar ao cadastro.
 *
 * @example
 * <LinkToCadastro to="/register" text="Cadastre-se agora" />
 *
 * @param {string} to - Caminho para onde o link deve redirecionar.
 * @param {string} text - Texto exibido no link.
 */
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkToCadastroProps {
  to: string;
  text: string;
}

const LinkToCadastro: React.FC<LinkToCadastroProps> = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="mt-4 block text-center text-sm text-blue-800 underline font-bold hover:underline"
    >
      {text}
    </Link>
  );
};

export default LinkToCadastro;
