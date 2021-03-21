
function Login() {
    const credentials = {};
    const setCredetntials = (type, value) => credentials[type] = value;
    const performLogin = () => {
        fetch('http://localhost:14700/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(res => res.json().then(jRes => console.log(jRes)));
    }

    return <div>
        <label>
            Username:
            <input onChange={e => setCredetntials('user', e.target.value)} />
        </label>
        <label>
            Password:
            <input onChange={e => setCredetntials('pass', e.target.value)} />
        </label>
        <button onClick={performLogin}>Login</button>
    </div>
}

export default Login;