const getData = () => {
    return fetch('./database/db.json')
        .then(result => result.json())
        .catch(error => console.log(error));
};

const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).catch(error => console.log(error))
};

getData()
    .then(data => sendData(data))
    .catch(error => console.log(error))
