/**
 * Componente de formulário reutilizável.
 *
 * @example
 * <Form onSubmit={handleSubmit}>
 *   <Input id="email" type="email" placeholder="Digite seu e-mail" />
 *   <Button loading={false}>Enviar</Button>
 * </Form>
 *
 * @param {React.FormEvent<HTMLFormElement>} onSubmit - Função chamada ao submeter o formulário.
 * @param {React.ReactNode} children - Elementos filhos do formulário.
 */
import React from 'react';

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
