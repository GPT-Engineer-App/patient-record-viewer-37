import React from "react";
import { VStack } from "@chakra-ui/react";
import PatientInfo from "../components/PatientInfo";

const Index = () => {
  return (
    <VStack spacing={8}>
      <PatientInfo />
    </VStack>
  );
};

export default Index;
