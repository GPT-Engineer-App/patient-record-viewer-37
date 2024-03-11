import React from "react";
import { VStack } from "@chakra-ui/react";
import PatientSearch from "../components/PatientSearch";
import PatientInfo from "../components/PatientInfo";
import PatientTimeline from "../components/PatientTimeline";

import { useEffect, useState } from "react";

const Index = () => {
  const [patient, setPatient] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    const fetchedPatient = {
      name: "John Doe",
      dob: "1980-01-01",
      gender: "Male",
      ssn: "123-45-6789",
    };
    const fetchedMedicalRecords = [];

    setPatient(fetchedPatient);
    setMedicalRecords(fetchedMedicalRecords);
  }, []);

  const handlePatientSelect = (patientData) => {
    setPatient(patientData);
  };

  return (
    <VStack spacing={8}>
      <PatientSearch onPatientSelect={handlePatientSelect} />
      {patient && <PatientInfo patient={patient} />}
      {medicalRecords && <PatientTimeline medicalRecords={medicalRecords} />}
    </VStack>
  );
};

export default Index;
