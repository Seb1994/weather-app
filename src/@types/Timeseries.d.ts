import TWeatherSymbol from "./WeatherSymbol";

interface IInstantDetails {
  air_pressure_at_sea_level: number;
  air_temperature: number;
  cloud_area_fraction: number;
  relative_humidity: number;
  wind_from_direction: number;
  wind_speed: number;
}

interface IInstant {
  details: IInstantDetails;
}

interface INextHours {
  details: { precipitation_amount: number; };
  summary: { symbol_code: TWeatherSymbol; };
}

interface IData {
  instant: IInstant;
  next_1_hours: INextHours;
  next_6_hours: INextHours;
  next_12_hours: Omit<INextHours, "details">;
}

interface ITimeData {
  data: IData;
  time: string;
}

type TTimeseries = Array<ITimeData>;

export { IInstantDetails };
export default TTimeseries;