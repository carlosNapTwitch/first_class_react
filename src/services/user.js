const useUser = () => {
    const users = {
        login: (userData) => {
            console.log('estoy haciendo login', userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
        },
        logout: () => {
            localStorage.removeItem('user');
        },
        isUserLogged: () => {
            console.log('userData', localStorage.getItem('user'));
            return localStorage.getItem('user') || false;
        }
    }

    return { ...users };
}

export default useUser;