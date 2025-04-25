import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FaBalanceScale, FaSearch } from 'react-icons/fa';
import KambanLayout from '../components/KambanLayout';
import Input from '../components/Input';
import Column from '../components/Column';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useKamban } from '../hooks/useKamban';

function Kamban() {
  const { columns, handleDrop, loading, error, fetchColumns } = useKamban();
  const [search, setSearch] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const handleFilter = () => {
    fetchColumns({ search, dateFrom, dateTo });
  };

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar publicações: {error}</p>;

  return (
    <KambanLayout>
      <DndProvider backend={HTML5Backend}>
        <>
          <div className="flex gap-4">
            <header className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                <FaBalanceScale className="text-blue-800" />
                Publicações
              </h1>
            </header>
            <div className="flex flex-1 flex-wrap justify-start md:justify-end items-center gap-4">
              <Input
                id="search"
                type="text"
                placeholder="Digite o número do processo ou nome das partes envolvidas"
                className="w-full max-w-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Data do diário</label>
                <div className="flex items-center gap-2">
                  <Input
                    id="dateFrom"
                    type="date"
                    placeholder="De"
                    labelPosition="side"
                    className="w-full max-w-[150px]"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />
                  <Input
                    id="dateTo"
                    type="date"
                    placeholder="Até"
                    labelPosition="side"
                    className="w-full max-w-[150px]"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                </div>
              </div>
              <Button loading={false} onClick={handleFilter}>
                <FaSearch className="text-white" />
              </Button>
            </div>
          </div>
          <div className="flex flex-1 overflow-x-auto mt-6">
            <div className="flex flex-1 gap-4 min-w-[800px]">
              {columns.map((column) => (
                <Column
                  key={column.title}
                  title={column.title}
                  items={column.items.map((item) => ({
                    ...item,
                    onClick: () => handleCardClick(item),
                  }))}
                  onDrop={(droppedItem) => handleDrop(droppedItem, column.title)}
                />
              ))}
            </div>
          </div>
          {selectedCard && (
            <Modal isOpen={!!selectedCard} onClose={closeModal} data={selectedCard} />
          )}
        </>
      </DndProvider>
    </KambanLayout>
  );
}

export default Kamban;
