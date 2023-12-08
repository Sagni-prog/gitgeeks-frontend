const clientId = '6471a53e18f76b70e862';
const scope = 'user:email';

export const redirectToGithub = () =>{
    const redirectUri = encodeURIComponent('http://localhost:5173/auth/github/callback');
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
}