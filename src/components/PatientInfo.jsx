import React from "react";
import { Box, VStack, HStack, Text, Avatar } from "@chakra-ui/react";
import { FaUserAlt, FaBirthdayCake, FaTransgender, FaIdCard } from "react-icons/fa";

const PatientInfo = ({ patient }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <VStack spacing={4} align="stretch">
        <HStack>
          <Avatar icon={<FaUserAlt />} />
          <Text fontWeight="bold">{patient.name}</Text>
        </HStack>
        <HStack>
          <FaBirthdayCake />
          <Text>{patient.dob}</Text>
        </HStack>
        <HStack>
          <FaTransgender />
          <Text>{patient.gender}</Text>
        </HStack>
        <HStack>
          <FaIdCard />
          <Text>{patient.ssn}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PatientInfo;
