function preloaderOn() {
    return {
        type: 'PRELOADER_ON',
    }
}

function preloaderOff() {
    return { 
        type: 'PRELOADER_OFF'
    }
}


export function addUserAction(user) {
        return async function (dispatch) {

            dispatch(preloaderOn())

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }


            const response = await fetch('https://jsonplaceholder.typicode.com/users', options)

            if (response.status >= 200 || response.status <= 204) {
                dispatch(preloaderOff())
            }
            else if (response.status === 404) {
                dispatch(preloaderOff())
            }
        }
}