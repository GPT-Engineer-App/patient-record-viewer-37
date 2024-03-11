import React, { useState } from "react";
import { Input, Button, HStack } from "@chakra-ui/react";

const PatientSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Search for: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <HStack>
        <Input placeholder="Search patients..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button colorScheme="blue" type="submit">
          Search
        </Button>
      </HStack>
    </form>
  );
};

export default PatientSearch;
