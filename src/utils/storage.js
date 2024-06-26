
const storage = {
    setUser: (userDate) => {
        localStorage.setItem('user',JSON.stringify(userDate));
    },
    getUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },
    removeUser: () => {
        localStorage.removeItem('user');
    },
    
    
    setToken: (token) => {
        localStorage.setItem('token',token);
    },
    getToken: () => {
        return localStorage.getItem('token');
    },
    revoveToken: () => {
        localStorage.removeItem('token')
    },
    setToggle: (toggle) => {
        localStorage.setItem('toggle',toggle)
    },
    getToggle: () => {
        return localStorage.getItem('toggle')
    } 
}

export default storage