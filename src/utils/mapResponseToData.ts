const mapResponseToData = (response: any) => {
  const data = {
    lastUpdated: response.meta.updated_at,
    timeseries: response.timeseries
  }

  return data;
}

export default mapResponseToData;