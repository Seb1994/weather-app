import React, { useEffect, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { getCurrentUserLocation } from "../utils";
import { fetchForecastByCoordinates } from '../api';
import WeatherCard from '../components/TemperatureNowCard';
import ForecastTable from "../components/ForecastTable";
import mapResponseToData from '../utils/mapResponseToData';
import { TTimeseries } from '../@types';

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#1A5276",
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    margin: 32
  }
}));

function App() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    lastUpdated: string;
    timeseries: TTimeseries;
  }>({
    lastUpdated: "",
    timeseries: [],
  });

  const fetchData = () => {
    setLoading(true);
    getCurrentUserLocation().then((position) => {
      const { coords } = position;
      const { latitude, longitude } = coords;
      fetchForecastByCoordinates({ latitude, longitude }).then(({ properties }) => {
        const values = mapResponseToData(properties);
        setData(values);
        setLoading(false);
      });
    });
  }

  // Get user's location and fetch forecast onMount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.app}>
      <AppBar position='static' style={{ backgroundColor: "#154360" }}>
        <Toolbar style={{ margin: 16, justifyContent: "center" }}>
          <Typography variant="h5">
            {"Forecast"}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <WeatherCard details={data?.timeseries[0]?.data?.instant?.details} loading={loading} />
      </div>
      <div className={classes.content}>
        <ForecastTable
          timeseries={data?.timeseries}
          loading={loading}
          onRefresh={() => fetchData()}
        />
      </div>
    </div>
  );
}

export default App;
