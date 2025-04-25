# JusCash Frontend

## Visão Geral do Projeto

O **JusCash Frontend** é uma aplicação web desenvolvida em React com TypeScript, utilizando bibliotecas como `react-router-dom` para roteamento, `react-dnd` para funcionalidades de arrastar e soltar, e `tailwindcss` para estilização. A aplicação implementa um sistema Kanban para gerenciar publicações jurídicas, permitindo que os usuários filtrem, visualizem e movam publicações entre colunas.

## Requisitos para Execução Local

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Servidor Backend** configurado e rodando na URL `http://localhost:3000`

## Instruções de Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/erikfig/juscash-frontend.git
   cd juscash-frontend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**:
   Abra o navegador e acesse `http://localhost:5173`.

## Estrutura do Projeto e Arquivos

Abaixo está uma visão geral da estrutura do projeto e a descrição dos principais arquivos e diretórios:

```
src/
├── components/         # Componentes reutilizáveis da aplicação
│   ├── Button.tsx      # Componente de botão com suporte a loading
│   ├── Input.tsx       # Componente de input com validação e estilos
│   ├── Modal.tsx       # Componente de modal para exibir detalhes de publicações
│   ├── Column.tsx      # Componente de coluna do Kanban
│   ├── DraggableCard.tsx # Componente de card arrastável
│   ├── KambanLayout.tsx # Layout principal da página Kanban
│   └── Layout.tsx      # Layout para páginas de login e registro
├── hooks/              # Hooks personalizados
│   ├── useKamban.ts    # Hook para gerenciar o estado e lógica do Kanban
│   └── usePublications.ts # Hook para interagir com o serviço de publicações
├── pages/              # Páginas principais da aplicação
│   ├── Login.tsx       # Página de login
│   ├── Register.tsx    # Página de registro
│   └── Kamban.tsx      # Página principal com o sistema Kanban
├── services/           # Serviços para comunicação com o backend
│   └── publicationsService.ts # Serviço para gerenciar publicações
├── utils/              # Utilitários e funções auxiliares
│   ├── motionWrapper.tsx # Wrapper para animações de transição entre páginas
│   ├── handleUnauthorized.ts # Função para lidar com erros de autenticação
│   └── getToken.ts     # Função para obter o token de autenticação
├── App.tsx             # Componente principal da aplicação
├── main.tsx            # Ponto de entrada da aplicação
├── index.css           # Estilos globais utilizando TailwindCSS
└── index.html          # Arquivo HTML principal
```

## Explicação do Fluxo de Trabalho do Kanban

O sistema Kanban implementado na aplicação permite gerenciar publicações jurídicas de forma visual e interativa. Abaixo está uma explicação do fluxo de trabalho:

1. **Colunas do Kanban**:
   - As publicações são organizadas em colunas, como "Nova Publicação", "Publicação Lida", "Enviar para Advogado Responsável" e "Concluído".
   - Cada coluna representa um estado do fluxo de trabalho.

2. **Cards Arrastáveis**:
   - Cada publicação é representada por um card que pode ser arrastado e solto entre as colunas.
   - O componente `react-dnd` é utilizado para implementar essa funcionalidade.

3. **Filtragem de Publicações**:
   - Os usuários podem filtrar publicações utilizando os campos de busca e intervalo de datas.
   - Os filtros são enviados como query string para o backend.

4. **Visualização de Detalhes**:
   - Ao clicar em um card, um modal é aberto exibindo todas as informações detalhadas da publicação.

5. **Atualização de Status**:
   - Quando um card é movido para outra coluna, o status da publicação é atualizado no backend.

6. **Fluxo de Dados**:
   - O hook `useKamban` gerencia o estado das colunas e interage com o backend para buscar e atualizar publicações.
   - O serviço `publicationsService` é responsável por realizar as requisições HTTP.

---

### Observações

- Certifique-se de configurar o backend corretamente para que a aplicação funcione como esperado.
- Para personalizar o estilo, edite os arquivos CSS no diretório `src/index.css` ou utilize classes do TailwindCSS diretamente nos componentes.

