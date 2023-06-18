import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { setLoginStatusAndData } from '../store/customer/customerSlice';
import { LoginResponse } from '../types/customerSliceTypes';
import { useAppDispatch } from '../app/hooks';
import './Views.css';

const LOGIN: string = 'https://akademia108.pl/api/social-app/user/login';


const Login = (): JSX.Element => {

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
 
    const readUserName = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setUserName(event.currentTarget.value);
    }

    const readPassword = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setPassword(event.currentTarget.value);
    }

    const loginUser = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        axios
            .post(LOGIN, {
                username: userName,
                password: password,
            })
            .then((response: LoginResponse) => {
                const status = response.status;
                const data = response.data;
                if (status !== 200) {
                    console.error(status);
                } else {
                    dispatch(setLoginStatusAndData({
                        isLogged: true,
                        jwt_token: data.jwt_token,
                    }));
                    window.localStorage.setItem(data.id.toString(), JSON.stringify(data));
                    navigate('/');
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <form className="form" onSubmit={loginUser}>
            <input className="input" placeholder="Nazwa użytkownika" onChange={readUserName} />
            <input className="input" placeholder="Hasło" onChange={readPassword} />
            <button className="button" type="submit">Zaloguj się</button>
        </form>
    );
}

export default Login;
