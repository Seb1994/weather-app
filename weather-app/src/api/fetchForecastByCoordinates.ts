import { apiUrl } from "./utils";

interface IFetchForecastByCoordinatesParam {
  altitude?: number;
  latitude: number;
  longitude: number;
}

const fetchForecastByCoordinates = async (parameters: IFetchForecastByCoordinatesParam) => {
  const {altitude, latitude, longitude} = parameters;
  const requestURl = `${apiUrl}locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`;
  return (await fetch(requestURl)).json();
}


export default fetchForecastByCoordinates;