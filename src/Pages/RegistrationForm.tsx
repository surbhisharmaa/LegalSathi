import React, { useState } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
  InputRightElement,
  InputGroup,
  Select,
  VStack,
  Spacer,
  Divider,
  Box,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";
// import StateCityDropdown from "../Components/StateCitydropdown";
import ChipInput from "../Components/ChipInput";
const myInputRef = React.createRef();

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  state: string;
  barCouncilId: string;
  gender: string;
  barCouncilFile: File;
  specializations: string[];
  photo: File;
  description: string;
  experience: number;
  aadhar: string;
  errors:any;
}

export default function RegistrationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleClick = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        reset();
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while registering.");
    }
  };

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Text fontSize="3rem" fontWeight="bold" align="center">
        Create a New Account
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexRow vrAlign="space-between" hrAlign="space-evenly">
          <FlexColumn width="30%" height="70vh" hrAlign="space-evenly">
            <FormControl isRequired>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input
                id="firstName"
                placeholder="First name"
                {...register("firstName", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["firstName"] && errors["firstName"].message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input
                id="lastName"
                placeholder="Last name"
                {...register("lastName", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["lastName"] && errors["lastName"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="abc@gmail.com"
                {...register("email", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["email"] && errors["email"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup size="sm">
                <Input
                  id="password"
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                  size="sm"
                />
                <InputRightElement marginRight="1rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors["password"] && errors["password"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input
                id="city"
                placeholder="City"
                {...register("city", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["city"] && errors["city"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="state">State</FormLabel>
              <Input
                id="state"
                placeholder="State"
                {...register("state", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["state"] && errors["state"].message}
              </FormErrorMessage>
            </FormControl>
          </FlexColumn>

          <FlexColumn width="30%" height="70vh" hrAlign="space-evenly">
            <FormControl isRequired>
              <FormLabel htmlFor="experience">Experience</FormLabel>
              <Input
                id="experience"
                placeholder="5 Years"
                {...register("experience", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Please enter experience",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["state"] && errors["state"].message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="aadhar">Aadhar Number</FormLabel>
              <Input
                id="aadhar"
                placeholder="XXXX XXXX XXXX"
                {...register("aadhar", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["state"] && errors["state"].message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="barCouncilId">Bar Council ID</FormLabel>
              <Input
                id="barCouncilId"
                placeholder="Bar Council ID"
                {...register("barCouncilId", {
                  required: "This is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
                size="sm"
              />
              <FormErrorMessage>
                {errors["barCouncilId"] && errors["barCouncilId"].message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                id="gender"
                placeholder="Select option"
                {...register("gender", {
                  required: "This is required",
                })}
                size="sm"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
              <FormErrorMessage>
                {errors["gender"] && errors["gender"].message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Bar Council Certificate or ID Card</FormLabel>
              <Input type="file" accept="*" />
              <FormErrorMessage>
                {errors["barCouncilFile"] &&
                  errors["barCouncilFile"].message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="specializations">Specializations</FormLabel>
              <ChipInput
                label=""
                name="specializations"
                placeholder="Enter Specializations"
                // register={register}
                register={register("specializations", {
                  required: "This is required",
                })}
              // errors={errors}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Photo</FormLabel>
              <Input type="file" accept="*" />
              <FormErrorMessage>
                {errors["photo"] && errors["photo"].message}
              </FormErrorMessage>
            </FormControl>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <FormControl id="description" mt={4} width="40%" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                id="description"
                placeholder="description"
                {...register("description", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                size="md"
              />
            </FormControl>

            <Button
              mt={4}
              colorScheme="blue"
              isLoading={isSubmitting}
              type="submit"
              width="10%"
            >
              Submit
            </Button>
          </FlexColumn>
        </FlexRow>
      </form>
    </VStack>
  );
}
