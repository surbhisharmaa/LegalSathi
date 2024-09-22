import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagLabel,
  TagCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

interface ChipInputProps {
  label: string;
  name: string;
  placeholder: string;
  register: any; // You might need to replace 'any' with the actual type for register
  // errors:any;
  // setValue: any;
  // getValues: any;
}
const register = React.createRef();

const specializations: string[] = [
  "Criminal Law",
  "Family Law",
  "Corporate Law",
  "Immigration Law",
  "Intellectual Property Law",
  // Add more specializations as needed
];


const ChipInput: React.FC<ChipInputProps> = ({ label, name, placeholder, register }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      // Add the chip to the list
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleChipSelect = (chip: string) => {
    // Add the selected chip to the list
    setChips([...chips, chip]);
    setInputValue("");
  };

  const handleChipRemove = (chip: string) => {
    // Remove the chip from the list
    const updatedChips = chips.filter((c) => c !== chip);
    setChips(updatedChips);
  };

  return (
    <Box>
      <Text mb={2}>{label}</Text>
      <Box>
        {chips.map((chip) => (
          <Tag key={chip} m={1} size="md">
            <TagLabel>{chip}</TagLabel>
            <TagCloseButton onClick={() => handleChipRemove(chip)} />
          </Tag>
        ))}
      </Box>
      <InputGroup mt={4}>
        <Input
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          ref={register}
        />
        <InputRightElement width="auto">
          <Menu>
            <MenuButton as={Button} size="sm" variant="outline">
              Add Specialization
            </MenuButton>
            <MenuList>
              {specializations.map((specialization) => (
                <MenuItem
                  key={specialization}
                  onClick={() => handleChipSelect(specialization)}
                >
                  {specialization}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default ChipInput;
