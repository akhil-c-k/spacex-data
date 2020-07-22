export const userService = {
    login,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`https://run.mocky.io/v3/dcfb80be-9ca0-42f9-a3e7-14fed36e5b85`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('Token', data.Token);
             console.log(data.Token,"test")
            return data;
        });
}