/**
 * Componente de card arrastável para o sistema Kanban.
 *
 * @example
 * <DraggableCard
 *   id={1}
 *   text="Processo 123"
 *   time="3h"
 *   date="01/01/2023"
 *   onClick={() => console.log('Card clicado')}
 * />
 *
 * @param {number} id - Identificador único do card.
 * @param {string} text - Texto exibido no card.
 * @param {string} time - Tempo associado ao card.
 * @param {string} date - Data associada ao card.
 * @param {() => void} [onClick] - Função chamada ao clicar no card.
 */

import React from 'react';
import { useDrag } from 'react-dnd';

export interface DraggableCardProps {
  id: number;
  text: string;
  time: string;
  date: string;
  [key: string]: any;
  onClick?: () => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ id, text, time, date, onClick }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { id, text, time, date },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef as unknown as React.Ref<HTMLDivElement>}
      onClick={onClick}
      className={`bg-white p-4 rounded-md shadow-sm mb-2 cursor-pointer ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <p className="text-sm text-gray-700">{text}</p>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{time}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default DraggableCard;
