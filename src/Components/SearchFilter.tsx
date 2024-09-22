import FlexRow from "../_ui/flex/FlexRow";
import { style } from "../styles/StyledConstants";

import React, { useState, ChangeEvent, useEffect, useCallback } from "react";
import {
  FormLabel,
  FormControl,
  Select,
  Button,
  Flex,
  Box,
  Text,
  Spinner, // Import Spinner for loading state
} from "@chakra-ui/react";
import LawyerList from "./LawyerList";
import { response } from "express";
import Loader from "../_ui/loader/Loader";

interface StateCityData {
  [state: string]: string[];
}
interface Lawyer {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  language: string;
  // Add more properties as needed
}

const stateCityData: StateCityData = {
  "New York": ["New York City", "Buffalo", "Rochester"],
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Maharastra: ["Pune", "Mumbai", "Nagpur"],
  Delhi: ["Delhi"],
  // Add more states and cities as needed
};

function SearchFilter() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [lawyers, setLawyers] = useState<string[]>([]);
  const [firstRender, setFirstRender] = useState<boolean>(false);

  const handleCombinedClick = () => {
    handleSearchClick();
    setFirstRender(true);
  };

  const languages = [
    "English",
    "Hindi",
    "Marathi",
    "German",
    "Chinese",
    // Add more languages as needed
  ];
  const practiceAreas = [
    "Criminal",
    "Family Issues",
    "Real Estate Law",
    "Personal Injury Law",
    "Corporate Law",
    // Add more practice areas as needed
  ];

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setCities(stateCityData[newState] || []);
    setSelectedCity("");
    setSelectedPracticeArea("");
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handlePracticeAreaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPracticeArea(event.target.value);
  };

  // Function to fetch lawyers based on selected filters
  const [filteredLawyers, setFilteredLawyers] = useState([]);

  // Call the API when the "Submit" button is clicked
  const handleSearchClick = () => {
    fetchLawyers();
  };

  // Function to fetch lawyers based on filters
  const fetchLawyers = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/search-lawyers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedState,
            city: selectedCity,
            language: selectedLanguage,
            specializations: selectedPracticeArea,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFilteredLawyers(data.lawyers);
      } else {
        console.error("Failed to fetch lawyers");
      }
    } catch (error) {
      console.error("An error occurred while fetching lawyers", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      selectedState ||
      selectedCity ||
      selectedLanguage ||
      selectedPracticeArea
    ) {
      fetchLawyers();
    }
  }, [selectedState, selectedCity, selectedLanguage, selectedPracticeArea]);

  return (
    <Box backgroundColor="#F7FAFC" padding="1rem">
      <Box>
        <Text
          textAlign="center"
          fontSize={style.font.h3}
          fontWeight={style.fontWeight.extraDark}
          marginBottom="1rem"
        >
          Find the Top Rated Lawyers
        </Text>
      </Box>
      <FlexRow hrAlign="space-evenly" padding="1rem">
        <FormControl width="20%">
          <FormLabel htmlFor="State" paddingLeft="1rem">
            Select State
          </FormLabel>
          <Select
            placeholder="Select State"
            value={selectedState}
            onChange={handleStateChange}
          >
            {Object.keys(stateCityData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl width="20%">
          <FormLabel htmlFor="City" paddingLeft="1rem">
            Select City
          </FormLabel>
          <Select
            placeholder="Select City"
            value={selectedCity}
            onChange={handleCityChange}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl width="20%">
          <FormLabel htmlFor="Language" paddingLeft="1rem">
            Select Language
          </FormLabel>
          <Select
            placeholder="Select Language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl width="20%">
          <FormLabel htmlFor="Language" paddingLeft="1rem">
            Select Specialization
          </FormLabel>
          <Select
            placeholder="Select Specialization"
            value={selectedPracticeArea}
            onChange={handlePracticeAreaChange}
          >
            {practiceAreas.map((specialization) => (
              <option key={specialization} value={specialization}>
                {specialization}
              </option>
            ))}
          </Select>
        </FormControl>
      </FlexRow>
      <FlexRow>
        <Button colorScheme="blue" mt={4} onClick={handleCombinedClick}>
          {loading ? <Spinner size="sm" color="white" /> : "Submit"}
        </Button>
      </FlexRow>

      {/* Display the list of fetched lawyers */}
      {loading ? (
        <Loader size="3rem" />
      ) : (
        <Box>
          <LawyerList
            firstRender={firstRender}
            filteredLawyers={filteredLawyers}
          />
        </Box>
      )}
    </Box>
  );
}

export default SearchFilter;
