/**
 * Componente de modal para exibir informações detalhadas.
 *
 * @example
 * <Modal
 *   isOpen={isModalOpen}
 *   onClose={() => setModalOpen(false)}
 *   data={{
 *     numero_processo: '12345',
 *     data_disponibilizacao: '2023-01-01',
 *     autores: 'Autor Exemplo',
 *     reu: 'Réu Exemplo',
 *     advogados: ['Advogado 1', 'Advogado 2'],
 *     valor_principal: 'R$ 10.000,00',
 *     juros_moratorios: 'R$ 500,00',
 *     honorarios_adv: 'R$ 1.000,00',
 *     conteudo_publicacao: 'Conteúdo detalhado da publicação.',
 *   }}
 * />
 *
 * @param {boolean} isOpen - Indica se o modal está aberto.
 * @param {() => void} onClose - Função chamada ao fechar o modal.
 * @param {object} data - Dados exibidos no modal.
 */
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    numero_processo: string;
    data_disponibilizacao: string;
    autores: string;
    reu: string;
    advogados: string[];
    valor_principal: string;
    juros_moratorios: string;
    honorarios_adv: string;
    conteudo_publicacao: string;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md p-6 rounded-md shadow-lg overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-lg font-bold text-blue-800 mb-4">
          Publicação - {data.numero_processo}
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Data de publicação no DJE:</strong> {data.data_disponibilizacao}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Autor:</strong> {data.autores}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Réu:</strong> {data.reu}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Advogado(s):</strong> {data.advogados.join(', ')}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Valor principal bruto/ líquido:</strong> {data.valor_principal}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Valor dos juros moratórios:</strong> {data.juros_moratorios}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Valor dos honorários advocatícios:</strong> {data.honorarios_adv || 'N/A'}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Conteúdo da Publicação:</strong> {data.conteudo_publicacao}
        </p>
      </div>
    </div>
  );
};

export default Modal;
