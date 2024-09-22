"use client";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

type Props = {
  index?: string;
  category?: string;
  description?: string;
  onClick?: any;
  buttonText?: string;
  bgGrid?: string;
  imgUrl?: string;
  headingFontSize?: string;
  descriptionFontSize?: string;
};

export default function ExpertAreaCard({
  bgGrid,
  index,
  category,
  description,
  headingFontSize,
  descriptionFontSize,
  onClick,
  buttonText,
  imgUrl,
}: Props) {
  return (
    <Center py={6}>
      <Box
        // maxW={'270px'}
        // w={'15%'}
        mx={"2rem"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image h={"120px"} w={"full"} src={imgUrl} objectFit="cover" alt="expertAreaCard" />

        <Box p={6} _hover={{ cursor: "pointer" }}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Text fontSize="1rem" fontWeight="bold">
              {category}
            </Text>
          </Stack>

          <Button
            w={"full"}
            bg={useColorModeValue("#4c50e0", "#4c50e0")}
            color={"white"}
            rounded={"xl"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            <Text>Consult Now </Text>
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
