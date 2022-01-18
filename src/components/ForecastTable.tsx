import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import { TTimeseries } from "../@types";
import { sortTimeseriesByDate } from "../utils";
import { symbolToIcon } from "../assets/icons";

interface IForecastTable {
  loading: boolean;
  timeseries: TTimeseries;
  onRefresh?(): void;
}

const ForecastTable = (props: IForecastTable) => {
  const { timeseries, loading = false, onRefresh } = props;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Each date has own row
  const dates = sortTimeseriesByDate(timeseries, days);

  return (
    <TableContainer component={Paper}>
      {loading && <LinearProgress />}
      <Table aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <IconButton onClick={onRefresh}>
                <RefreshIcon color={loading ? "disabled" : "action"} />
              </IconButton>
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {timeseries?.length >= 1 && dates?.map((values, index) => {
            // Pick median hour for main table
            const medianHour = Math.round(values.length / 2);
            const midDay = values[medianHour].data;
            return (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="h6">
                    {days[(new Date(values[medianHour].time).getDay())]}
                  </Typography>
                  <Typography variant="h6" style={{ color: midDay.instant.details.air_temperature > 0 ? "#E65147" : "#344FFE" }}>
                    {values[medianHour].data.instant.details.air_temperature}&#8451;
                  </Typography>
                </TableCell>
                <TableCell>
                  {symbolToIcon[values[medianHour].data.next_1_hours?.summary.symbol_code]}
                </TableCell>
                <TableCell>
                  {symbolToIcon[values[medianHour].data.next_6_hours?.summary.symbol_code]}
                </TableCell>
                <TableCell>
                  {symbolToIcon[values[medianHour].data.next_12_hours?.summary.symbol_code]}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default ForecastTable;