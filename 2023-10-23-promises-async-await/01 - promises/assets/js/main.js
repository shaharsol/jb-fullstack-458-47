// get user location with callbacks
const displayUserLocation = () => {
    getUserLocation(
        data => console.log(data),
        err => console.error(err)
    )
}

const getUserLocation = (successCallback, errorCallback) => {
    navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
    )
}

// promise has 3 possible states:
// 1. pending
// 2. resolved
// 3. rejected

// get user location with promises
const displayUserLocationWithPromise = () => {
    getUserLocationWithPromise()
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(() => { console.log('finished processing.')})
    
}

const getUserLocationWithPromise = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (data) => resolve(data),
            (err) => reject(err)
        );
    });

    
}