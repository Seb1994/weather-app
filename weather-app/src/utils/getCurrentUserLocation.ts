const getCurrentUserLocation = async (): Promise<GeolocationPosition> => {
 return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
}

export default getCurrentUserLocation;