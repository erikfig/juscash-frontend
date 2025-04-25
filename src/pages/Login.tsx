import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLogin } from '../hooks/requests/useLogin';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import CustomLink from '../components/Link';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { login, loading, error: loginError } = useLogin();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const response = await login({ username: data.email, password: data.password });
    if (!response.success) {
      setError('email', { message: 'Erro ao realizar login' });
    } else {
      console.log('Login bem-sucedido:', response.token);
      localStorage.setItem('token', response.token || '');
      toast.success('Autenticado com sucesso, bem vindo!');
      navigate('/kamban');
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="text-center mb-6">
        <img
          src="/login.png"
          alt="JusCash"
          className="mx-auto"
        />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          error={errors.email?.message}
          value="admin@admin.com"
          register={register}
        />
        <Input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          value="password"
          register={register}
        />
        {loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>}
        <div className="flex justify-center">
          <Button loading={loading}>Login</Button>
        </div>
      </Form>
      <CustomLink to="/register" text="Não possui uma conta? Cadastre-se" />
    </Layout>
  );
}

export default Login;
