const auth = () => {
    return (
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
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default auth;
