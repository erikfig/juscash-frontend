/**
 * Componente de layout para páginas de autenticação.
 *
 * @example
 * <Layout>
 *   <Form onSubmit={handleSubmit}>
 *     <Input id="email" type="email" placeholder="Digite seu e-mail" />
 *     <Button loading={false}>Entrar</Button>
 *   </Form>
 * </Layout>
 *
 * @param {React.ReactNode} children - Elementos filhos renderizados dentro do layout.
 */
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white sm:bg-gray-100">
      <div className="w-full max-w-lg bg-white p-20 sm:shadow-md sm:min-h-screen sm:flex sm:items-center sm:justify-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
