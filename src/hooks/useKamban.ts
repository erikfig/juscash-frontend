import { useEffect, useState } from 'react';
import { usePublications } from './requests/usePublications';
import { DraggableCardProps } from '../components/DraggableCard';

interface ColumnData {
  title: string;
  role: string;
  items: DraggableCardProps[];
}

export const useKamban = () => {
  const { listAll, update, loading, error } = usePublications();
  const [columns, setColumns] = useState<ColumnData[]>([
    { title: 'Nova Publicação', role: 'nova', items: [] },
    { title: 'Publicação Lida', role: 'lido', items: [] },
    { title: 'Enviar para Advogado Responsável', role: 'enviado', items: [] },
    { title: 'Concluído', role: 'concluido', items: [] },
  ]);

  const fetchColumns = async (filters: Record<string, string> = {}) => {
    const data = await listAll(filters);
    if (data) {
      const mappedColumns = columns.map((column) => ({
        ...column,
        items: data
          .filter((item: DraggableCardProps) => item.status === column.role)
          .map((item: DraggableCardProps) => ({
            ...item,
            text: item.numero_processo || 'Sem número de processo',
            time: '3h',
            date: item.data_disponibilizacao
              ? new Date(item.data_disponibilizacao).toLocaleDateString('pt-BR')
              : 'Sem data',
          })),
      }));
      setColumns(mappedColumns);
    }
  };

  useEffect(() => {
    fetchColumns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrop = async (item: DraggableCardProps, targetColumn: string) => {
    const targetRole = columns.find((column) => column.title === targetColumn)?.role;

    if (!targetRole) return;

    try {
      await update(item.id.toString(), { status: targetRole });

      setColumns((prevColumns) => {
        const sourceColumn = prevColumns.find((column) =>
          column.items.some((card) => card.id === item.id)
        );

        if (!sourceColumn) return prevColumns;

        const cardToMove = sourceColumn.items.find((card) => card.id === item.id);

        if (!cardToMove) return prevColumns;

        const updatedColumns = prevColumns.map((column) => {
          if (column.title === sourceColumn.title) {
            return {
              ...column,
              items: column.items.filter((card) => card.id !== item.id),
            };
          }

          if (column.title === targetColumn) {
            return {
              ...column,
              items: [...column.items, { ...cardToMove, status: targetRole }].sort(
                (a, b) => a.id - b.id
              ),
            };
          }

          return {
            ...column,
            items: column.items.sort((a, b) => a.id - b.id),
          };
        });

        return updatedColumns;
      });
    } catch (err) {
      console.error('Erro ao atualizar o status no backend:', err);
    }
  };

  return { columns, handleDrop, loading, error, fetchColumns };
};
