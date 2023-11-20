import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser, setPassword, setUsername } from '@/redux/slices/authSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const auth = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const username = useSelector((state: RootState) => state.auth.username);
    const password = useSelector((state: RootState) => state.auth.password);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async () => {
        // if (!username || !password) {
        //     console.error('Имя пользователя и пароль обязательны для входа.');
        // } else {
        //     try {
        //         const response = await axios.post('http://localhost:5000/api/v1/users/login', {
        //             username,
        //             password,
        //         });
        //         const { token, userId } = response.data;
        //         if (token) {
        //             dispatch(loginUser({ token, userId }));
        //             localStorage.setItem('token', token);
        //             localStorage.setItem('userId', userId);
        //             router.push('/start');
        //         } else {
        //             console.error('Ошибка аутентификации: Токен не получен.');
        //         }
        //     } catch (error: any) {
        //         console.error(`Ошибка при попытке входа: ${error.response.data.message}`);
        //     }
        // }
    };

    return (
        <>
            <Head>
                <title>ASKPL | Авторизация</title>
            </Head>
            <div className="container mx-auto flex flex-col w-[300px] items-center justify-center h-screen">
                <h1 className="font-semibold text-2xl mb-4">Личный кабинет</h1>
                <form className="w-full">
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                            Имя пользователя
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => dispatch(setUsername(e.target.value))}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                type="checkbox"
                                id="remember"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                            />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                            Запомнить меня
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </>
    );
};

export default auth;
