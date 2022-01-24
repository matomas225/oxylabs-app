import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../Configs/Api';
import endpoints from '../Configs/Endpoints';

interface Payload {
  [x: string]: string;
}

interface LoginProps {
  data: Payload;
  setCookie: (name: 'x-access-token', value: string, options?: object) => void;
  navigate: NavigateFunction;
}

function Login({ data, setCookie, navigate }: LoginProps) {
  axios
    .post(api.oxylabs + endpoints.user_login, data)
    .then((response) => {
      setCookie('x-access-token', response.data.token, {
        path: '/',
        maxAge: 86400,
      });
      navigate('/dashboard');
      toast.success('Loged In!');
    })
    .catch(() => {
      toast.error('Failed to Login!');
    });
}

export default Login;
