/**
 * Componente de coluna para o sistema Kanban.
 *
 * @example
 * <Column
 *   title="Nova Publicação"
 *   items={[
 *     { id: 1, text: 'Processo 123', time: '3h', date: '01/01/2023', onClick: () => console.log('Card clicado') },
 *   ]}
 *   onDrop={(item, column) => console.log(`Item ${item.id} movido para a coluna ${column}`)}
 * />
 *
 * @param {string} title - Título da coluna.
 * @param {Array} items - Lista de itens (cards) na coluna.
 * @param {(item: DraggableCardProps, column: string) => void} onDrop - Função chamada ao soltar um card na coluna.
 */

import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableCard, { DraggableCardProps } from './DraggableCard';

interface ColumnProps {
  title: string;
  items: (DraggableCardProps & { onClick?: () => void })[];
  onDrop: (item: DraggableCardProps, column: string) => void;
}

const Column: React.FC<ColumnProps> = ({ title, items, onDrop }) => {
  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop: (item: DraggableCardProps) => onDrop(item, title),
  });

  return (
    <div ref={dropRef as unknown as React.Ref<HTMLDivElement>} className="bg-gray-100 p-4 rounded-md shadow-sm flex-1">
      <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
      {items.length > 0 ? (
        items.map((item) => (
          <DraggableCard key={item.id} {...item} onClick={item.onClick} />
        ))
      ) : (
        <p className="text-sm text-gray-500">Nenhum item encontrado</p>
      )}
    </div>
  );
};

export default Column;
