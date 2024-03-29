import React, { useState } from "react";
import { Input, Button, HStack, VStack, Box, Text } from "@chakra-ui/react";

const PatientSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockPatients = ["John Doe", "Jane Smith", "Emily Johnson", "Michael Brown"];
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Search for: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <HStack>
        <Input
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);
            if (value.length > 0) {
              const filteredSuggestions = mockPatients.filter((patient) => patient.toLowerCase().includes(value.toLowerCase()));
              setSuggestions(filteredSuggestions);
            } else {
              setSuggestions([]);
            }
          }}
        />
        <Button colorScheme="blue" type="submit">
          Validate
        </Button>
      </HStack>
      {suggestions.length > 0 && (
        <VStack align="stretch" mt={2}>
          {suggestions.map((suggestion, index) => (
            <Box
              key={index}
              p={2}
              bg="gray.100"
              cursor="pointer"
              onClick={() => {
                const selectedPatientData = mockPatients.find((p) => p === suggestion);
                setSearchTerm(suggestion);
                setSuggestions([]);
                if (selectedPatientData) {
                  const patientData = {
                    name: selectedPatientData,
                    dob: "1990-01-01",
                    gender: "Unknown",
                    ssn: "000-00-0000",
                  };
                  props.onPatientSelect(patientData);
                }
              }}
            >
              <Text>{suggestion}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </form>
  );
};

export default PatientSearch;
