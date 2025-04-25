/**
 * Componente de layout principal para a página Kanban.
 *
 * @example
 * <KambanLayout>
 *   <div>Conteúdo do Kanban</div>
 * </KambanLayout>
 *
 * @param {React.ReactNode} children - Elementos filhos renderizados dentro do layout.
 */
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { handleUnauthorized } from '../utils/handleUnauthorized';

interface KambanLayoutProps {
  children: React.ReactNode;
}

const KambanLayout: React.FC<KambanLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    handleUnauthorized(navigate);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img
              src="/login.png"
              alt="JusCash"
              className="mx-auto h-7"
            />
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <FiLogOut size={20} />
            Sair
          </button>
        </div>
      </header>
      <main className="flex flex-col flex-1 container mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md mb-4">
        <div className="flex flex-col flex-1">{children}</div>
      </main>
    </div>
  );
};

export default KambanLayout;
