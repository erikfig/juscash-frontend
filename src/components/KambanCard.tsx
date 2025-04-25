/**
 * Componente de card para exibir itens em uma coluna do Kanban.
 *
 * @example
 * <KambanCard
 *   title="Nova Publicação"
 *   items={[
 *     { id: '1', text: 'Processo 123', time: '3h', date: '01/01/2023' },
 *     { id: '2', text: 'Processo 456', time: '5h', date: '02/01/2023' },
 *   ]}
 *   emptyMessage="Nenhuma publicação disponível"
 * />
 *
 * @param {string} title - Título do card.
 * @param {Array} items - Lista de itens a serem exibidos no card.
 * @param {string} [emptyMessage] - Mensagem exibida quando não há itens.
 */
import React from 'react';

interface KambanCardProps {
  title: string;
  items: Array<{
    id: string;
    text: string;
    time: string;
    date: string;
  }>;
  emptyMessage?: string;
}

const KambanCard: React.FC<KambanCardProps> = ({ title, items, emptyMessage }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-md shadow-sm mb-2">
            <p className="text-sm text-gray-700">{item.text}</p>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>{item.time}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">{emptyMessage || 'Nenhum item encontrado'}</p>
      )}
    </div>
  );
};

export default KambanCard;
