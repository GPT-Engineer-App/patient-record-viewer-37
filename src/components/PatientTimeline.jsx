import React from "react";

import { VStack, Box, Text } from "@chakra-ui/react";

const PatientTimeline = () => {
  const medicalRecords = [
    { id: 1, record_date: "2024-01-20", description: "Annual physical exam" },
    { id: 2, record_date: "2024-02-18", description: "Dental cleaning" },
    { id: 3, record_date: "2024-03-05", description: "Vaccination" },
  ];

  const sortedMedicalRecords = medicalRecords.sort((a, b) => new Date(a.record_date) - new Date(b.record_date));

  return (
    <VStack spacing={4} align="stretch">
      {sortedMedicalRecords.map((record) => (
        <Box key={record.id} p={5} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">Date: {record.record_date}</Text>
          <Text>Description: {record.description}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default PatientTimeline;
