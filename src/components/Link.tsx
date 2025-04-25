/**
 * Componente de link estilizado.
 *
 * @example
 * <CustomLink to="/register" text="Não possui uma conta? Cadastre-se" textAlign="center" />
 *
 * @param {string} to - Caminho para onde o link deve redirecionar.
 * @param {string} text - Texto exibido no link.
 * @param {'left' | 'center' | 'right'} [textAlign='center'] - Alinhamento do texto.
 */
import React from 'react';
import { Link } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  text: string;
  textAlign?: 'left' | 'center' | 'right';
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, text, textAlign = 'center' }) => {
  const alignmentClass = textAlign === 'left' ? 'text-left' : textAlign === 'right' ? 'text-right' : 'text-center';

  return (
    <Link
      to={to}
      className={`my-4 block ${alignmentClass} text-sm text-blue-800 underline font-bold hover:underline`}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
