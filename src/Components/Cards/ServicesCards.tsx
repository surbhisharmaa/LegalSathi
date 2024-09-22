"use client";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";

type Props = {
  index?: string;
  title: string;
  description: string;
  onClick?: any;
  buttonText?: string;
  bgGrid?: string;
  height?: string;
  headingFontSize?: string;
  descriptionFontSize?: string;
};

export default function ServicesCards({
  bgGrid,
  index,
  title,
  description,
  headingFontSize,
  descriptionFontSize,
  onClick,
  buttonText,
  height,
}: Props) {
  return (
    <Center py={6}>
      <Box
        maxW={"20rem"}
        w={"full"}
        height="25rem"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        overflow={"hidden"}
        marginRight="0.5rem"
        marginLeft="0.5rem"
        transition={"transform 0.2s ease-in-out"}
        _hover={{
          transform: "scale(1.02)",
          boxShadow: "xl",
          cursor: "pointer",
        }}
        display="flex"
        flexDirection="column" // Set the card's content as a column
        justifyContent="space-between" // Align items to the start and end
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"lg"}
            letterSpacing={1.1}
          >
            {index}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            marginTop="1rem"
          >
            {title}
          </Heading>
          <Text color={"gray.500"} marginTop="1rem">
            {description}
          </Text>
        </Stack>
        <Stack direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
