import { Box, Heading, HStack, Text, Divider, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { CgCompressV } from "react-icons/cg";
import { BsSunFill, BsWind, BsFillEyeFill } from "react-icons/bs";
import Chart from "react-google-charts";

const Success = () => {
  const { forecast } = useSelector((state) => state.weather);
  const [data, setData] = useState();

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

  React.useEffect(() => {
    let data;
    if (Object.keys(forecast).length > 0) {
      let chartGraph = forecast.forecast?.forecastday[0].hour.map(
        (val, indx) => {
          return [
            val.time,
            forecast.forecast?.forecastday[0].hour[indx].pressure_in,
            forecast.forecast?.forecastday[0].hour[indx].humidity,
          ];
        }
      );
      data = chartGraph;
      data.unshift(["Time", "Presssure", "Humidity"]);
      setData(data);
    }
  }, [forecast]);

  return (
    <Box
      bgColor="#060623"
      paddingY="3rem"
      color="#fff"
      //   display="flex"
      alignItems="center"
      paddingX={{ lg: "1rem" }}
    >
      <Box
        bgColor="#030315"
        width={"100vh"}
        borderRadius={{ base: ".4rem", md: "1rem", lg: ".5rem" }}
        paddingY={{ base: "1rem", md: "2rem", lg: "3rem" }}
        paddingX={{ lg: ".8rem" }}
        display="flex"
        flexDirection="column"
        boxShadow="1px 3px 6px 3px #090937"
        marginX="auto"
      >
        <Heading fontSize={{ lg: "2.5rem" }}>
          {forecast?.location?.region}, {forecast?.location?.country}
        </Heading>
        <Text fontWeight="500">{forecast?.location?.localtime}</Text>
        <Box paddingTop={{ lg: "2.4rem" }} paddingBottom={{ lg: "2.5rem" }}>
          <Heading fontSize={{ lg: "5rem" }} textAlign="left">
            {forecast?.current?.cloud}
            <sup> ο</sup>
          </Heading>
          <Heading marginTop="-.5rem">Cloudy</Heading>
        </Box>
        <Flex gap="1rem">
          <Box width={{ lg: "50%" }}>
            <Divider orientation="horizontal" />
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack>
                  <FaTemperatureHigh />
                  <Text paddingY={{ lg: ".5rem" }}>Temperature</Text>
                </HStack>
                <Text>
                  {forecast?.current?.temp_c}
                  <sup> ο</sup>
                </Text>
              </Flex>
            </Box>
            <Divider orientation="horizontal" />
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack>
                  <BsDropletHalf />
                  <Text paddingY={{ lg: ".5rem" }}>Humidity</Text>
                </HStack>
                <Text>{forecast?.current?.humidity}%</Text>
              </Flex>
            </Box>
            <Divider orientation="horizontal" />
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack>
                  <CgCompressV />
                  <Text paddingY={{ lg: ".5rem" }}>Pressure</Text>
                </HStack>
                <Text>{forecast?.current?.pressure_in}in</Text>
              </Flex>
            </Box>
            <Divider orientation="horizontal" />
          </Box>

          <Box width={{ lg: "50%" }}>
            <Divider orientation="horizontal" />
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack>
                  <BsSunFill />
                  <Text paddingY={{ lg: ".5rem" }}>UV Index</Text>
                </HStack>
                <Text>{forecast?.current?.uv}</Text>
              </Flex>
            </Box>
            <Divider orientation="horizontal" />
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack>
                  <BsWind />
                  <Text paddingY={{ lg: ".5rem" }}>Wind</Text>
                </HStack>
                <Text>{forecast?.current?.wind_degree}%</Text>
              </Flex>
            </Box>
            <Divider orientation="horizontal" />
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack>
                  <BsFillEyeFill />
                  <Text paddingY={{ lg: ".5rem" }}>Visiblity</Text>
                </HStack>
                <Text>{forecast?.current?.vis_km}km</Text>
              </Flex>
            </Box>
            <Divider orientation="horizontal" />
          </Box>
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingY={{ lg: "3rem" }}
      >
        <Chart
          chartType="Bar"
          width={"100vh"}
          height={"480px"}
          data={data}
          options={options}
        />
      </Box>
    </Box>
  );
};

export default Success;
