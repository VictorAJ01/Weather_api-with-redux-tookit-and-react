import { Box } from "@chakra-ui/react";
import React from "react";
import Chart from "react-google-charts";
// import { useSelector } from "react-redux";

const WeatherChart = () => {
  // const { chartData } = useSelector((state) => state.weather);
  const options = {
    title: "Weather Performance",
    subtitle: "The weather condition of your city",
    colors: ["#060623", "#2771A5"],
    hAxis: {
      title: "Humidity",
    },
    vAxis: {
      title: "Pressure",
    },
  };
  const data = [
    ["Year", "Pressure", "Humidity"],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
  ];
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Chart
        chartType="Bar"
        width={"100vh"}
        height={"480px"}
        data={data}
        options={options}
      />
    </Box>
  );
};

export default WeatherChart;
