const displayUserLocation = () => {
    getUserLocation((latitude, longitude) => console.log(`${latitude},${longitude}`));
} 

const getUserLocation = (callback) => {
    navigator.geolocation.getCurrentPosition(position => {
        // console.log(position); // {timestmap: ....., coords: {latitude: ...., longitude:....}}
        callback(position.coords.latitude, position.coords.longitude )
    });
}