import {
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "../../assets/stylesheet/index.css";
import Image from "../../assets/images/cloud_sun_sunny_weather_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./weatherSlices";
import { useNavigate } from "react-router-dom";

const { useState } = React;

function Weather({ submitSearch }) {
  const [location, setLocation] = useState("");
  const weather = useSelector((state) => state.weather.forecast);
  console.log(weather);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    dispatch(fetchWeatherData(location));
    submitSearch(location);
    navigate("../success");
  };

  return (
    <Box
      bgColor="#060623"
      height="auto"
      color="#fff"
      display="flex"
      flexDirection="column"
      alignItems="center"
      // justifyContent={{ base: "initial", md: "center", lg: "center" }}
      paddingTop={{ base: "5rem", md: "10rem", lg: "5rem" }}
      paddingBottom={{ base: "5rem", md: "10rem", lg: "5rem" }}
    >
      <Heading
        fontWeight="900"
        fontSize={{ base: "2.3rem", md: "3rem", lg: "3.5rem" }}
        paddingBottom={{ base: "1rem", md: "1.5rem", lg: "2.5rem" }}
      >
        React Weather App
      </Heading>
      <Box
        bgColor="#030315"
        width={{ base: "22rem", md: "40rem", lg: "40rem" }}
        borderRadius={{ base: ".4rem", md: "1rem", lg: ".5rem" }}
        paddingY={{ base: "1rem", md: "2rem", lg: "3rem" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow="1px 3px 6px 3px #090937"
      >
        <Heading
          fontWeight="900"
          fontSize={{ base: "1.5rem", md: "2.5rem", lg: "2.5rem" }}
        >
          <span className="fontWeight">Weather </span>Forecast
        </Heading>
        <Box width={{ base: "50%", md: "60%", lg: "50%" }}>
          <img src={Image} alt="cloudImage" />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text
            paddingBottom={{ base: "5%", lg: "1rem" }}
            fontSize={{ base: "1rem", md: "1.5rem", lg: "1.3rem" }}
          >
            Find the Weather Condition of your City
          </Text>
          <FormControl onSubmit={handleSumbit}>
            <Box>
              <Input
                type="text"
                borderRadius=".6rem"
                width={{ base: "17.5rem", md: "26rem", lg: "26rem" }}
                height={{ base: "1.9rem", md: "3rem", lg: "3.4rem" }}
                placeholder="London"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Box>
            <Box>
              <Button
                type="submit"
                backgroundImage="linear-gradient(180deg, #25AAE1 0%, #2771A5 100%)"
                width={{ base: "17.5rem", md: "26rem", lg: "26rem" }}
                height={{ base: "1.9rem", md: "3rem", lg: "3.4rem" }}
                borderRadius={{ base: ".6rem", md: ".7rem", lg: "1rem" }}
                fontSize={{ base: ".7rem", md: "1rem", lg: "1rem" }}
                className="font2"
                marginX="auto"
                marginTop={{ base: "5%", lg: "1.5rem" }}
                onClick={handleSumbit}
                _hover={{
                  backgroundImage:
                    "linear-gradient(180deg, #25AAE1 0%, #2771A5 100%)",
                }}
                _active={{
                  backgroundImage:
                    "linear-gradient(180deg, #25AAE1 0%, #2771A5 100%)",
                }}
              >
                Search
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

export default Weather;
