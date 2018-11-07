const BASE_URL = 'http://timtweet.herokuapp.com/api/';


export function doPost(endPoint, body) {

    return new Promise((onSuccess, onError) => {
        fetch(BASE_URL + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(respJson => {
                onSuccess(respJson);
            })
            .catch(error => onError(error))
    })
}

export function doGet(endPoint, body) {

    return new Promise((onSuccess, onError) => {
        fetch(BASE_URL + endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(respJson => {
                onSuccess(respJson);
            })
            .catch(error => onError(error))
    })
}

export function doPut(endPoint, body) {

    return new Promise((onSuccess, onError) => {
        fetch(BASE_URL + endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(respJson => {
                onSuccess(respJson);
            })
            .catch(error => onError(error))
    })
}

export function doDelete(endPoint, body) {

    return new Promise((onSuccess, onError) => {
        fetch(BASE_URL + endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(respJson => {
                onSuccess(respJson);
            })
            .catch(error => onError(error))
    })
}