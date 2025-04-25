/**
 * Componente de botão reutilizável com suporte a estado de carregamento.
 *
 * @example
 * <Button loading={false} onClick={() => console.log('Clicado!')}>
 *   Clique Aqui
 * </Button>
 *
 * @param {boolean} loading - Indica se o botão está em estado de carregamento.
 * @param {React.ReactNode} children - Conteúdo do botão.
 * @param {() => void} [onClick] - Função chamada ao clicar no botão.
 */
import React from 'react';

interface ButtonProps {
  loading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ loading, children, onClick }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      onClick={onClick}
      className={`bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
