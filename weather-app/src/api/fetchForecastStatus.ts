import { apiUrl } from "./utils";

const fetchForecastStatus = async () => {
  const requestUrl = `${apiUrl}locationforecast/2.0/status`;
  return (await fetch(requestUrl)).json();
}

export default fetchForecastStatus;