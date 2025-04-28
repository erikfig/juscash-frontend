import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import CustomLink from '../components/Link';

function Register() {
  const schema = yup.object().shape({
    fullName: yup.string().required('Seu nome completo é obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
      .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
      .matches(/[@$!%*?&#]/, 'A senha deve conter pelo menos um caractere especial'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'A confirmação de senha não corresponde.')
      .required('Confirmação de senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { fullName: string; email: string; password: string }) => {
    try {
      console.log('Dados enviados:', data);

      toast.success('Cadastro não implementado no servidor');
    } catch (error: any) {
      setError('email', { message: error.message });
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="text-center mb-6">
        <img
          src={`${import.meta.env.VITE_BASE_URL}/login.png`}
          alt="JusCash"
          className="mx-auto"
        />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="fullName"
          type="text"
          placeholder="Seu nome completo"
          error={errors.fullName?.message}
          register={register}
          required
        />
        <Input
          id="email"
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          register={register}
          required
        />
        <Input
          id="password"
          type="password"
          placeholder="Senha"
          error={
            errors.password?.message
          }
          register={register}
          required
        />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          error={errors.confirmPassword?.message}
          register={register}
          required
        />
        <CustomLink
          to="/login"
          text="Já possui uma conta? Fazer o login"
          textAlign="right"
        />
        <div className="flex justify-center">
          <Button loading={false}>Criar conta</Button>
        </div>
      </Form>
    </Layout>
  );
}

export default Register;
