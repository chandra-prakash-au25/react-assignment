import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routePaths';
import Login from '../../components/login/Login';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e:{
      username: string,
      password: string
    }) => {
        localStorage.setItem('username', e.username);
        localStorage.setItem('password', e.password);
        navigate(ROUTES.HOME);
    };

    const handleCreateAccount = () => {
        //navigate(ROUTES.SIGNUP);
    };

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password) {
      navigate(ROUTES.HOME);
    }
  }, []);

    return (
        <Login
            onSubmit={handleSubmit}
            onCreateAccount={handleCreateAccount}
        />
    );
};

export default LoginPage;