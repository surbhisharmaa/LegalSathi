"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      // Send a POST request to your backend signup route
      console.log("value", values)
      const response = await fetch('http://localhost:5000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/login")
        alert(data.message); // Display a success message
        reset();
      } else {
        throw new Error('Signup failed');
      }

    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again later.');
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      id="firstName"
                      type="text"
                      // name="firstName"
                      {...register("firstName")} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input id="lastName"
                      type="text"
                      // name="lastName"
                      {...register("lastName")} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired >
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email"
                  type="email"
                  // name="email"
                  {...register("email")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input id="password" type={showPassword ? "text" : "password"}
                    //  name="password"
                    {...register("password")} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500"
                  }}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"} href="/login">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}