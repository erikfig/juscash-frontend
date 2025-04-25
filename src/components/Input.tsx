/**
 * Componente de input reutilizável com suporte a validação e estilos.
 *
 * @example
 * <Input
 *   id="email"
 *   type="email"
 *   placeholder="Digite seu e-mail"
 *   error="E-mail inválido"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 *
 * @param {string} id - Identificador único do input.
 * @param {string} [error] - Mensagem de erro exibida abaixo do input.
 * @param {any} [register] - Função de registro para integração com bibliotecas de formulários.
 * @param {boolean} [required] - Indica se o campo é obrigatório.
 * @param {'top' | 'side'} [labelPosition] - Posição da label em relação ao input.
 * @param {string} [className] - Classes CSS adicionais.
 */
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  register?: any;
  required?: boolean;
  labelPosition?: 'top' | 'side';
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, error, register, type, required = false, labelPosition = 'top', className, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`mb-4 ${labelPosition === 'side' ? 'flex items-center gap-4' : ''} ${className}`}>
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-gray-700 truncate ${
          labelPosition === 'side' ? 'mb-0' : ''
        }`}
      >
        {props.placeholder} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative flex-1">
        <input
          id={id}
          type={type === 'password' && showPassword ? 'text' : type}
          {...(register ? register(id) : {})}
          {...props}
          className={`mt-1 block w-full px-3 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
