import React from "react";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { IInstantDetails } from "../@types";

interface IWeattherCardProps {
  details?: IInstantDetails;
  loading: boolean;
}

const useStyles = makeStyles(() => ({
  paper: {
    width: 350
  },
  content: {
    margin: 16
  },
}))

const TemperatureNowCard = (props: IWeattherCardProps) => {
  const { loading, details } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {
        loading ? (
          <div className={classes.content}>
            <Grid container justifyContent={"space-evenly"}>
              <Skeleton variant="text" width={150} height={50} />
              <Skeleton variant="circular" width={50} height={50}/>
            </Grid>
          </div>
        ) : (
          <div className={classes.content}>
            <Grid container justifyContent={"space-evenly"}>
              <Typography variant="h6">
                {"Temperature now:"}
              </Typography>
              <Typography variant="h6" style={{ color: details && details.air_temperature > 0 ? "#E65147" : "#344FFE" }}>
                {details?.air_temperature}&#8451;
              </Typography>
            </Grid>
          </div>
        )
      }
    </Paper>
  )
}

export default TemperatureNowCard;