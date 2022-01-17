import { TTimeseries } from "../@types";

// Sort timeseries into batches of arrays by dates
const sortTimeseriesByDate = (timeseries: TTimeseries, days: Array<string>) => {
  // a day in seconds
  const day = 86400000;

  const sortedArray = days.map((_, index) => {
    const currentDate = new Date(new Date().getTime() + (day * index));
    return timeseries?.filter((value) => (new Date(value.time).getDate() === currentDate.getDate()));
  });

  return sortedArray;
}

export default sortTimeseriesByDate;