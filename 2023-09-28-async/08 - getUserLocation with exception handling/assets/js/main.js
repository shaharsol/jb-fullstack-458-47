const displayUserLocation = () => {
    getUserLocation(
        (latitude, longitude) => console.log(`${latitude},${longitude}`),
        err => alert(err)
    );
} 

const getUserLocation = (successCallback, errorCallback) => {
    try {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position); // {timestmap: ....., coords: {latitude: ...., longitude:....}}
            successCallback(position.coords.latitude, position.coords.longitude )
        });
    
    } catch (err) {
        errorCallback(err);
    }
}