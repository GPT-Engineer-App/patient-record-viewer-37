import React from "react";
import { VStack } from "@chakra-ui/react";
import PatientInfo from "../components/PatientInfo";
import PatientTimeline from "../components/PatientTimeline";

const Index = () => {
  return (
    <VStack spacing={8}>
      <PatientInfo />
      <PatientTimeline />
    </VStack>
  );
};

export default Index;
